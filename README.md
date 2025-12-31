# Verbo Zin Institute - Website

Website institucional da ONG Verbo Zin Institute, construído com Next.js 16+ e geração estática (SSG).

## Tecnologias

- **Next.js 16+** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS 4** - Estilização utilitária
- **Markdown** - Gestão de conteúdo com frontmatter
- **SSG** - Geração estática para melhor performance

## Estrutura do Projeto

```
website/
├── src/
│   ├── app/                    # Páginas (App Router)
│   │   ├── page.tsx            # Página inicial
│   │   ├── sobre-nos/          # Quem somos
│   │   ├── projetos/           # Projetos e parcerias
│   │   ├── doacoes/            # Central de doações
│   │   ├── noticias/           # Listagem e artigos
│   │   │   └── [slug]/         # Páginas dinâmicas
│   │   └── transparencia/      # Relatórios e governança
│   ├── components/
│   │   ├── layout/             # Cabecalho, Rodape, Navegacao
│   │   ├── secoes/             # Seções reutilizáveis
│   │   └── ui/                 # Componentes UI (Botao, Card, etc.)
│   └── lib/
│       ├── tipos.ts            # Interfaces TypeScript
│       ├── constantes.ts       # Dados estáticos do site
│       └── markdown.ts         # Utilitários para parse de markdown
├── content/                    # Conteúdo em Markdown
│   ├── noticias/               # Artigos de notícias
│   ├── projetos/               # Descrições de projetos
│   └── transparencia/          # Relatórios
└── public/                     # Assets estáticos
```

## Gerenciamento de Conteúdo

O conteúdo é gerenciado através de arquivos Markdown com frontmatter YAML.

### Notícias

Crie arquivos em `content/noticias/` com o formato:

```markdown
---
titulo: "Título da Notícia"
data: "2025-12-20"
categoria: "Educação"
resumo: "Breve resumo da notícia"
imagem: "/images/noticia.jpg"
imagemAlt: "Descrição da imagem"
destaque: true
urgente: false
---

Conteúdo da notícia em Markdown...
```

### Projetos

Crie arquivos em `content/projetos/`:

```markdown
---
nome: "Nome do Projeto"
categoria: "Educação"
descricao: "Descrição breve"
instituicao: "Nome da Instituição"
status: "em_andamento"
meta: 50000
atingido: 25000
---

Descrição completa do projeto...
```

### Transparência

Crie arquivos em `content/transparencia/`:

```markdown
---
titulo: "Relatório Anual 2023"
tipo: "relatorio_anual"
ano: 2023
descricao: "Balanço das atividades"
arquivoUrl: "/docs/relatorio-2023.pdf"
tamanhoArquivo: "2.4 MB"
---
```

## Scripts

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev

# Build para produção (SSG)
npm run build

# Iniciar servidor de produção
npm start

# Lint
npm run lint
```

## Componentes em Português

Os componentes seguem a nomenclatura em português brasileiro:

- `Cabecalho` - Header do site
- `Rodape` - Footer do site
- `Navegacao` - Menu de navegação
- `Botao` - Botão reutilizável
- `Card`, `CardNoticia`, `CardProjeto`, `CardValor` - Cards
- `SecaoHero`, `SecaoEstatisticas`, `SecaoValores` - Seções
- `Estatistica`, `EstatisticaSimplificada` - Métricas de impacto

## Deploy

O site é exportado como HTML estático (`output: "export"` no `next.config.ts`), podendo ser hospedado em qualquer serviço de hospedagem estática como:

- GitHub Pages
- Netlify
- Vercel
- CloudFlare Pages

## Licença

MIT License - Verbo Zin Institute
