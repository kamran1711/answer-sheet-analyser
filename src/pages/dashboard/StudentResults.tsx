import { useState } from 'react';
import { StatCard } from '@/components/StatCard';
import { PerformanceBarChart } from '@/components/charts/PerformanceBarChart';
import { TrendLineChart } from '@/components/charts/TrendLineChart';
import { ScorePieChart } from '@/components/charts/ScorePieChart';
import { FeedbackSection } from '@/components/FeedbackSection';
import { FileText, TrendingUp, Trophy, BarChart3 } from 'lucide-react';

export default function StudentResults() {
  // Simulating no data - in real app, this would come from API
  const [hasResults] = useState(false);

  if (!hasResults) {
    return (
      <div className="space-y-6 animate-fade-in">
        <div>
          <h2 className="text-2xl font-semibold text-foreground">My Results</h2>
          <p className="text-muted-foreground mt-1">View detailed results for all your exams</p>
        </div>

        <div className="chart-container flex flex-col items-center justify-center py-16 text-center">
          <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mb-6">
            <BarChart3 className="w-10 h-10 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-2">No Results Yet</h3>
          <p className="text-muted-foreground max-w-md">
            Your exam results will appear here once your answer sheets have been evaluated. 
            Please check back after your teacher completes the evaluation.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-2xl font-semibold text-foreground">My Results</h2>
        <p className="text-muted-foreground mt-1">View detailed results for all your exams</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="Latest Exam"
          value="88%"
          subtitle="Machine Learning"
          icon={FileText}
          trend={{ value: 8, isPositive: true }}
          variant="primary"
        />
        <StatCard
          title="Average Score"
          value="82%"
          subtitle="All exams"
          icon={TrendingUp}
          variant="default"
        />
        <StatCard
          title="Best Performance"
          value="92%"
          subtitle="AI Fundamentals"
          icon={Trophy}
          variant="accent"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ScorePieChart />
        <PerformanceBarChart />
      </div>

      <FeedbackSection />
    </div>
  );
}
