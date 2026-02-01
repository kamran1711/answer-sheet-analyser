import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Upload, FileText, CheckCircle, AlertCircle } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

export default function TeacherUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [examName, setExamName] = useState('');
  const [subject, setSubject] = useState('');
  const [answerKey, setAnswerKey] = useState('');
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);
    
    // Simulate upload
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Answer Key Uploaded",
      description: "Your answer key has been successfully uploaded and is ready for evaluation.",
    });
    
    setUploading(false);
    setFile(null);
    setExamName('');
    setSubject('');
    setAnswerKey('');
  };

  return (
    <div className="space-y-6 animate-fade-in max-w-3xl">
      <div>
        <h2 className="text-2xl font-semibold text-foreground">Upload Answer Key</h2>
        <p className="text-muted-foreground mt-1">Upload the correct answer key for AI evaluation</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="chart-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="examName">Exam Name</Label>
              <Input
                id="examName"
                placeholder="e.g., Midterm Examination 2024"
                value={examName}
                onChange={(e) => setExamName(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Select value={subject} onValueChange={setSubject}>
                <SelectTrigger>
                  <SelectValue placeholder="Select subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ml">Machine Learning</SelectItem>
                  <SelectItem value="ai">Artificial Intelligence</SelectItem>
                  <SelectItem value="dbms">Database Management</SelectItem>
                  <SelectItem value="os">Operating Systems</SelectItem>
                  <SelectItem value="cn">Computer Networks</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2 mt-6">
            <Label htmlFor="answerKey">Answer Key (Text)</Label>
            <Textarea
              id="answerKey"
              placeholder="Enter the correct answers or paste the answer key text here..."
              value={answerKey}
              onChange={(e) => setAnswerKey(e.target.value)}
              className="min-h-[150px]"
            />
          </div>

          <div className="mt-6">
            <Label>Upload Answer Key File (Optional)</Label>
            <div className="mt-2 border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary/50 transition-colors">
              <input
                type="file"
                id="fileUpload"
                className="hidden"
                accept=".pdf,.doc,.docx,.txt"
                onChange={handleFileChange}
              />
              <label htmlFor="fileUpload" className="cursor-pointer">
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
                      <p className="font-medium text-foreground">Click to upload</p>
                      <p className="text-sm text-muted-foreground">
                        PDF, DOC, DOCX or TXT (max 10MB)
                      </p>
                    </div>
                  </div>
                )}
              </label>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <Button type="submit" className="gradient-primary" disabled={uploading}>
            {uploading ? 'Uploading...' : 'Upload Answer Key'}
          </Button>
          <Button type="button" variant="outline" onClick={() => {
            setFile(null);
            setExamName('');
            setSubject('');
            setAnswerKey('');
          }}>
            Clear Form
          </Button>
        </div>
      </form>
    </div>
  );
}
