import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Upload, Play, FileText, CheckCircle } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { Progress } from '@/components/ui/progress';

export default function TeacherEvaluate() {
  const [file, setFile] = useState<File | null>(null);
  const [examId, setExamId] = useState('');
  const [evaluationMode, setEvaluationMode] = useState('moderate');
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleEvaluate = async () => {
    if (!file || !examId) {
      toast({
        title: "Missing Information",
        description: "Please upload an answer sheet and select an exam.",
        variant: "destructive",
      });
      return;
    }

    setIsEvaluating(true);
    setProgress(0);

    // Simulate evaluation progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 500);

    await new Promise(resolve => setTimeout(resolve, 5000));

    toast({
      title: "Evaluation Complete",
      description: "The answer sheet has been evaluated successfully. View the results in Analytics.",
    });

    setIsEvaluating(false);
    setProgress(0);
    setFile(null);
  };

  return (
    <div className="space-y-6 animate-fade-in max-w-3xl">
      <div>
        <h2 className="text-2xl font-semibold text-foreground">Evaluate Answer Sheet</h2>
        <p className="text-muted-foreground mt-1">Upload student answer sheets for AI evaluation</p>
      </div>

      <div className="chart-container space-y-6">
        <div className="space-y-2">
          <Label>Select Exam</Label>
          <Select value={examId} onValueChange={setExamId}>
            <SelectTrigger>
              <SelectValue placeholder="Choose an exam to evaluate against" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ml-mid">Machine Learning - Midterm 2024</SelectItem>
              <SelectItem value="ai-final">AI - Final Exam 2024</SelectItem>
              <SelectItem value="dbms-mid">DBMS - Midterm 2024</SelectItem>
              <SelectItem value="os-quiz">Operating Systems - Quiz 3</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-4">
          <Label>Evaluation Mode</Label>
          <RadioGroup value={evaluationMode} onValueChange={setEvaluationMode} className="space-y-3">
            <div className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:bg-secondary/50 transition-colors">
              <RadioGroupItem value="lenient" id="lenient" />
              <div className="flex-1">
                <Label htmlFor="lenient" className="font-medium cursor-pointer">Lenient</Label>
                <p className="text-sm text-muted-foreground">Accepts partial answers, focuses on understanding</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:bg-secondary/50 transition-colors">
              <RadioGroupItem value="moderate" id="moderate" />
              <div className="flex-1">
                <Label htmlFor="moderate" className="font-medium cursor-pointer">Moderate</Label>
                <p className="text-sm text-muted-foreground">Balanced evaluation with reasonable tolerance</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:bg-secondary/50 transition-colors">
              <RadioGroupItem value="strict" id="strict" />
              <div className="flex-1">
                <Label htmlFor="strict" className="font-medium cursor-pointer">Strict</Label>
                <p className="text-sm text-muted-foreground">Exact matching, minimal tolerance for errors</p>
              </div>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label>Upload Answer Sheet</Label>
          <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary/50 transition-colors">
            <input
              type="file"
              id="answerSheet"
              className="hidden"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={handleFileChange}
            />
            <label htmlFor="answerSheet" className="cursor-pointer">
              {file ? (
                <div className="flex items-center justify-center gap-3">
                  <FileText className="w-8 h-8 text-accent" />
                  <div className="text-left">
                    <p className="font-medium text-foreground">{file.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {(file.size / 1024).toFixed(2)} KB
                    </p>
                  </div>
                  <CheckCircle className="w-5 h-5 text-accent" />
                </div>
              ) : (
                <div className="space-y-3">
                  <Upload className="w-12 h-12 text-muted-foreground mx-auto" />
                  <div>
                    <p className="font-medium text-foreground">Upload answer sheet</p>
                    <p className="text-sm text-muted-foreground">
                      PDF, JPG, JPEG or PNG (max 10MB)
                    </p>
                  </div>
                </div>
              )}
            </label>
          </div>
        </div>

        {isEvaluating && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Evaluating...</span>
              <span className="font-medium text-foreground">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        )}
      </div>

      <Button 
        onClick={handleEvaluate} 
        className="gradient-primary" 
        disabled={isEvaluating || !file || !examId}
      >
        <Play className="w-4 h-4 mr-2" />
        {isEvaluating ? 'Evaluating...' : 'Start Evaluation'}
      </Button>
    </div>
  );
}
