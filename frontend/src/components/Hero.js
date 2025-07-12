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

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Hero.css';

/**
 * Componente funcional Hero
 * 
 * Gerencia a exibição da seção principal do portfólio,
 * incluindo carregamento de dados pessoais da API,
 * estados de loading e renderização responsiva.
 * 
 * Estados:
 * - profile: dados pessoais da API
 * - loading: indicador de carregamento
 * 
 * @returns {JSX.Element} Seção Hero completa com apresentação
 */
const Hero = () => {
  // Estado para armazenar dados pessoais vindos da API
  const [profile, setProfile] = useState(null);
  
  // Estado para controlar exibição de loading
  const [loading, setLoading] = useState(true);

  /**
   * Effect Hook para carregar dados da API
   * 
   * Executa uma requisição GET para o endpoint `/api/profile`
   * ao montar o componente, carregando informações como:
   * - Nome completo
   * - Título profissional
   * - Biografia
   * - Links de contato (email, GitHub, LinkedIn)
   */
  useEffect(() => {
    fetch('/api/profile')
      .then(res => res.json())
      .then(data => {
        setProfile(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Erro ao carregar perfil:', err);
        setLoading(false);
      });
  }, []);

  /**
   * Função para rolar suavemente até uma seção
   * 
   * Implementa scroll suave até elementos com IDs específicos
   * quando o usuário clica nos botões de call-to-action.
   * 
   * @param {string} elementId - ID do elemento de destino
   */
  const scrollToSection = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  };

  // Renderização condicional durante loading
  if (loading) {
    return (
      <section className="hero hero-loading">
        <div className="container">
          <p>Carregando informações...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="home" className="section hero">
      <div className="container">
        <div className="hero-content">
          {/* 
            COLUNA ESQUERDA - Conteúdo Textual
            Contém toda a informação textual e botões
          */}
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Hook emocional */}
            <motion.p 
              className="hero-greeting"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Olá! Eu sou
            </motion.p>

            <motion.h1 
              className="hero-name"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {profile?.name || 'Gabriel Passos'}
            </motion.h1>

            {/* Título com propósito claro */}
            <motion.h2 
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Desenvolvedor com Propósito Social
            </motion.h2>

            {/* Storytelling pessoal */}
            <motion.p 
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Acredito que cada linha de código pode mudar uma vida. Como estudante de 
              Ciência da Computação, lidero projetos que conectam tecnologia e inclusão. 
              Da presidência da Info Jr ao desenvolvimento de tecnologias assistivas, 
              minha missão é criar soluções que realmente importam.
            </motion.p>

            {/* Call-to-actions específicos */}
            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
            >
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                Ver Meus Projetos
              </button>
              
              <button 
                className="btn btn-outline"
                onClick={() => scrollToSection('contact')}
              >
                Vamos Conversar
              </button>
            </motion.div>

            {/* Redes sociais com contexto */}
            <motion.div 
              className="hero-social"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              {profile?.github && (
                <a 
                  href={profile.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Ver projetos no GitHub"
                >
                  <FaGithub />
                </a>
              )}
              
              {profile?.linkedin && (
                <a 
                  href={profile.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Conectar no LinkedIn"
                >
                  <FaLinkedin />
                </a>
              )}
              
              {profile?.email && (
                <a 
                  href={`mailto:${profile.email}`}
                  className="social-link"
                  aria-label="Enviar email"
                >
                  <FaEnvelope />
                </a>
              )}
            </motion.div>
          </motion.div>

          {/* Área visual com foto de perfil */}
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="hero-visual-content">
              <motion.div 
                className="hero-profile-image"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="image-container">
                  <img 
                    src="/images/profile.png" 
                    alt="Gabriel Passos - Desenvolvedor"
                    className="profile-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="image-placeholder">
                    <span>Gabriel Passos</span>
                    <small>Adicione sua foto aqui</small>
                  </div>
                </div>
                <div className="image-glow"></div>
              </motion.div>
              
              <div className="hero-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          onClick={() => scrollToSection('about')}
        >
          <span>Descubra minha história</span>
          <div className="scroll-arrow">↓</div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 