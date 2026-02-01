import { useAuth } from '@/contexts/AuthContext';
import { NavLink, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  Brain,
  LayoutDashboard,
  FileText,
  BarChart3,
  Upload,
  Settings,
  Users,
  TrendingUp,
  ClipboardCheck,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const studentLinks = [
  { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/dashboard/results', icon: FileText, label: 'My Results' },
  { to: '/dashboard/performance', icon: TrendingUp, label: 'Performance' },
];

const teacherLinks = [
  { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/dashboard/upload', icon: Upload, label: 'Upload Answer Key' },
  { to: '/dashboard/evaluate', icon: ClipboardCheck, label: 'Evaluate' },
  { to: '/dashboard/analytics', icon: BarChart3, label: 'Analytics' },
];

const adminLinks = [
  { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/dashboard/users', icon: Users, label: 'Manage Users' },
  { to: '/dashboard/analytics', icon: BarChart3, label: 'Analytics' },
  { to: '/dashboard/settings', icon: Settings, label: 'Settings' },
];

export function DashboardSidebar() {
  const { user } = useAuth();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const links = user?.role === 'admin' 
    ? adminLinks 
    : user?.role === 'teacher' 
    ? teacherLinks 
    : studentLinks;

  return (
    <aside
      className={cn(
        'h-screen bg-card border-r border-border flex flex-col transition-all duration-300',
        collapsed ? 'w-[72px]' : 'w-64'
      )}
    >
      <div className="p-4 border-b border-border flex items-center justify-between">
        <div className={cn('flex items-center gap-3', collapsed && 'justify-center')}>
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
            <Brain className="w-5 h-5 text-primary-foreground" />
          </div>
          {!collapsed && (
            <div className="animate-fade-in">
              <p className="font-semibold text-sm text-foreground">AI Analyzer</p>
              <p className="text-xs text-muted-foreground capitalize">{user?.role}</p>
            </div>
          )}
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className="h-8 w-8 flex-shrink-0"
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>

      <nav className="flex-1 p-3 space-y-1">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/dashboard'}
            className={({ isActive }) =>
              cn(
                'sidebar-link',
                isActive && 'active',
                collapsed && 'justify-center px-3'
              )
            }
          >
            <link.icon className="w-5 h-5 flex-shrink-0" />
            {!collapsed && <span className="animate-fade-in">{link.label}</span>}
          </NavLink>
        ))}
      </nav>

      <div className={cn('p-4 border-t border-border', collapsed && 'px-2')}>
        <div
          className={cn(
            'rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 p-4',
            collapsed && 'p-2'
          )}
        >
          {!collapsed ? (
            <>
              <p className="text-sm font-medium text-foreground">Need Help?</p>
              <p className="text-xs text-muted-foreground mt-1">
                Check our documentation for guidance.
              </p>
            </>
          ) : (
            <Settings className="w-5 h-5 text-primary mx-auto" />
          )}
        </div>
      </div>
    </aside>
  );
}
