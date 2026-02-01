import { CheckCircle2, AlertCircle, Lightbulb } from 'lucide-react';

const feedbackData = {
  strengths: [
    'Strong understanding of core concepts',
    'Well-structured answers with clear explanations',
    'Good use of examples to support arguments',
  ],
  improvements: [
    'Include more specific technical details',
    'Work on time management for longer questions',
    'Review grammar and punctuation',
  ],
  suggestions: [
    'Practice more numerical problems',
    'Focus on diagram-based explanations',
    'Study recent case studies for better application',
  ],
};

export function FeedbackSection() {
  return (
    <div className="chart-container">
      <h3 className="text-lg font-semibold text-foreground mb-4">AI-Generated Feedback</h3>
      
      <div className="space-y-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle2 className="w-5 h-5 text-accent" />
            <h4 className="font-medium text-foreground">Strengths</h4>
          </div>
          <ul className="space-y-2">
            {feedbackData.strengths.map((item, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-3">
            <AlertCircle className="w-5 h-5 text-destructive" />
            <h4 className="font-medium text-foreground">Areas for Improvement</h4>
          </div>
          <ul className="space-y-2">
            {feedbackData.improvements.map((item, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-3">
            <Lightbulb className="w-5 h-5 text-primary" />
            <h4 className="font-medium text-foreground">Suggestions</h4>
          </div>
          <ul className="space-y-2">
            {feedbackData.suggestions.map((item, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
