import { useState } from 'react';
import { TrendLineChart } from '@/components/charts/TrendLineChart';
import { PerformanceBarChart } from '@/components/charts/PerformanceBarChart';
import { ScorePieChart } from '@/components/charts/ScorePieChart';
import { TrendingUp } from 'lucide-react';

export default function StudentPerformance() {
  // Simulating no data - in real app, this would come from API
  const [hasData] = useState(false);

  if (!hasData) {
    return (
      <div className="space-y-6 animate-fade-in">
        <div>
          <h2 className="text-2xl font-semibold text-foreground">Performance Trends</h2>
          <p className="text-muted-foreground mt-1">Track your progress over time</p>
        </div>

        <div className="chart-container flex flex-col items-center justify-center py-16 text-center">
          <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mb-6">
            <TrendingUp className="w-10 h-10 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-2">No Performance Data</h3>
          <p className="text-muted-foreground max-w-md">
            Performance trends will be displayed here after you have completed multiple exams. 
            Keep taking exams to track your progress over time.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-2xl font-semibold text-foreground">Performance Trends</h2>
        <p className="text-muted-foreground mt-1">Track your progress over time</p>
      </div>

      <TrendLineChart />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PerformanceBarChart />
        <ScorePieChart />
      </div>
    </div>
  );
}
