import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Sobre Mim</h2>
          <div className="about-content">
            <p>
              Sou Gabriel Passos, um desenvolvedor apaixonado por tecnologia que está 
              construindo sua carreira freelance através de projetos pessoais e estudos 
              contínuos. Estou sempre em busca de novos desafios para expandir minhas 
              habilidades e criar soluções inovadoras.
            </p>
            <p>
              Atualmente, foco em <strong>desenvolvimento web</strong> com React e Node.js, 
              <strong>aplicações mobile</strong> com React Native, e estou explorando 
              <strong>machine learning</strong> e <strong>IoT</strong>. Cada projeto é uma 
              oportunidade de aprendizado e crescimento profissional.
            </p>
            <p>
              Acredito na importância de código limpo, boas práticas e aprendizado 
              contínuo. Estou sempre estudando novas tecnologias e metodologias para 
              entregar soluções de qualidade e valor real para meus clientes.
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-number">100+</span>
                <span className="highlight-label">Horas de Estudo</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">10+</span>
                <span className="highlight-label">Projetos Pessoais</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">5+</span>
                <span className="highlight-label">Tecnologias Dominadas</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 