import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';

export default function AdminSettings() {
  return (
    <div className="space-y-6 animate-fade-in max-w-3xl">
      <div>
        <h2 className="text-2xl font-semibold text-foreground">Settings</h2>
        <p className="text-muted-foreground mt-1">Manage system settings and preferences</p>
      </div>

      <div className="chart-container space-y-6">
        <div>
          <h3 className="text-lg font-medium text-foreground mb-4">General Settings</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="appName">Application Name</Label>
              <Input id="appName" defaultValue="AI-Based Answer Sheet Analyzer" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="supportEmail">Support Email</Label>
              <Input id="supportEmail" type="email" defaultValue="support@example.com" />
            </div>
          </div>
        </div>

        <Separator />

        <div>
          <h3 className="text-lg font-medium text-foreground mb-4">Evaluation Settings</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">Auto-Save Evaluations</p>
                <p className="text-sm text-muted-foreground">Automatically save evaluation progress</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">Enable AI Suggestions</p>
                <p className="text-sm text-muted-foreground">Show AI-powered feedback suggestions</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">Require Double Review</p>
                <p className="text-sm text-muted-foreground">Require two evaluators for each answer sheet</p>
              </div>
              <Switch />
            </div>
          </div>
        </div>

        <Separator />

        <div>
          <h3 className="text-lg font-medium text-foreground mb-4">Notification Settings</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">Email Notifications</p>
                <p className="text-sm text-muted-foreground">Send email alerts for important events</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">Result Notifications</p>
                <p className="text-sm text-muted-foreground">Notify students when results are available</p>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </div>
      </div>

      <Button className="gradient-primary">Save Changes</Button>
    </div>
  );
}
