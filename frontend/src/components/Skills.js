import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaHeart, FaRocket, FaGraduationCap, FaUsers, FaMicrochip } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const learningJourney = [
    {
      icon: <FaGraduationCap />,
      title: 'Os Primeiros Passos',
      description: 'Na universidade, descobri que programar é como aprender uma nova língua. Cada conceito que aprendia abria portas para novas possibilidades.',
      highlights: ['Python', 'Java', 'Lógica de Programação'],
      phase: 'foundation'
    },
    {
      icon: <FaCode />,
      title: 'Descobrindo o Mundo Web',
      description: 'Recentemente mergulhei no desenvolvimento web e fiquei fascinado com o poder de criar experiências que podem ser acessadas por qualquer pessoa, em qualquer lugar.',
      highlights: ['React', 'Spring Boot', 'CSS'],
      phase: 'exploration'
    },
    {
      icon: <FaUsers />,
      title: 'Liderança e Colaboração',
      description: 'Como presidente da Info Jr, aprendi que as melhores soluções vêm da colaboração. Liderar é sobre inspirar outros a acreditar no potencial da tecnologia.',
      highlights: ['Gestão de Projetos', 'Trabalho em Equipe', 'Comunicação'],
      phase: 'leadership'
    },
    {
      icon: <FaHeart />,
      title: 'Tecnologia com Propósito',
      description: 'Meu foco evoluiu para criar soluções que realmente importam. A acessibilidade não é apenas uma feature, é uma responsabilidade.',
      highlights: ['Acessibilidade Web', 'Design Inclusivo', 'UX'],
      phase: 'purpose'
    },
    {
      icon: <FaMicrochip />,
      title: 'Inovação e Pesquisa',
      description: 'Na Iniciação Científica, exploro como a IoT pode resolver problemas reais. É fascinante ver como hardware e software se unem para criar impacto.',
      highlights: ['IoT', 'Visão Computacional', 'Machine Learning'],
      phase: 'innovation'
    },
    {
      icon: <FaRocket />,
      title: 'Próximos Horizontes',
      description: 'Estou animado para explorar como a IA pode tornar a tecnologia ainda mais inclusiva. O futuro é sobre criar soluções que se adaptem às pessoas.',
      highlights: ['TypeScript', 'Next.js', 'IA para Acessibilidade'],
      phase: 'future'
    }
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Minha Evolução</h2>
          <p className="section-subtitle">
            Uma jornada de aprendizado contínuo, onde cada tecnologia aprendida tem um propósito maior
          </p>

          <div className="learning-timeline">
            {learningJourney.map((phase, index) => (
              <motion.div
                key={index}
                className={`timeline-item ${phase.phase}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="timeline-icon">
                  {phase.icon}
                </div>
                <div className="timeline-content">
                  <h3>{phase.title}</h3>
                  <p>{phase.description}</p>
                  <div className="timeline-tags">
                    {phase.highlights.map((tag, idx) => (
                      <span key={idx} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="learning-philosophy"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <blockquote>
              "O aprendizado não é sobre dominar todas as tecnologias, 
              mas sobre entender como usá-las para criar um mundo melhor. 
              Cada nova habilidade é uma ferramenta para fazer a diferença."
            </blockquote>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 