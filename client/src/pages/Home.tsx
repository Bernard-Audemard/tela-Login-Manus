import { ForgotPasswordForm } from "@/components/ForgotPasswordForm";
import { LoginForm } from "@/components/LoginForm";
import { Route, Switch } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 relative overflow-hidden">
      {/* Elementos de fundo animados (Aurora Boreal simulada com CSS puro para complementar a imagem) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px] animate-pulse duration-[10s]" />
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[60%] bg-secondary/20 rounded-full blur-[100px] animate-pulse duration-[15s]" />
        <div className="absolute -bottom-[20%] left-[20%] w-[60%] h-[40%] bg-blue-600/20 rounded-full blur-[140px] animate-pulse duration-[12s]" />
      </div>

      <div className="z-10 w-full max-w-md animate-in fade-in slide-in-from-bottom-8 duration-700">
        <Switch>
          <Route path="/" component={LoginForm} />
          <Route path="/forgot-password" component={ForgotPasswordForm} />
        </Switch>
      </div>
      
      {/* Rodapé simples */}
      <div className="absolute bottom-4 text-center w-full text-blue-200/30 text-xs z-10">
        &copy; 2025 Aurora Systems. Todos os direitos reservados.
      </div>
    </div>
  );
}
