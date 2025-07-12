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

import React, { useState, useEffect } from 'react';
import './App.css';

// Importação de todos os componentes da aplicação
import Navbar from './components/Navbar';     // Navegação principal
import Hero from './components/Hero';         // Seção de apresentação
import About from './components/About';       // Sobre mim
import Projects from './components/Projects'; // Galeria de projetos
import Skills from './components/Skills';     // Habilidades técnicas
import Contact from './components/Contact';   // Formulário de contato
import Footer from './components/Footer';     // Rodapé
import GradientBackground from './components/GradientBackground'; // Background global
import PWAInstall from './components/PWAInstall'; // Componente de instalação PWA

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
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular tempo de carregamento
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-overlay">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="App">
      {/* Indicador de progresso de scroll */}
      <div 
        className="scroll-progress" 
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />
      
      {/* Background global com gradientes suaves */}
      <GradientBackground />
      
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
      <main>
        <section id="home">
          <Hero />
        </section>
        
        {/* 
        SEÇÃO SOBRE MIM
        - Biografia profissional
        - Informações pessoais
        - Objetivos de carreira
        - Animações de entrada
      */}
        <section id="about">
          <About />
        </section>
        
        {/* 
        SEÇÃO PROJETOS
        - Cards interativos com hover effects
        - Projeto principal: Sistema de Análise de Enchentes
        - Card "Em Breve" para projetos futuros
        - Links para GitHub e demos
        - Grid responsivo
      */}
        <section id="skills">
          <Skills />
        </section>
        
        {/* 
        SEÇÃO HABILIDADES
        - Barras de progresso animadas
        - Categorias: Backend, Frontend, Tools
        - Níveis de proficiência visual
        - Efeitos de shimmer e glow
      */}
        <section id="projects">
          <Projects />
        </section>
        
        {/* 
        SEÇÃO CONTATO
        - Formulário funcional
        - Validação de campos
        - Integração com API backend
        - Feedback visual para usuário
        - Design neon consistente
      */}
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      {/* 
        RODAPÉ
        - Links de navegação rápida
        - Redes sociais
        - Copyright e informações legais
        - Design minimalista
      */}
      <Footer />
      
      {/* Componente de instalação PWA */}
      <PWAInstall />
      
      {/* Skip to main content para acessibilidade */}
      <a 
        href="#home" 
        className="sr-only"
        style={{
          position: 'absolute',
          top: '-40px',
          left: '6px',
          zIndex: 10000,
          padding: '8px',
          backgroundColor: 'var(--accent-color)',
          color: 'var(--bg-primary)',
          textDecoration: 'none',
          borderRadius: '4px',
          transition: 'top 0.3s'
        }}
        onFocus={(e) => {
          e.target.style.top = '6px';
        }}
        onBlur={(e) => {
          e.target.style.top = '-40px';
        }}
      >
        Pular para o conteúdo principal
      </a>
    </div>
  );
}

export default App;
