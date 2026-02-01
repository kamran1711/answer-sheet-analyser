import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
import { useAuth } from '@/contexts/AuthContext';
import { UserRole } from '@/types/auth';
import { Brain, Mail, Lock, User } from 'lucide-react';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<UserRole>('student');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password, role);
    navigate('/dashboard');
  };

  return (
    <div className="login-panel w-full max-w-md animate-fade-in">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
          <Brain className="w-7 h-7 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-xl font-semibold text-foreground">AI-Based</h1>
          <p className="text-sm text-muted-foreground">Answer Sheet Analyzer</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-foreground mb-2">Welcome back</h2>
      <p className="text-muted-foreground mb-8">Please enter your credentials to continue</p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium">
            Email / Username
          </Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="email"
              type="text"
              placeholder="Enter your email or username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10 h-11"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="password" className="text-sm font-medium">
            Password
          </Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-10 h-11"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="role" className="text-sm font-medium">
            Select Role
          </Label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground z-10" />
            <Select value={role} onValueChange={(value: UserRole) => setRole(value)}>
              <SelectTrigger className="pl-10 h-11">
                <SelectValue placeholder="Select your role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="student">Student</SelectItem>
                <SelectItem value="teacher">Teacher</SelectItem>
                <SelectItem value="admin">Admin</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button type="submit" className="w-full h-11 gradient-primary text-primary-foreground font-medium">
          Login
        </Button>
      </form>

      <div className="mt-6 flex items-center justify-between text-sm">
        <a href="#" className="text-primary hover:underline">
          Forgot Password?
        </a>
        <a href="#" className="text-primary hover:underline">
          Register
        </a>
      </div>

      <div className="mt-8 pt-6 border-t border-border">
        <p className="text-xs text-center text-muted-foreground">
          By logging in, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
}
