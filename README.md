# 🚀 Portfólio Pessoal - Gabriel Passos

Um site portfólio moderno e responsivo construído com **Spring Boot** (backend) e **React** (frontend), apresentando um tema neon cyberpunk com animações fluidas e design profissional.

![Portfolio Preview](https://img.shields.io/badge/Status-Completed-brightgreen)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.0-brightgreen)
![React](https://img.shields.io/badge/React-18.0-blue)
![Java](https://img.shields.io/badge/Java-17-orange)

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Funcionalidades](#-funcionalidades)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Como Executar](#-como-executar)
- [API Endpoints](#-api-endpoints)
- [Componentes Frontend](#-componentes-frontend)
- [Estilização e Tema](#-estilização-e-tema)
- [Screenshots](#-screenshots)
- [Contribuição](#-contribuição)
- [Licença](#-licença)

## 🎯 Sobre o Projeto

Este é um portfólio pessoal completo desenvolvido para Gabriel Passos, Cientista da Computação. O projeto demonstra habilidades tanto em desenvolvimento backend quanto frontend, apresentando projetos, skills e informações de contato de forma visualmente atrativa.

### Características Principais:
- **Design Moderno**: Tema neon cyberpunk com gradientes e animações
- **Totalmente Responsivo**: Adaptado para desktop, tablet e mobile
- **API RESTful**: Backend Spring Boot com endpoints bem estruturados
- **Animações Fluidas**: Usando Framer Motion para transições suaves
- **Formulário de Contato**: Sistema funcional de envio de mensagens
- **SEO Otimizado**: Meta tags e estrutura semântica

## 🛠️ Tecnologias Utilizadas

### Backend
- **Java 17**: Linguagem principal
- **Spring Boot 3.0**: Framework web
- **Gradle**: Gerenciamento de dependências
- **Spring Web**: Para criação de APIs REST
- **CORS**: Configurado para comunicação com frontend

### Frontend
- **React 18**: Biblioteca principal
- **JavaScript (ES6+)**: Linguagem de programação
- **CSS3**: Estilização avançada com gradientes e animações
- **Framer Motion**: Biblioteca de animações
- **React Icons**: Ícones vetoriais
- **HTML5**: Estrutura semântica

### Ferramentas de Desenvolvimento
- **VS Code**: IDE principal
- **Git**: Controle de versão
- **npm**: Gerenciador de pacotes
- **Chrome DevTools**: Debug e testes

## ✨ Funcionalidades

### 🏠 Seção Hero
- Apresentação pessoal com nome animado
- Links para redes sociais (GitHub, LinkedIn)
- Botões de call-to-action
- Animações de background flutuantes

### 👤 Sobre Mim
- Biografia profissional
- Informações sobre formação
- Objetivo de carreira

### 🚀 Projetos
- Galeria de projetos com cards interativos
- Projeto principal: Sistema de Análise de Imagens para Monitoramento de Enchentes
- Card especial "Em Breve" para projetos futuros
- Links para GitHub e demonstrações
- Tecnologias utilizadas em cada projeto

### 🎯 Habilidades
- Barras de progresso animadas
- Categorias: Backend, Frontend, Ferramentas
- Níveis de proficiência visual

### 📧 Contato
- Formulário funcional de contato
- Validação de campos
- Envio para API backend
- Feedback visual para o usuário

### 🦶 Rodapé
- Links rápidos para navegação
- Redes sociais
- Copyright e informações legais

## 📁 Estrutura do Projeto

```
portfolio_website/
├── 📁 backend/                    # Aplicação Spring Boot
│   ├── 📁 src/main/java/com/portfolio/backend/
│   │   └── 📁 controller/
│   │       └── 📄 PortfolioController.java    # API REST endpoints
│   ├── 📄 build.gradle           # Dependências Gradle
│   └── 📄 gradlew               # Gradle Wrapper
│
├── 📁 frontend/                  # Aplicação React
│   ├── 📁 public/               # Arquivos estáticos
│   │   ├── 📁 images/           # Imagens do projeto
│   │   └── 📄 index.html        # HTML principal
│   │
│   └── 📁 src/                  # Código fonte React
│       ├── 📁 components/       # Componentes React
│       │   ├── 📄 Navbar.js     # Navegação principal
│       │   ├── 📄 Hero.js       # Seção de apresentação
│       │   ├── 📄 About.js      # Seção sobre mim
│       │   ├── 📄 Projects.js   # Galeria de projetos
│       │   ├── 📄 Skills.js     # Habilidades técnicas
│       │   ├── 📄 Contact.js    # Formulário de contato
│       │   ├── 📄 Footer.js     # Rodapé
│       │   └── 📄 *.css         # Estilos de cada componente
│       │
│       ├── 📄 App.js            # Componente raiz
│       ├── 📄 App.css           # Estilos globais e variáveis CSS
│       └── 📄 index.js          # Entry point da aplicação
│
└── 📄 README.md                 # Este arquivo
```

## 🚀 Como Executar

### Pré-requisitos
- Java 17 ou superior
- Node.js 16 ou superior
- npm ou yarn

### 1. Clonar o Repositório
```bash
git clone https://github.com/gpassos01/portfolio_website.git
cd portfolio_website
```

### 2. Executar o Backend
```bash
cd backend
./gradlew bootRun
```
O servidor estará disponível em: `http://localhost:8080`

### 3. Executar o Frontend
```bash
cd frontend
npm install
npm start
```
A aplicação estará disponível em: `http://localhost:3000`

### 4. Acessar a Aplicação
Abra seu navegador e acesse `http://localhost:3000`

## 🔌 API Endpoints

### Base URL: `http://localhost:8080/api`

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `GET` | `/profile` | Informações pessoais (nome, título, bio, contatos) |
| `GET` | `/projects` | Lista de projetos com detalhes |
| `GET` | `/skills` | Habilidades técnicas categorizadas |
| `POST` | `/contact` | Envio de formulário de contato |

### Exemplos de Resposta

#### GET /api/profile
```json
{
  "name": "Gabriel Passos",
  "title": "Cientista da Computação",
  "bio": "Cientista da Computação apaixonado por criar soluções inovadoras.",
  "email": "gabriel.passos@unesp.br",
  "github": "https://github.com/gpassos01",
  "linkedin": "https://www.linkedin.com/in/gabriel-passos26/"
}
```

#### GET /api/projects
```json
[
  {
    "id": 1,
    "title": "Análise de Imagens para Monitoramento e Prevenção de Enchentes",
    "description": "Sistema de análise de imagens de câmera para detecção de mudanças no nível da água...",
    "technologies": ["Python", "OpenCV", "ESP32-CAM", "Machine Learning", "IoT"],
    "githubUrl": "https://github.com/gpassos01/espCam_imageAnalysis",
    "imageUrl": "/images/ai-thinker-esp32-cam.png",
    "status": "completed"
  }
]
```

## 🧩 Componentes Frontend

### 1. **Navbar.js**
- **Função**: Navegação principal responsiva
- **Características**: 
  - Menu hambúrguer para mobile
  - Scroll suave entre seções
  - Highlight da seção ativa
  - Estilo glassmorphism

### 2. **Hero.js**
- **Função**: Seção de apresentação principal
- **Características**:
  - Nome com gradiente neon animado
  - Links para redes sociais
  - Botões de call-to-action
  - Animações de background

### 3. **About.js**
- **Função**: Seção sobre informações pessoais
- **Características**:
  - Biografia profissional
  - Animações de entrada
  - Layout responsivo

### 4. **Projects.js**
- **Função**: Galeria de projetos
- **Características**:
  - Cards interativos com hover effects
  - Overlay com links para GitHub
  - Card especial "Em Breve"
  - Grid responsivo

### 5. **Skills.js**
- **Função**: Exibição de habilidades técnicas
- **Características**:
  - Barras de progresso animadas
  - Categorização (Backend, Frontend, Tools)
  - Efeitos visuais shinning

### 6. **Contact.js**
- **Função**: Formulário de contato
- **Características**:
  - Validação de campos
  - Envio para API
  - Feedback visual
  - Design neon

### 7. **Footer.js**
- **Função**: Rodapé com informações adicionais
- **Características**:
  - Links de navegação
  - Redes sociais
  - Copyright

## 🎨 Estilização e Tema

### Paleta de Cores Neon
```css
:root {
  /* Cores Primárias */
  --primary-color: #af3dff;      /* Roxo Neon */
  --secondary-color: #ff3b94;    /* Rosa Neon */
  --accent-color: #55ffe1;       /* Ciano Neon */
  --success-color: #a6fd29;      /* Verde Neon */
  
  /* Backgrounds Escuros */
  --bg-primary: #0a0a0f;         /* Preto Azulado */
  --bg-secondary: #151520;       /* Cinza Escuro */
  --bg-card: #1a1a2e;           /* Azul Escuro */
  
  /* Textos */
  --text-primary: #f0f0f0;       /* Branco Suave */
  --text-secondary: #b0b0b0;     /* Cinza Claro */
}
```

### Efeitos Visuais
- **Gradientes**: Múltiplos gradientes com cores neon
- **Shadows**: Sombras neon coloridas (box-shadow)
- **Animations**: Animações CSS e Framer Motion
- **Glassmorphism**: Efeitos de vidro translúcido
- **Hover Effects**: Interações visuais em elementos

### Responsividade
```css
/* Breakpoints */
@media (max-width: 768px)  { /* Tablet */ }
@media (max-width: 480px)  { /* Mobile */ }
```

## 📱 Screenshots

### Desktop
![Desktop View](https://via.placeholder.com/800x400/0a0a0f/af3dff?text=Desktop+View)

### Mobile
![Mobile View](https://via.placeholder.com/300x600/0a0a0f/af3dff?text=Mobile+View)

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Desenvolvido por

**Gabriel Passos**
- 📧 Email: gabriel.passos@unesp.br
- 🐱 GitHub: [@gpassos01](https://github.com/gpassos01)
- 💼 LinkedIn: [gabriel-passos26](https://www.linkedin.com/in/gabriel-passos26/)

---

<div align="center">
  <h3>⭐ Se gostou do projeto, deixe uma estrela!</h3>
</div>