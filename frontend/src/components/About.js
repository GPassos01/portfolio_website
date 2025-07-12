import React from 'react';
import { motion } from 'framer-motion';
import { FaUniversity, FaHeart, FaCode, FaLightbulb, FaUsers, FaMicrochip } from 'react-icons/fa';
import './About.css';

const About = () => {
  const journey = [
    {
      icon: <FaUniversity />,
      title: 'Onde Tudo Começou',
      description: 'Na UNESP Rio Claro, descobri que a computação não é apenas sobre códigos, mas sobre pessoas. Cada algoritmo que estudo tem o potencial de transformar vidas.'
    },
    {
      icon: <FaLightbulb />,
      title: 'O Momento da Descoberta',
      description: 'Foi quando entendi que a tecnologia pode ser uma ferramenta poderosa de inclusão. Não se trata apenas de criar soluções, mas de criar pontes entre pessoas.'
    },
    {
      icon: <FaCode />,
      title: 'Colocando em Prática',
      description: 'Hoje, cada projeto que desenvolvo tem um propósito claro: tornar a tecnologia mais acessível e inclusiva para todos.'
    }
  ];

  const impactAreas = [
    {
      icon: <FaUsers />,
      title: 'Liderança',
      description: 'Presidindo a Info Jr, aprendo que liderar é sobre inspirar outros a acreditar no poder da tecnologia para o bem.'
    },
    {
      icon: <FaHeart />,
      title: 'Impacto Social',
      description: 'Trabalhando com a UDAM, vejo diariamente como a tecnologia pode quebrar barreiras e criar conexões genuínas.'
    },
    {
      icon: <FaMicrochip />,
      title: 'Inovação',
      description: 'Na Iniciação Científica, exploro como a IoT pode resolver problemas reais da nossa comunidade.'
    }
  ];

  return (
    <section id="about" className="section about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Minha História</h2>
          
          <motion.div 
            className="about-intro"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="intro-text">
              Sou Gabriel Passos, e minha jornada na computação começou com uma pergunta simples: 
              "Como posso usar a tecnologia para fazer a diferença na vida das pessoas?" 
              Essa pergunta me levou a uma trajetória onde cada linha de código tem um propósito maior.
            </p>
          </motion.div>

          <div className="journey-grid">
            {journey.map((item, index) => (
              <motion.div
                key={index}
                className="journey-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="journey-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="impact-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3>Como Faço a Diferença</h3>
            <div className="impact-grid">
              {impactAreas.map((area, index) => (
                <motion.div
                  key={index}
                  className="impact-card"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="impact-icon">{area.icon}</div>
                  <h4>{area.title}</h4>
                  <p>{area.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="about-values"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>O que me move</h3>
            <p>
              "Acredito que a tecnologia deve ser uma ferramenta de empoderamento, 
              não de exclusão. Cada projeto que desenvolvo é uma oportunidade de 
              tornar o mundo um pouco mais inclusivo e acessível."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 