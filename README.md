# 🚀 Portfólio Gabriel Passos - Desenvolvedor Full Stack

> **Portfólio profissional moderno e acessível**  
> Desenvolvido com React, Spring Boot e boas práticas de UX/UI

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.5.3-green.svg)](https://spring.io/projects/spring-boot)
[![Acessibilidade](https://img.shields.io/badge/Acessibilidade-WCAG%202.1%20AA-brightgreen.svg)](https://www.w3.org/WAI/WCAG21/quickref/)
[![Licença](https://img.shields.io/badge/Licença-MIT-yellow.svg)](LICENSE)

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [Acessibilidade](#-acessibilidade)
- [Instalação](#-instalação)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [API Endpoints](#-api-endpoints)
- [Contribuição](#-contribuição)
- [Licença](#-licença)

## 🎯 Sobre o Projeto

Portfólio profissional desenvolvido para demonstrar habilidades em desenvolvimento web moderno, com foco em:

- **Design responsivo** e profissional
- **Acessibilidade universal** (WCAG 2.1 AA)
- **Performance otimizada**
- **UX/UI moderno** com animações suaves
- **Backend robusto** com Spring Boot

### 🎨 Design System

- **Cores**: Paleta moderna em tons de índigo, violeta e ciano
- **Tipografia**: Sistema responsivo com fontes do sistema
- **Espaçamentos**: Sistema consistente baseado em rem
- **Animações**: Transições suaves respeitando preferências do usuário

## ✨ Funcionalidades

### Frontend (React)
- ✅ **Navegação suave** entre seções
- ✅ **Formulário de contato** funcional
- ✅ **Galeria de projetos** interativa
- ✅ **Animações responsivas** com Framer Motion
- ✅ **Design responsivo** para todos os dispositivos
- ✅ **Acessibilidade completa** (navegação por teclado, leitores de tela)

### Backend (Spring Boot)
- ✅ **API RESTful** para formulário de contato
- ✅ **Validação de dados** robusta
- ✅ **Envio de emails** automático
- ✅ **Banco de dados** H2 (desenvolvimento)
- ✅ **Documentação** com Swagger

## 🛠 Tecnologias

### Frontend
- **React 18.2.0** - Biblioteca principal
- **Framer Motion** - Animações
- **React Icons** - Ícones
- **CSS3** - Estilização moderna
- **ESLint** - Qualidade de código

### Backend
- **Spring Boot 3.5.3** - Framework Java
- **Spring Data JPA** - Persistência
- **H2 Database** - Banco de dados
- **Spring Mail** - Envio de emails
- **Swagger** - Documentação da API

## ♿ Acessibilidade

O projeto segue as diretrizes **WCAG 2.1 AA** e implementa:

### ✅ Navegação por Teclado
- Estados de foco visíveis
- Skip links para navegação direta
- Ordem de tab lógica

### ✅ Contraste e Legibilidade
- Alto contraste (4.5:1 mínimo)
- Tipografia otimizada
- Suporte a modo escuro

### ✅ Formulários Acessíveis
- Labels associados corretamente
- Validação em tempo real
- Mensagens de erro claras

### ✅ Estrutura Semântica
- HTML5 landmarks apropriados
- Roles ARIA quando necessário
- Hierarquia de cabeçalhos correta

## 🚀 Instalação

### Pré-requisitos
- Node.js 18+ 
- Java 17+
- Git

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/portfolio-website.git
cd portfolio-website
```

### 2. Instale as dependências do Frontend
```bash
cd frontend
npm install
```

### 3. Configure o Backend
```bash
cd ../backend
./gradlew build
```

### 4. Execute o projeto

**Terminal 1 - Backend:**
```bash
cd backend
./gradlew bootRun
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm start
```

O projeto estará disponível em:
- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:8080
- **API Docs**: http://localhost:8080/swagger-ui.html

## 📁 Estrutura do Projeto

```
portfolio-website/
├── frontend/                 # Aplicação React
│   ├── public/              # Arquivos estáticos
│   ├── src/
│   │   ├── components/      # Componentes React
│   │   ├── App.js          # Componente principal
│   │   ├── App.css         # Estilos globais
│   │   └── index.js        # Ponto de entrada
│   └── package.json
├── backend/                  # API Spring Boot
│   ├── src/main/java/
│   │   └── com/portfolio/
│   │       ├── controllers/ # Controladores REST
│   │       ├── models/      # Entidades JPA
│   │       ├── services/    # Lógica de negócio
│   │       └── config/      # Configurações
│   └── build.gradle
├── docs/                     # Documentação
│   ├── ACCESSIBILITY.md     # Guia de acessibilidade
│   └── API.md              # Documentação da API
└── README.md
```

## 🔌 API Endpoints

### Contato
- `POST /api/contact` - Enviar mensagem de contato

### Projetos
- `GET /api/projects` - Listar todos os projetos
- `GET /api/projects/{id}` - Obter projeto específico

### Perfil
- `GET /api/profile` - Obter dados do perfil

### Swagger UI
- `GET /swagger-ui.html` - Documentação interativa da API

## 🎨 Componentes Principais

### Frontend
- **Navbar**: Navegação responsiva com menu mobile
- **Hero**: Seção de apresentação com animações
- **About**: Informações pessoais e biografia
- **Services**: Catálogo de serviços freelance
- **Projects**: Galeria de projetos com cards interativos
- **Contact**: Formulário de contato com validação
- **Footer**: Links e informações de contato

### Backend
- **ContactController**: Gerencia envio de emails
- **ProjectController**: CRUD de projetos
- **ProfileController**: Dados do perfil
- **EmailService**: Serviço de envio de emails

## 🔧 Configuração

### Variáveis de Ambiente

**Frontend (.env):**
```env
REACT_APP_API_URL=http://localhost:8080
```

**Backend (application.properties):**
```properties
# Email
spring.mail.host=smtp.gmail.com
spring.mail.port=587
spring.mail.username=seu-email@gmail.com
spring.mail.password=sua-senha-app

# Database
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driverClassName=org.h2.Driver
```

## 🧪 Testes

### Frontend
```bash
cd frontend
npm test
```

### Backend
```bash
cd backend
./gradlew test
```

## 📊 Performance

- **Lighthouse Score**: 95+ em todas as categorias
- **Core Web Vitals**: Otimizado
- **Acessibilidade**: 100% WCAG 2.1 AA
- **SEO**: Meta tags e estrutura semântica

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### Padrões de Código
- **ESLint** para JavaScript/React
- **Prettier** para formatação
- **Conventional Commits** para mensagens
- **Semantic Versioning** para releases

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

- **Gabriel Passos** - [LinkedIn](https://linkedin.com/in/gabrielpassos)
- **Email**: gabriel@email.com
- **GitHub**: [@gabrielpassos](https://github.com/gabrielpassos)

---

⭐ **Se este projeto te ajudou, considere dar uma estrela!**

*Desenvolvido com ❤️ e boas práticas de acessibilidade*