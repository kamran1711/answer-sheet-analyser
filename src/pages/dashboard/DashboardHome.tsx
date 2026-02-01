import { useAuth } from '@/contexts/AuthContext';
import { StatCard } from '@/components/StatCard';
import { PerformanceBarChart } from '@/components/charts/PerformanceBarChart';
import { TrendLineChart } from '@/components/charts/TrendLineChart';
import { ScorePieChart } from '@/components/charts/ScorePieChart';
import { FeedbackSection } from '@/components/FeedbackSection';
import { FileText, Trophy, TrendingUp, Users, BookOpen, CheckCircle, BarChart3, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function EmptyState({ title, description, actions }: { 
  title: string; 
  description: string; 
  actions?: React.ReactNode;
}) {
  return (
    <div className="chart-container flex flex-col items-center justify-center py-16 text-center">
      <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mb-6">
        <BarChart3 className="w-10 h-10 text-muted-foreground" />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground max-w-md mb-6">{description}</p>
      {actions}
    </div>
  );
}

export function StudentDashboard() {
  const navigate = useNavigate();
  // Simulating no data - in real app, this would come from API
  const [hasResults] = useState(false);

  if (!hasResults) {
    return (
      <div className="space-y-6 animate-fade-in">
        <div>
          <h2 className="text-2xl font-semibold text-foreground">Student Dashboard</h2>
          <p className="text-muted-foreground mt-1">View your exam results and performance analytics</p>
        </div>

        <EmptyState
          title="No Results Available"
          description="Your exam results will appear here once your answer sheets have been evaluated by your teachers."
        />
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-2xl font-semibold text-foreground">Student Dashboard</h2>
        <p className="text-muted-foreground mt-1">View your exam results and performance analytics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="Total Exams"
          value={6}
          subtitle="This semester"
          icon={FileText}
          variant="default"
        />
        <StatCard
          title="Average Score"
          value="82%"
          subtitle="Across all exams"
          icon={TrendingUp}
          trend={{ value: 5.2, isPositive: true }}
          variant="primary"
        />
        <StatCard
          title="Best Score"
          value="92%"
          subtitle="Machine Learning"
          icon={Trophy}
          variant="accent"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PerformanceBarChart />
        <TrendLineChart />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ScorePieChart />
        <FeedbackSection />
      </div>
    </div>
  );
}

export function TeacherDashboard() {
  const navigate = useNavigate();
  // Simulating no data - in real app, this would come from API
  const [hasEvaluations] = useState(false);

  if (!hasEvaluations) {
    return (
      <div className="space-y-6 animate-fade-in">
        <div>
          <h2 className="text-2xl font-semibold text-foreground">Teacher Dashboard</h2>
          <p className="text-muted-foreground mt-1">Manage evaluations and view class analytics</p>
        </div>

        <EmptyState
          title="No Evaluations Yet"
          description="Start by uploading an answer key, then evaluate student answer sheets to see analytics here."
          actions={
            <div className="flex gap-3">
              <Button onClick={() => navigate('/dashboard/upload')} className="gradient-primary">
                <Upload className="w-4 h-4 mr-2" />
                Upload Answer Key
              </Button>
              <Button variant="outline" onClick={() => navigate('/dashboard/evaluate')}>
                Evaluate Answers
              </Button>
            </div>
          }
        />
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-2xl font-semibold text-foreground">Teacher Dashboard</h2>
        <p className="text-muted-foreground mt-1">Manage evaluations and view class analytics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="Pending Evaluations"
          value={12}
          subtitle="Answer sheets to review"
          icon={FileText}
          variant="default"
        />
        <StatCard
          title="Evaluated Today"
          value={28}
          subtitle="Answer sheets processed"
          icon={CheckCircle}
          trend={{ value: 15, isPositive: true }}
          variant="primary"
        />
        <StatCard
          title="Class Average"
          value="76%"
          subtitle="Current batch"
          icon={TrendingUp}
          variant="accent"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PerformanceBarChart />
        <TrendLineChart />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ScorePieChart />
        <FeedbackSection />
      </div>
    </div>
  );
}

export function AdminDashboard() {
  // Simulating no data - in real app, this would come from API
  const [hasData] = useState(false);

  if (!hasData) {
    return (
      <div className="space-y-6 animate-fade-in">
        <div>
          <h2 className="text-2xl font-semibold text-foreground">Admin Dashboard</h2>
          <p className="text-muted-foreground mt-1">System overview and user management</p>
        </div>

        <EmptyState
          title="No System Data Yet"
          description="Analytics will appear here once users start using the system. Add users and wait for evaluations to begin."
        />
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-2xl font-semibold text-foreground">Admin Dashboard</h2>
        <p className="text-muted-foreground mt-1">System overview and user management</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard
          title="Total Users"
          value={1248}
          subtitle="Active accounts"
          icon={Users}
          trend={{ value: 8.3, isPositive: true }}
          variant="default"
        />
        <StatCard
          title="Active Students"
          value={1024}
          subtitle="This month"
          icon={BookOpen}
          variant="primary"
        />
        <StatCard
          title="Total Teachers"
          value={86}
          subtitle="Active instructors"
          icon={FileText}
          variant="accent"
        />
        <StatCard
          title="Exams Evaluated"
          value="15.2K"
          subtitle="All time"
          icon={CheckCircle}
          variant="default"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PerformanceBarChart />
        <TrendLineChart />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ScorePieChart />
        <FeedbackSection />
      </div>
    </div>
  );
}

export default function DashboardHome() {
  const { user } = useAuth();

  if (user?.role === 'admin') {
    return <AdminDashboard />;
  }

  if (user?.role === 'teacher') {
    return <TeacherDashboard />;
  }

  return <StudentDashboard />;
}
