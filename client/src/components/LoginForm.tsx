import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Lock, Mail } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "wouter";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email("Por favor, insira um e-mail válido"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [, setLocation] = useLocation();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: LoginFormValues) {
    setIsLoading(true);
    // Simular delay de API
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    setIsLoading(false);
    // Aqui você redirecionaria o usuário
    alert("Login realizado com sucesso! (Simulação)");
  }

  return (
    <Card className="w-full max-w-md glass-card border-0 overflow-hidden relative group">
      {/* Efeito de brilho no topo */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary via-primary to-secondary opacity-80" />
      
      <CardHeader className="space-y-1 text-center pb-2">
        <CardTitle className="text-3xl font-bold tracking-tight text-white drop-shadow-sm">
          Bem-vindo
        </CardTitle>
        <CardDescription className="text-blue-100/70 text-base">
          Entre com suas credenciais para acessar
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 pt-6">
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-blue-100 font-medium ml-1">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-blue-200/50" />
              <Input
                id="email"
                placeholder="seu@email.com"
                type="email"
                className="pl-10 h-12 input-glass rounded-xl"
                {...form.register("email")}
              />
            </div>
            {form.formState.errors.email && (
              <p className="text-red-400 text-xs ml-1 animate-pulse">
                {form.formState.errors.email.message}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password" className="text-blue-100 font-medium ml-1">Senha</Label>
              <button
                type="button"
                onClick={() => setLocation("/forgot-password")}
                className="text-xs text-primary hover:text-primary/80 transition-colors font-medium"
              >
                Esqueceu a senha?
              </button>
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-blue-200/50" />
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="pl-10 h-12 input-glass rounded-xl"
                {...form.register("password")}
              />
            </div>
            {form.formState.errors.password && (
              <p className="text-red-400 text-xs ml-1 animate-pulse">
                {form.formState.errors.password.message}
              </p>
            )}
          </div>
          
          <Button 
            type="submit" 
            className="w-full h-12 text-base font-semibold bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 shadow-[0_0_20px_rgba(var(--primary),0.3)] rounded-xl mt-4 text-slate-900"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Entrando...
              </>
            ) : (
              "Entrar"
            )}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4 text-center text-sm text-blue-200/60 pb-8">
        <div className="relative w-full py-2">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-white/10" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-transparent px-2 text-blue-200/40">Ou continue com</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full">
          <Button variant="outline" className="bg-white/5 border-white/10 hover:bg-white/10 text-white hover:text-white h-10 rounded-lg">
            Google
          </Button>
          <Button variant="outline" className="bg-white/5 border-white/10 hover:bg-white/10 text-white hover:text-white h-10 rounded-lg">
            GitHub
          </Button>
        </div>
        <div className="pt-4">
          Não tem uma conta?{" "}
          <a href="#" className="text-primary hover:underline font-medium">
            Cadastre-se
          </a>
        </div>
      </CardFooter>
    </Card>
  );
}
