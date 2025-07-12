/**
 * Componente Projects - Galeria de Projetos
 * 
 * Este componente é responsável por exibir todos os projetos
 * desenvolvidos em uma galeria interativa e responsiva.
 * 
 * Funcionalidades principais:
 * - Carrega projetos da API `/api/projects`
 * - Exibe cards interativos com hover effects
 * - Diferencia projetos completos dos "em breve"
 * - Links para GitHub e demonstrações
 * - Overlay especial para projetos futuros
 * - Grid responsivo para diferentes telas
 * 
 * Tipos de projeto:
 * - "completed": Projetos finalizados com links funcionais
 * - "coming-soon": Projetos em desenvolvimento com overlay especial
 * 
 * @author Gabriel Passos
 * @version 1.0
 * @since 2024
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaUsers, FaHandsHelping, FaMicrochip } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Projetos principais destacados
  const featuredProjects = [
    {
      id: 'infojr-featured',
      icon: <FaUsers />,
      title: 'Presidência da Info Jr',
      subtitle: 'Empresa Júnior de Tecnologia',
      description: 'Como presidente da empresa júnior, lidero uma equipe de 15 pessoas no desenvolvimento de soluções tecnológicas para clientes reais. Nossos projetos sempre priorizam o impacto social e a formação de novos desenvolvedores.',
      highlights: [
        'Gestão de equipes multidisciplinares',
        'Desenvolvimento de aplicações web completas',
        'Mentoria e formação de novos profissionais',
        'Projetos com impacto social direto'
      ],
      imageSpace: true,
      status: 'featured'
    },
    {
      id: 'udam-featured',
      icon: <FaHandsHelping />,
      title: 'Tecnologia Assistiva',
      subtitle: 'Projeto de Extensão - UDAM Rio Claro',
      description: 'Colaborando com a União dos Deficientes Auditivos e Mudos de Rio Claro, desenvolvendo tecnologias assistivas que promovem inclusão digital. Cada linha de código tem o objetivo de tornar a tecnologia mais acessível.',
      highlights: [
        'Interfaces acessíveis e inclusivas',
        'Comunicação visual aprimorada',
        'Impacto direto na comunidade local',
        'Tecnologias assistivas inovadoras'
      ],
      imageSpace: true,
      status: 'featured'
    },
    {
      id: 'ic-featured',
      icon: <FaMicrochip />,
      title: 'Visão Computacional IoT',
      subtitle: 'Iniciação Científica - ESP32-CAM',
      description: 'Pesquisa em Iniciação Científica explorando aplicações de ESP32-CAM para monitoramento ambiental e urbano. Desenvolvendo soluções para cidades inteligentes com foco em prevenção de enchentes.',
      highlights: [
        'Processamento de imagem embarcado',
        'Machine Learning em dispositivos IoT',
        'Soluções para cidades inteligentes',
        'Pesquisa aplicada com impacto real'
      ],
      imageSpace: true,
      status: 'featured'
    }
  ];

  useEffect(() => {
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Erro ao carregar projetos:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title">Projetos</h2>
          <p className="section-subtitle">Carregando projetos...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Projetos e Experiências</h2>
          <p className="section-subtitle">
            Transformando ideias em soluções que fazem a diferença
          </p>
        </motion.div>

        {/* Projetos principais com layout alternado */}
        <div className="featured-projects">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`project-alternate ${index % 2 === 0 ? 'text-left' : 'text-right'}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="project-content">
                <div className="project-icon">
                  {project.icon}
                </div>
                <h3>{project.title}</h3>
                <h4>{project.subtitle}</h4>
                <p>{project.description}</p>
                
                <ul className="project-highlights">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </div>
              
              <div className="project-visual">
                {project.imageSpace && (
                  <div className="project-image-placeholder">
                    <p>Espaço para imagem do projeto</p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Outros projetos */}
        {projects.length > 0 && (
          <>
            <motion.h3 
              className="subsection-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Outros Projetos
            </motion.h3>
            
            <div className="projects-grid">
              {projects.map((project, index) => {
                const CardWrapper = project.status === 'completed' && project.githubUrl
                  ? motion.a
                  : motion.div;
                
                const wrapperProps = project.status === 'completed' && project.githubUrl
                  ? {
                      href: project.githubUrl,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      "aria-label": `Ver detalhes do projeto ${project.title} no GitHub`
                    }
                  : {};

                return (
                  <CardWrapper
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`project-card ${project.status === 'coming-soon' ? 'coming-soon' : ''}`}
                    {...wrapperProps}
                  >
                    <div className="project-header">
                      <div className={`project-status ${project.status === 'coming-soon' ? 'coming-soon' : 'completed'}`}>
                        <span className="status-indicator"></span>
                        <span className="status-text">
                          {project.status === 'coming-soon' ? 'Em Desenvolvimento' : 'Concluído'}
                        </span>
                      </div>
                      
                      <h3 className="project-display-title">{project.title}</h3>
                      
                      {project.status === 'coming-soon' && (
                        <div className="coming-soon-badge">
                          <span className="badge-icon">🚀</span>
                          <span className="badge-text">Aguarde novidades!</span>
                        </div>
                      )}
                      
                      <div className="project-actions">
                        {project.githubUrl && (
                          <a 
                            href={project.githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="project-action-link"
                            aria-label="Ver código no GitHub"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <FaGithub />
                            <span>GitHub</span>
                          </a>
                        )}
                        
                        {project.liveUrl && (
                          <a 
                            href={project.liveUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="project-action-link"
                            aria-label="Ver demonstração"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <FaExternalLinkAlt />
                            <span>Demo</span>
                          </a>
                        )}
                      </div>
                    </div>
                    
                    <div className="project-content">
                      <p className="project-description">{project.description}</p>
                      
                      <div className="project-technologies">
                        {project.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex} 
                            className={`tech-tag ${project.status === 'coming-soon' ? 'coming-soon-tag' : ''}`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardWrapper>
                );
              })}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Projects; 