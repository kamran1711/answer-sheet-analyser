import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  variant?: 'default' | 'primary' | 'accent';
}

export function StatCard({ title, value, subtitle, icon: Icon, trend, variant = 'default' }: StatCardProps) {
  const iconBgClass = {
    default: 'bg-secondary',
    primary: 'gradient-primary',
    accent: 'gradient-accent',
  };

  const iconTextClass = {
    default: 'text-foreground',
    primary: 'text-primary-foreground',
    accent: 'text-accent-foreground',
  };

  return (
    <div className="stat-card">
      <div className="flex items-start justify-between">
        <div className={cn('w-12 h-12 rounded-xl flex items-center justify-center', iconBgClass[variant])}>
          <Icon className={cn('w-6 h-6', iconTextClass[variant])} />
        </div>
        {trend && (
          <span
            className={cn(
              'text-sm font-medium px-2 py-1 rounded-full',
              trend.isPositive
                ? 'bg-accent/10 text-accent'
                : 'bg-destructive/10 text-destructive'
            )}
          >
            {trend.isPositive ? '+' : ''}{trend.value}%
          </span>
        )}
      </div>
      <div className="mt-4">
        <p className="text-sm text-muted-foreground">{title}</p>
        <p className="text-3xl font-semibold text-foreground mt-1">{value}</p>
        {subtitle && (
          <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
