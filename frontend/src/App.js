/**
 * Componente Principal da Aplicação Portfolio
 * 
 * Este é o componente raiz que organiza toda a estrutura do portfólio.
 * Renderiza todas as seções em uma Single Page Application (SPA):
 * 
 * Estrutura:
 * - Navbar: Navegação fixa no topo
 * - Hero: Seção de apresentação principal
 * - About: Informações pessoais e biografia
 * - Projects: Galeria de projetos desenvolvidos
 * - Skills: Habilidades técnicas com barras de progresso
 * - Contact: Formulário de contato funcional
 * - Footer: Rodapé com links e informações
 * 
 * @author Gabriel Passos
 * @version 1.0
 * @since 2024
 */

import React from 'react';
import './App.css';

// Importação de todos os componentes da aplicação
import Navbar from './components/Navbar';     // Navegação principal
import Hero from './components/Hero';         // Seção de apresentação
import About from './components/About';       // Sobre mim
import Services from './components/Services'; // Serviços freelance
import Projects from './components/Projects'; // Galeria de projetos
import Skills from './components/Skills';     // Habilidades técnicas
import Testimonials from './components/Testimonials'; // Depoimentos
import Contact from './components/Contact';   // Formulário de contato
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground'; // Partículas modernas
import CyberpunkLoader from './components/CyberpunkLoader'; // Loader moderno     // Rodapé

/**
 * Componente funcional principal App
 * 
 * Organiza todos os componentes em uma estrutura vertical,
 * criando um layout de página única com scroll suave
 * entre as seções.
 * 
 * Cada seção possui:
 * - ID único para navegação
 * - Animações de entrada
 * - Responsividade
 * - Tema neon consistente
 * 
 * @returns {JSX.Element} Estrutura completa da aplicação
 */
function App() {
  return (
    <div className="App">
      {/* 
        LOADER MODERNO
        - Tela de inicialização
        - Efeitos de glitch suaves
        - Barra de progresso animada
        - Transição suave
      */}
      <CyberpunkLoader />
      
      {/* 
        PARTÍCULAS MODERNAS
        - Efeito de partículas flutuantes
        - Conectam quando próximas
        - Cores modernas e elegantes
        - Atmosfera profissional
      */}
      <ParticleBackground />
      
      {/* 
        NAVEGAÇÃO PRINCIPAL
        - Fixa no topo da página
        - Menu responsivo para mobile
        - Links de navegação suave entre seções
        - Highlight da seção ativa
      */}
      <Navbar />
      
      {/* 
        SEÇÃO HERO - Apresentação Principal
        - Nome com gradiente neon animado
        - Título profissional
        - Links para redes sociais
        - Botões de call-to-action
        - Animações de background
      */}
      <Hero />
      
      {/* 
        SEÇÃO SOBRE MIM
        - Biografia profissional
        - Informações pessoais
        - Objetivos de carreira
        - Animações de entrada
      */}
      <About />
      
      {/* 
        SEÇÃO SERVIÇOS FREELANCE
        - Catálogo de serviços oferecidos
        - Preços e prazos estimados
        - Especificações técnicas
        - Call-to-action para orçamentos
      */}
      <Services />
      
      {/* 
        SEÇÃO PROJETOS
        - Cards interativos com hover effects
        - Projeto principal: Sistema de Análise de Enchentes
        - Card "Em Breve" para projetos futuros
        - Links para GitHub e demos
        - Grid responsivo
      */}
      <Projects />
      
      {/* 
        SEÇÃO HABILIDADES
        - Barras de progresso animadas
        - Categorias: Backend, Frontend, Tools
        - Níveis de proficiência visual
        - Efeitos de shimmer e glow
      */}
      <Skills />
      
      {/* 
        SEÇÃO DEPOIMENTOS
        - Testimonials de clientes satisfeitos
        - Avaliações e feedback
        - Estatísticas de projetos
        - Credibilidade e confiança
      */}
      <Testimonials />
      
      {/* 
        SEÇÃO CONTATO
        - Formulário funcional
        - Validação de campos
        - Integração com API backend
        - Feedback visual para usuário
        - Design neon consistente
      */}
      <Contact />
      
      {/* 
        RODAPÉ
        - Links de navegação rápida
        - Redes sociais
        - Copyright e informações legais
        - Design minimalista
      */}
      <Footer />
    </div>
  );
}

export default App;
