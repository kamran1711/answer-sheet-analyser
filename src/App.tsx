import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Login from "./pages/Login";
import { DashboardLayout } from "./layouts/DashboardLayout";
import DashboardHome from "./pages/dashboard/DashboardHome";
import StudentResults from "./pages/dashboard/StudentResults";
import StudentPerformance from "./pages/dashboard/StudentPerformance";
import TeacherUpload from "./pages/dashboard/TeacherUpload";
import TeacherEvaluate from "./pages/dashboard/TeacherEvaluate";
import Analytics from "./pages/dashboard/Analytics";
import AdminUsers from "./pages/dashboard/AdminUsers";
import AdminSettings from "./pages/dashboard/AdminSettings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<DashboardHome />} />
              {/* Student routes */}
              <Route path="results" element={<StudentResults />} />
              <Route path="performance" element={<StudentPerformance />} />
              {/* Teacher routes */}
              <Route path="upload" element={<TeacherUpload />} />
              <Route path="evaluate" element={<TeacherEvaluate />} />
              <Route path="analytics" element={<Analytics />} />
              {/* Admin routes */}
              <Route path="users" element={<AdminUsers />} />
              <Route path="settings" element={<AdminSettings />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
