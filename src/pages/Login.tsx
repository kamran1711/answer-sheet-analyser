import { LoginForm } from '@/components/LoginForm';
import loginIllustration from '@/assets/login-illustration.jpg';
import { Brain, BarChart3, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Analysis',
    description: 'Intelligent evaluation of answer sheets using advanced AI',
  },
  {
    icon: BarChart3,
    title: 'Detailed Analytics',
    description: 'Comprehensive performance insights and trends',
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Your data is protected with enterprise-grade security',
  },
  {
    icon: Zap,
    title: 'Instant Results',
    description: 'Get evaluation results in seconds, not hours',
  },
];

const Login = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left side - Illustration */}
      <div className="hidden lg:flex lg:w-[60%] relative bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="absolute inset-0">
          <img
            src={loginIllustration}
            alt="AI Education Illustration"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
        </div>
        
        <div className="relative z-10 flex flex-col justify-end p-12">
          <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-8 border border-border max-w-lg">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Transform Your Evaluation Process
            </h2>
            <p className="text-muted-foreground mb-6">
              Harness the power of artificial intelligence to evaluate answer sheets with precision, 
              consistency, and speed.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{feature.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="w-full lg:w-[40%] flex items-center justify-center p-6 lg:p-12 bg-background">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
