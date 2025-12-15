# Tela de Login - Aurora Boreal Theme

Uma tela de login moderna e responsiva desenvolvida em **React 19** com **TypeScript** e **Tailwind CSS 4**, apresentando um design elegante com tema Aurora Boreal (Glassmorphism). O projeto inclui funcionalidades de autenticação, recuperação de senha e integração com redes sociais.

## 🎨 Características

- **Design Moderno:** Tema Aurora Boreal com efeito Glassmorphism e gradientes dinâmicos
- **Validação de Formulários:** Validação robusta com Zod e React Hook Form
- **Recuperação de Senha:** Fluxo completo de recuperação de senha
- **Responsivo:** Totalmente adaptado para dispositivos móveis e desktop
- **Roteamento:** Navegação fluida entre telas de login e recuperação de senha
- **Componentes Reutilizáveis:** Biblioteca completa de componentes shadcn/ui
- **Ícones Modernos:** Utiliza Lucide React para ícones vetoriais de alta qualidade

## 🛠️ Stack Tecnológico

| Tecnologia | Versão | Descrição |
|-----------|--------|-----------|
| React | 19.0.0 | Framework JavaScript para UI |
| TypeScript | 5.6.3 | Linguagem com tipagem estática |
| Tailwind CSS | 4.1.14 | Framework CSS utilitário |
| Vite | 7.1.7 | Build tool e dev server |
| React Hook Form | 7.64.0 | Gerenciamento de formulários |
| Zod | 4.1.12 | Validação de schemas |
| Wouter | 3.3.5 | Roteamento cliente-side |
| Lucide React | 0.453.0 | Biblioteca de ícones |

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- **Node.js:** Versão 18.0.0 ou superior ([Download](https://nodejs.org/))
- **pnpm:** Gerenciador de pacotes rápido e eficiente (recomendado) ou npm/yarn
- **Git:** Para clonar o repositório

Para instalar o pnpm globalmente, execute:

```bash
npm install -g pnpm
```

## 🚀 Instalação e Setup Local

### 1. Clonar o Repositório

```bash
git clone https://github.com/Bernard-Audemard/tela-Login-Manus.git
cd tela-Login-Manus
```

### 2. Instalar Dependências

Usando **pnpm** (recomendado):

```bash
pnpm install
```

Ou usando **npm**:

```bash
npm install
```

### 3. Iniciar o Servidor de Desenvolvimento

```bash
pnpm dev
```

O servidor será iniciado em `http://localhost:3000`. A aplicação recarregará automaticamente quando você fizer alterações nos arquivos.

### 4. Acessar a Aplicação

Abra seu navegador e acesse:

```
http://localhost:3000
```

Você verá a tela de login com o tema Aurora Boreal. Para testar a funcionalidade de recuperação de senha, clique no link "Esqueceu a senha?" na tela de login.

## 📁 Estrutura do Projeto

```
tela-Login-Manus/
├── client/                          # Código frontend
│   ├── public/
│   │   └── images/
│   │       └── aurora-bg.jpg       # Imagem de fundo Aurora Boreal
│   ├── src/
│   │   ├── components/
│   │   │   ├── LoginForm.tsx       # Componente do formulário de login
│   │   │   ├── ForgotPasswordForm.tsx  # Componente de recuperação de senha
│   │   │   ├── ErrorBoundary.tsx   # Boundary para tratamento de erros
│   │   │   └── ui/                 # Componentes shadcn/ui
│   │   ├── pages/
│   │   │   ├── Home.tsx            # Página principal com roteamento
│   │   │   └── NotFound.tsx        # Página 404
│   │   ├── contexts/
│   │   │   └── ThemeContext.tsx    # Contexto de tema
│   │   ├── hooks/                  # Hooks customizados
│   │   ├── lib/                    # Funções utilitárias
│   │   ├── App.tsx                 # Componente raiz
│   │   ├── main.tsx                # Ponto de entrada
│   │   └── index.css               # Estilos globais e variáveis CSS
│   └── index.html                  # Template HTML
├── server/                          # Código backend (placeholder)
├── shared/                          # Código compartilhado
├── package.json                     # Dependências do projeto
├── tsconfig.json                    # Configuração TypeScript
├── vite.config.ts                   # Configuração Vite
├── tailwind.config.ts               # Configuração Tailwind CSS
└── README.md                        # Este arquivo
```

## 🔧 Desenvolvimento

### Executar em Modo de Desenvolvimento

```bash
pnpm dev
```

O Vite fornecerá um servidor de desenvolvimento com hot module replacement (HMR), permitindo que você veja as mudanças em tempo real.

### Verificar Tipos TypeScript

```bash
pnpm check
```

Este comando verifica se há erros de tipo no projeto sem compilar.

### Formatar Código

```bash
pnpm format
```

Formata o código usando Prettier de acordo com as configurações do projeto.

## 🏗️ Build para Produção

### Compilar a Aplicação

```bash
pnpm build
```

Este comando cria uma versão otimizada para produção na pasta `dist/`. O build inclui:

- Minificação de JavaScript e CSS
- Tree-shaking para remover código não utilizado
- Otimização de assets
- Geração de source maps

### Visualizar Build Localmente

Para testar a versão de produção localmente antes de fazer deploy:

```bash
pnpm preview
```

A aplicação será servida em `http://localhost:4173`.

## 🌐 Deploy

### Deploy na Plataforma Manus

O projeto está otimizado para deploy na plataforma **Manus**, que oferece hospedagem gerenciada com suporte a domínios customizados.

**Passos para Deploy:**

1. Acesse o painel de controle da Manus
2. Selecione a opção "Publish" (Publicar)
3. Confirme o deployment
4. A aplicação estará disponível em um domínio `*.manus.space` ou em um domínio customizado

### Deploy em Outras Plataformas

#### Vercel

Vercel oferece uma integração perfeita com repositórios GitHub:

1. Acesse [https://vercel.com](https://vercel.com)
2. Clique em "New Project"
3. Selecione o repositório `tela-Login-Manus`
4. Configure as variáveis de ambiente (se necessário)
5. Clique em "Deploy"

A aplicação será automaticamente deployada e redeployada a cada push na branch `main`.

#### Netlify

Netlify também oferece integração com GitHub:

1. Acesse [https://netlify.com](https://netlify.com)
2. Clique em "New site from Git"
3. Selecione o repositório `tela-Login-Manus`
4. Configure o comando de build: `pnpm build`
5. Configure o diretório de publicação: `dist`
6. Clique em "Deploy site"

#### Railway

Railway é uma plataforma moderna para deploy de aplicações:

1. Acesse [https://railway.app](https://railway.app)
2. Clique em "New Project"
3. Selecione "Deploy from GitHub"
4. Escolha o repositório `tela-Login-Manus`
5. Configure as variáveis de ambiente
6. O deploy será iniciado automaticamente

#### Render

Render oferece hospedagem gratuita e paga:

1. Acesse [https://render.com](https://render.com)
2. Clique em "New +"
3. Selecione "Web Service"
4. Conecte seu repositório GitHub
5. Configure o comando de build: `pnpm build`
6. Configure o comando de start: `pnpm start`
7. Clique em "Create Web Service"

### Variáveis de Ambiente

O projeto utiliza as seguintes variáveis de ambiente (injetadas automaticamente pela plataforma Manus):

| Variável | Descrição |
|----------|-----------|
| `VITE_APP_TITLE` | Título da aplicação |
| `VITE_APP_LOGO` | URL do logo da aplicação |
| `VITE_ANALYTICS_ENDPOINT` | Endpoint de analytics |
| `VITE_ANALYTICS_WEBSITE_ID` | ID do website para analytics |

Para adicionar variáveis customizadas, acesse o painel de configuração da plataforma de hospedagem.

## 🧪 Testes

O projeto está configurado com **Vitest** para testes unitários. Para executar os testes:

```bash
pnpm test
```

Para executar testes em modo watch:

```bash
pnpm test:watch
```

## 📝 Customização

### Alterar Cores do Tema

As cores do tema estão definidas em `client/src/index.css`. Para customizar as cores, edite as variáveis CSS:

```css
:root {
  --primary: oklch(0.75 0.18 180);      /* Cor primária (Cyan) */
  --secondary: oklch(0.65 0.2 150);     /* Cor secundária (Verde) */
  --background: oklch(0.12 0.04 260);   /* Cor de fundo (Azul marinho) */
  /* ... outras variáveis */
}
```

### Alterar Imagem de Fundo

Para substituir a imagem de fundo Aurora Boreal:

1. Coloque sua imagem em `client/public/images/`
2. Atualize a referência em `client/src/index.css`:

```css
body {
  background-image: url('/images/sua-imagem.jpg');
}
```

### Adicionar Novos Componentes

Para adicionar novos componentes shadcn/ui:

```bash
npx shadcn-ui@latest add [nome-do-componente]
```

## 🐛 Troubleshooting

### Problema: "Module not found"

**Solução:** Certifique-se de que todas as dependências estão instaladas:

```bash
pnpm install
```

Se o problema persistir, limpe o cache e reinstale:

```bash
pnpm store prune
pnpm install
```

### Problema: Porta 3000 já está em uso

**Solução:** O Vite usará automaticamente a próxima porta disponível. Você pode especificar uma porta manualmente:

```bash
pnpm dev -- --port 3001
```

### Problema: Erro de CORS em requisições

**Solução:** Se você estiver fazendo requisições para APIs externas, configure o proxy no `vite.config.ts`:

```typescript
server: {
  proxy: {
    '/api': {
      target: 'https://sua-api.com',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, '')
    }
  }
}
```

### Problema: Estilos não estão sendo aplicados

**Solução:** Certifique-se de que o arquivo `client/src/index.css` está sendo importado em `client/src/main.tsx`:

```typescript
import './index.css'
```

## 📚 Recursos Adicionais

- [Documentação React](https://react.dev)
- [Documentação Tailwind CSS](https://tailwindcss.com/docs)
- [Documentação Vite](https://vitejs.dev)
- [Documentação shadcn/ui](https://ui.shadcn.com)
- [Documentação React Hook Form](https://react-hook-form.com)
- [Documentação Zod](https://zod.dev)

## 📄 Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👤 Autor

Desenvolvido por **Manus AI** com ❤️

## 🤝 Contribuições

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📞 Suporte

Se encontrar problemas ou tiver dúvidas, abra uma issue no repositório GitHub ou entre em contato através do email de suporte.

---

**Última atualização:** Dezembro de 2025
