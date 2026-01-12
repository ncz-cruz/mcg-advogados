Markdown

# MCG Advogados - Website Institucional

Este é o repositório do website oficial do escritório **Monteiro de Carvalho & Gonçalves Advogados Associados (MCG Advogados)**. O projeto é uma Single Page Application (SPA) moderna, desenvolvida para apresentar as áreas de atuação, a equipe e fornecer canais de contato com o escritório.

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias principais:

- **[React](https://react.dev/)**: Biblioteca JavaScript para construção da interface.
- **[TypeScript](https://www.typescriptlang.org/)**: Superset do JavaScript que adiciona tipagem estática.
- **[Vite](https://vitejs.dev/)**: Build tool rápida para desenvolvimento web moderno.
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework CSS utilitário para estilização.
- **[Shadcn UI](https://ui.shadcn.com/)**: Coleção de componentes de interface reutilizáveis (baseados em Radix UI).
- **[React Router DOM](https://reactrouter.com/)**: Gerenciamento de rotas da aplicação.
- **[React Hook Form](https://react-hook-form.com/)** + **[Zod](https://zod.dev/)**: Gerenciamento e validação de formulários.
- **[Lucide React](https://lucide.dev/)**: Biblioteca de ícones.

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:
- [Node.js](https://nodejs.org/) (versão 20 ou superior recomendada)
- Gerenciador de pacotes (`npm`, `yarn` ou `bun`)

## 🔧 Instalação e Execução

Siga os passos abaixo para rodar o projeto em seu ambiente local:

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/ncz-cruz/mcg-advogados.git](https://github.com/ncz-cruz/mcg-advogados.git)
   cd mcg-advogados
Instale as dependências:

Bash

npm install
# ou
bun install
Inicie o servidor de desenvolvimento:

Bash

npm run dev
# ou
bun dev
Acesse a aplicação: O terminal mostrará o endereço local, geralmente http://localhost:8080 (conforme configurado no vite.config.ts).

📦 Build para Produção
Para gerar a versão otimizada para produção:

Execute o comando de build:

Bash

npm run build
Os arquivos estáticos serão gerados na pasta dist/. Esses arquivos estão prontos para serem hospedados em plataformas como Vercel, Netlify ou qualquer servidor estático.

Para visualizar a versão de produção localmente:

Bash

npm run preview
📂 Estrutura do Projeto
src/components: Componentes reutilizáveis (Header, Footer, seções da Home e componentes de UI).

src/pages: Páginas principais da aplicação (Início, Atuação, Contato).

src/assets: Imagens e recursos estáticos.

src/lib: Utilitários (configuração do Tailwind merge, etc).

src/hooks: Hooks customizados (ex: toast).

📝 Scripts Disponíveis
dev: Inicia o servidor de desenvolvimento.

build: Compila o projeto para produção.

lint: Executa o ESLint para verificar problemas no código.

preview: Visualiza o build de produção localmente.