import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Projeto Pessoal - Task Manager",
      role: "Aplicação React",
      content: "Desenvolvi um gerenciador de tarefas completo com React e Node.js. Aprendi muito sobre state management, APIs RESTful e deploy. O projeto demonstra minhas habilidades em desenvolvimento full-stack.",
      rating: 5,
      type: "personal"
    },
    {
      id: 2,
      name: "Curso Online - React Avançado",
      role: "Estudo Contínuo",
      content: "Completando curso de React avançado com foco em hooks, context API e performance. Cada módulo traz novos desafios e melhora minha compreensão da biblioteca.",
      rating: 5,
      type: "study"
    },
    {
      id: 3,
      name: "Projeto Colaborativo - Weather App",
      role: "Desenvolvimento em Equipe",
      content: "Participação em projeto colaborativo de aplicação de previsão do tempo. Contribuí com o frontend em React e aprendi sobre trabalho em equipe e versionamento.",
      rating: 4,
      type: "collaborative"
    },
    {
      id: 4,
      name: "Mentoria Técnica",
      role: "Aprendizado Guiado",
      content: "Recebi feedback valioso de desenvolvedores experientes sobre meus projetos. As sugestões de melhoria me ajudaram a evoluir como programador e entender boas práticas.",
      rating: 5,
      type: "mentorship"
    },
    {
      id: 5,
      name: "Hackathon Local",
      role: "Competição de Código",
      content: "Participação em hackathon desenvolvendo solução para otimização de rotas. A experiência me ensinou sobre trabalho sob pressão e prototipagem rápida.",
      rating: 4,
      type: "competition"
    },
    {
      id: 6,
      name: "Projeto Open Source",
      role: "Contribuição Comunitária",
      content: "Primeira contribuição para projeto open source. Aprendi sobre pull requests, code review e como a comunidade de desenvolvedores funciona.",
      rating: 5,
      type: "opensource"
    }
  ];

  const getTypeIcon = (type) => {
    switch(type) {
      case 'personal':
        return '💻';
      case 'study':
        return '📚';
      case 'collaborative':
        return '👥';
      case 'mentorship':
        return '🎓';
      case 'competition':
        return '🏆';
      case 'opensource':
        return '🌟';
      default:
        return '✨';
    }
  };

  const getTypeLabel = (type) => {
    switch(type) {
      case 'personal':
        return 'Projeto Pessoal';
      case 'study':
        return 'Estudo';
      case 'collaborative':
        return 'Colaborativo';
      case 'mentorship':
        return 'Mentoria';
      case 'competition':
        return 'Competição';
      case 'opensource':
        return 'Open Source';
      default:
        return 'Outro';
    }
  };

  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Experiências & Aprendizados</h2>
          <p className="section-subtitle">
            Projetos, estudos e experiências que moldaram minha jornada
          </p>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="testimonial-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="testimonial-header">
                  <div className="testimonial-type">
                    <span className="type-icon">{getTypeIcon(testimonial.type)}</span>
                    <span className="type-label">{getTypeLabel(testimonial.type)}</span>
                  </div>
                  <div className="testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="star-icon" />
                    ))}
                  </div>
                </div>

                <div className="testimonial-content">
                  <FaQuoteLeft className="quote-icon" />
                  <p>{testimonial.content}</p>
                </div>

                <div className="testimonial-footer">
                  <div className="testimonial-author">
                    <h4>{testimonial.name}</h4>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="testimonials-cta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3>Interessado em colaborar?</h3>
            <p>Estou sempre aberto a novos projetos e oportunidades de aprendizado</p>
            <button 
              className="btn btn-primary"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Vamos Conversar
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 