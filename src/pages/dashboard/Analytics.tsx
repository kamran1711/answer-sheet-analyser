import { useState } from 'react';
import { StatCard } from '@/components/StatCard';
import { PerformanceBarChart } from '@/components/charts/PerformanceBarChart';
import { TrendLineChart } from '@/components/charts/TrendLineChart';
import { ScorePieChart } from '@/components/charts/ScorePieChart';
import { Users, FileText, CheckCircle, TrendingUp, BarChart3, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function Analytics() {
  const navigate = useNavigate();
  // Simulating no data state - in real app, this would come from API/database
  const [hasData] = useState(false);

  if (!hasData) {
    return (
      <div className="space-y-6 animate-fade-in">
        <div>
          <h2 className="text-2xl font-semibold text-foreground">Analytics</h2>
          <p className="text-muted-foreground mt-1">Comprehensive evaluation analytics and insights</p>
        </div>

        <div className="chart-container flex flex-col items-center justify-center py-16 text-center">
          <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mb-6">
            <BarChart3 className="w-10 h-10 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-2">No Analytics Data Yet</h3>
          <p className="text-muted-foreground max-w-md mb-6">
            Analytics will appear here once answer sheets have been evaluated. 
            Start by uploading an answer key and evaluating student submissions.
          </p>
          <div className="flex gap-3">
            <Button onClick={() => navigate('/dashboard/upload')} className="gradient-primary">
              <Upload className="w-4 h-4 mr-2" />
              Upload Answer Key
            </Button>
            <Button variant="outline" onClick={() => navigate('/dashboard/evaluate')}>
              Evaluate Answers
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-2xl font-semibold text-foreground">Analytics</h2>
        <p className="text-muted-foreground mt-1">Comprehensive evaluation analytics and insights</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard
          title="Total Evaluations"
          value="1,248"
          subtitle="This semester"
          icon={FileText}
          variant="default"
        />
        <StatCard
          title="Pass Rate"
          value="87%"
          subtitle="Above threshold"
          icon={CheckCircle}
          trend={{ value: 3.2, isPositive: true }}
          variant="accent"
        />
        <StatCard
          title="Average Score"
          value="76%"
          subtitle="All students"
          icon={TrendingUp}
          variant="primary"
        />
        <StatCard
          title="Active Students"
          value="324"
          subtitle="This month"
          icon={Users}
          variant="default"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PerformanceBarChart />
        <TrendLineChart />
      </div>

      <ScorePieChart />
    </div>
  );
}
