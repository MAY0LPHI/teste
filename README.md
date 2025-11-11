# Bible For You

## Descrição
O "Bible For You" é um aplicativo web responsivo que permite aos usuários pesquisar versículos da Bíblia, visualizar informações em cards, compartilhar conteúdo via WhatsApp e alternar entre temas claro e escuro. O aplicativo também integra funcionalidades de inteligência artificial para geração de imagens e conversão de texto em fala.

## Funcionalidades
- **Tela Splash**: Uma tela de carregamento que apresenta o nome do aplicativo e um ícone animado.
- **Pesquisa de Versículos**: Permite que os usuários busquem versículos por temas ou palavras-chave.
- **Exibição em Cards**: Os versículos encontrados são exibidos em um formato de card moderno.
- **Compartilhamento via WhatsApp**: Os usuários podem compartilhar versículos diretamente através do WhatsApp.
- **Tema Claro/Escuro**: Alternância entre temas claro e escuro, com a preferência do usuário salva no localStorage.
- **Integração com IA**: Geração de imagens baseadas em versículos e conversão de texto em fala.

## Estrutura do Projeto
```
bible-for-you
├── public
│   └── index.html
├── src
│   ├── main.tsx
│   ├── App.tsx
│   ├── pages
│   │   ├── Home.tsx
│   │   └── Verse.tsx
│   ├── components
│   │   ├── SplashScreen.tsx
│   │   ├── SearchBar.tsx
│   │   ├── VerseCard.tsx
│   │   ├── VerseList.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── ShareButton.tsx
│   │   ├── TTSPlayer.tsx
│   │   ├── ImageGenerator.tsx
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── hooks
│   │   ├── useTheme.ts
│   │   └── useSearch.ts
│   ├── services
│   │   ├── apiClient.ts
│   │   ├── bibleApi.ts
│   │   ├── aiService.ts
│   │   └── ttsService.ts
│   ├── utils
│   │   ├── helpers.ts
│   │   └── types.ts
│   └── styles
│       ├── global.css
│       └── themes.css
├── tests
│   ├── unit
│   │   └── example.spec.ts
│   └── e2e
│       └── example.e2e.ts
├── .env.example
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Instalação
1. Clone o repositório:
   ```
   git clone <URL_DO_REPOSITORIO>
   ```
2. Navegue até o diretório do projeto:
   ```
   cd bible-for-you
   ```
3. Instale as dependências:
   ```
   npm install
   ```

## Uso
Para iniciar o aplicativo, execute:
```
npm run dev
```
O aplicativo estará disponível em `http://localhost:3000`.

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## Licença
Este projeto está licenciado sob a MIT License. Veja o arquivo LICENSE para mais detalhes.