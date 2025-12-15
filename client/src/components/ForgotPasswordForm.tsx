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
import { ArrowLeft, Loader2, Mail } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "wouter";
import { z } from "zod";

const forgotPasswordSchema = z.object({
  email: z.string().email("Por favor, insira um e-mail válido"),
});

type ForgotPasswordValues = z.infer<typeof forgotPasswordSchema>;

export function ForgotPasswordForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [, setLocation] = useLocation();

  const form = useForm<ForgotPasswordValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(data: ForgotPasswordValues) {
    setIsLoading(true);
    // Simular delay de API
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    setIsLoading(false);
    setIsSubmitted(true);
  }

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-md glass-card border-0 overflow-hidden relative animate-in fade-in zoom-in duration-500">
        <CardHeader className="text-center pb-2">
          <div className="mx-auto w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
            <Mail className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-2xl font-bold text-white">Verifique seu e-mail</CardTitle>
          <CardDescription className="text-blue-100/70 text-base mt-2">
            Enviamos um link de recuperação para <br/>
            <span className="font-medium text-white">{form.getValues("email")}</span>
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-center pt-6 pb-8">
          <Button 
            variant="ghost" 
            onClick={() => setLocation("/")}
            className="text-blue-200 hover:text-white hover:bg-white/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para o Login
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md glass-card border-0 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary via-primary to-secondary opacity-80" />
      
      <CardHeader className="space-y-1 text-center pb-2">
        <CardTitle className="text-2xl font-bold tracking-tight text-white">
          Recuperar Senha
        </CardTitle>
        <CardDescription className="text-blue-100/70 text-base">
          Digite seu e-mail e enviaremos instruções para redefinir sua senha.
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
          
          <Button 
            type="submit" 
            className="w-full h-12 text-base font-semibold bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 shadow-[0_0_20px_rgba(var(--primary),0.3)] rounded-xl mt-4 text-slate-900"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Enviando...
              </>
            ) : (
              "Enviar Link de Recuperação"
            )}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center pb-8">
        <Button 
          variant="ghost" 
          onClick={() => setLocation("/")}
          className="text-blue-200 hover:text-white hover:bg-white/10"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para o Login
        </Button>
      </CardFooter>
    </Card>
  );
}
