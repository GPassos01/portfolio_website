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
import { FaGithub, FaExternalLinkAlt, FaBook, FaLaptopCode } from 'react-icons/fa';
import './Projects.css';

/**
 * Componente funcional Projects
 * 
 * Gerencia o carregamento, exibição e interação com a
 * galeria de projetos, incluindo tratamento de erros
 * de imagem e estados de loading.
 * 
 * Estados:
 * - projects: array de projetos da API
 * - loading: indicador de carregamento
 * - imageErrors: controle de erros de imagem por projeto
 * 
 * @returns {JSX.Element} Galeria completa de projetos
 */
const Projects = () => {
  // Estado para armazenar lista de projetos da API
  const [projects, setProjects] = useState([]);
  
  // Estado para controlar exibição de loading
  const [loading, setLoading] = useState(true);
  


  /**
   * Effect Hook para carregar projetos da API
   * 
   * Executa requisição GET para `/api/projects` ao montar
   * o componente, carregando informações como:
   * - Título e descrição
   * - Tecnologias utilizadas
   * - Links para GitHub e demo
   * - Status (completed/coming-soon)
   * - URL da imagem
   */
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



  // Renderização condicional durante loading
  if (loading) {
    return (
      <section id="projects" className="section" aria-labelledby="projects-title">
        <div className="container">
          <h2 id="projects-title" className="section-title">Projetos</h2>
          <p className="section-subtitle">Carregando projetos...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="section projects" aria-labelledby="projects-title">
      <div className="container">
        {/* 
          CABEÇALHO DA SEÇÃO
          Título e subtítulo com animação de entrada
        */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 id="projects-title" className="section-title">Projetos & Estudos</h2>
          <p className="section-subtitle">
            Projetos pessoais e estudos que demonstram minhas habilidades
          </p>
        </motion.div>

        {/* 
          GRID DE PROJETOS
          Layout responsivo com cards animados
        */}
        <div className="projects-grid" role="grid" aria-label="Lista de projetos">
          {projects.map((project, index) => {
            // Define o componente de wrapper: <a> para projetos completos, <div> para os demais
            const CardWrapper = project.status === 'completed' && project.githubUrl
              ? motion.a
              : motion.div;
            
            const wrapperProps = project.status === 'completed' && project.githubUrl
              ? {
                  href: project.githubUrl,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  "aria-label": `Ver detalhes do projeto ${project.title} no GitHub`,
                  role: "link"
                }
              : { role: "article" };

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
                {/* 
                  ÁREA VISUAL TIPOGRÁFICA
                  Contém título estilizado, status e links
                */}
                <div className="project-header">
                  {/* Status visual do projeto */}
                  <div className={`project-status ${project.status === 'coming-soon' ? 'coming-soon' : 'completed'}`}>
                    <span className="status-indicator" aria-hidden="true"></span>
                    <span className="status-text">
                      {project.status === 'coming-soon' ? 'Em Desenvolvimento' : 'Concluído'}
                    </span>
                  </div>
                  
                  {/* Título principal estilizado */}
                  <h3 className="project-display-title">{project.title}</h3>
                  
                  {/* 
                    OVERLAY "EM BREVE" 
                    Exibido apenas para projetos coming-soon
                  */}
                  {project.status === 'coming-soon' && (
                    <div className="coming-soon-badge" aria-label="Projeto em desenvolvimento">
                      <span className="badge-icon" aria-hidden="true">🚀</span>
                      <span className="badge-text">Aguarde novidades!</span>
                    </div>
                  )}
                  
                  {/* 
                    LINKS DE AÇÃO
                    Exibidos para todos os projetos
                  */}
                  <div className="project-actions" role="group" aria-label="Ações do projeto">
                    {/* Link para GitHub */}
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-action-link"
                        aria-label="Ver código no GitHub"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaGithub aria-hidden="true" />
                        <span>GitHub</span>
                      </a>
                    )}
                    
                    {/* Link para demonstração/site */}
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-action-link"
                        aria-label="Ver demonstração"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaExternalLinkAlt aria-hidden="true" />
                        <span>Demo</span>
                      </a>
                    )}

                    {/* Ícone de estudo para projetos de aprendizado */}
                    {project.type === 'study' && (
                      <div className="project-study-badge" aria-label="Projeto de estudo">
                        <FaBook aria-hidden="true" />
                        <span>Estudo</span>
                      </div>
                    )}

                    {/* Ícone de projeto pessoal */}
                    {project.type === 'personal' && (
                      <div className="project-personal-badge" aria-label="Projeto pessoal">
                        <FaLaptopCode aria-hidden="true" />
                        <span>Pessoal</span>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* 
                  CONTEÚDO TEXTUAL DO PROJETO
                  Descrição e tecnologias
                */}
                <div className="project-content">
                  {/* Descrição detalhada */}
                  <p className="project-description">{project.description}</p>
                  
                  {/* 
                    TAGS DE TECNOLOGIAS
                    Lista das tecnologias utilizadas
                  */}
                  <div className="project-technologies" role="list" aria-label="Tecnologias utilizadas">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className={`tech-tag ${project.status === 'coming-soon' ? 'coming-soon-tag' : ''}`}
                        role="listitem"
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

        {/* 
          SEÇÃO DE ESTUDOS EM ANDAMENTO
          Mostra tecnologias que estou aprendendo
        */}
        <motion.div
          className="studies-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          aria-labelledby="studies-title"
        >
          <h3 id="studies-title" className="studies-title">Estudando Atualmente</h3>
          <div className="studies-grid" role="list" aria-label="Tecnologias em estudo">
            <div className="study-item" role="listitem">
              <div className="study-icon" aria-hidden="true">⚛️</div>
              <h4>React Avançado</h4>
              <p>Hooks, Context API, Performance</p>
            </div>
            <div className="study-item" role="listitem">
              <div className="study-icon" aria-hidden="true">🐍</div>
              <h4>Python & Django</h4>
              <p>Backend, APIs, ORM</p>
            </div>
            <div className="study-item" role="listitem">
              <div className="study-icon" aria-hidden="true">🎨</div>
              <h4>UI/UX Design</h4>
              <p>Figma, Prototipagem, Design Systems</p>
            </div>
            <div className="study-item" role="listitem">
              <div className="study-icon" aria-hidden="true">☁️</div>
              <h4>Cloud & DevOps</h4>
              <p>AWS, Docker, CI/CD</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 