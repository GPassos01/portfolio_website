/**
 * Componente Hero - Seção de Apresentação Principal
 * 
 * Esta é a primeira seção visível do portfólio, responsável por:
 * - Apresentar o nome com efeito neon animado
 * - Exibir título profissional e biografia
 * - Fornecer links para redes sociais
 * - Oferecer botões de call-to-action
 * - Criar primeira impressão visual impactante
 * 
 * Características técnicas:
 * - Consome dados da API `/api/profile`
 * - Animações com Framer Motion
 * - Layout responsivo (desktop/tablet/mobile)
 * - Efeitos de background animados
 * - Gradientes neon no texto
 * 
 * @author Gabriel Passos
 * @version 1.0
 * @since 2024
 */

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const handleDownloadCV = () => {
    // Simular download do CV
    const link = document.createElement('a');
    link.href = '/cv-gabriel-passos.pdf';
    link.download = 'CV-Gabriel-Passos.pdf';
    link.click();
  };

  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="container">
        <div className="hero-content">
          {/* 
            CABEÇALHO PRINCIPAL
            Título, subtítulo e descrição com animações
          */}
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 id="hero-title" className="hero-title">
              Olá, eu sou{' '}
              <span className="hero-name">Gabriel Passos</span>
            </h1>
            
            <p className="hero-subtitle">
              Desenvolvedor Full Stack iniciante apaixonado por criar soluções digitais
            </p>
            
            <p className="hero-description">
              Especializado em React, Node.js e tecnologias modernas. 
              Busco oportunidades para crescer e contribuir em projetos desafiadores.
            </p>

            {/* 
              BOTÕES DE AÇÃO PRINCIPAIS
              CTA para contato e download do CV
            */}
            <div className="hero-actions" role="group" aria-label="Ações principais">
              <motion.button
                className="btn btn-primary hero-btn"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Ir para seção de contato"
              >
                <FaEnvelope aria-hidden="true" />
                Vamos Conversar
              </motion.button>
              
              <motion.button
                className="btn btn-outline hero-btn"
                onClick={handleDownloadCV}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Baixar currículo em PDF"
              >
                <FaDownload aria-hidden="true" />
                Baixar CV
              </motion.button>
            </div>
          </motion.div>

          {/* 
            ÁREA VISUAL
            Avatar e elementos decorativos
          */}
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="hero-avatar">
              <div className="avatar-placeholder" aria-label="Avatar de Gabriel Passos">
                <span className="avatar-initials">GP</span>
              </div>
              <div className="avatar-glow" aria-hidden="true"></div>
            </div>
            
            {/* 
              ELEMENTOS DECORATIVOS
              Código flutuante e partículas
            */}
            <div className="floating-code" aria-hidden="true">
              <pre className="code-snippet">
                <code>
                  <span className="keyword">const</span> <span className="variable">developer</span> = {'{'}
                  {'\n'}  <span className="property">name</span>: <span className="string">'Gabriel Passos'</span>,
                  {'\n'}  <span className="property">role</span>: <span className="string">'Full Stack Developer'</span>,
                  {'\n'}  <span className="property">passion</span>: <span className="string">'Creating amazing apps'</span>
                  {'\n'}{'}'};
                </code>
              </pre>
            </div>
          </motion.div>
        </div>

        {/* 
          REDES SOCIAIS
          Links para GitHub, LinkedIn e contato
        */}
        <motion.div
          className="hero-social"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="social-label">Conecte-se comigo:</p>
          
          <div className="social-links" role="list" aria-label="Redes sociais">
            <a
              href="https://github.com/gabrielpassos"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              role="listitem"
              aria-label="Visitar perfil no GitHub"
            >
              <FaGithub aria-hidden="true" />
              <span className="sr-only">GitHub</span>
            </a>
            
            <a
              href="https://linkedin.com/in/gabrielpassos"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              role="listitem"
              aria-label="Visitar perfil no LinkedIn"
            >
              <FaLinkedin aria-hidden="true" />
              <span className="sr-only">LinkedIn</span>
            </a>
            
            <a
              href="mailto:gabriel@email.com"
              className="social-link"
              role="listitem"
              aria-label="Enviar email para Gabriel"
            >
              <FaEnvelope aria-hidden="true" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </motion.div>

        {/* 
          INDICADOR DE SCROLL
          Seta animada para indicar mais conteúdo
        */}
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          aria-hidden="true"
        >
          <div className="scroll-arrow"></div>
          <p className="scroll-text">Role para explorar</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 