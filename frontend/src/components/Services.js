import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaMobile, FaDatabase, FaCloud, FaCogs, FaRocket } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FaCode />,
      title: "Desenvolvimento Web",
      description: "Sites responsivos e aplicações web modernas com React, Node.js e tecnologias atuais.",
      features: [
        "Sites responsivos e modernos",
        "Aplicações web dinâmicas",
        "Landing pages profissionais",
        "Integração com APIs",
        "Otimização de performance"
      ],
      price: "A partir de R$ 800",
      duration: "1-3 semanas",
      category: "web"
    },
    {
      id: 2,
      icon: <FaMobile />,
      title: "Aplicações Mobile",
      description: "Apps híbridos para iOS e Android com React Native e tecnologias modernas.",
      features: [
        "Apps híbridos iOS/Android",
        "React Native",
        "Interface intuitiva",
        "Integração com APIs",
        "Prototipagem rápida"
      ],
      price: "A partir de R$ 1.200",
      duration: "2-4 semanas",
      category: "mobile"
    },
    {
      id: 3,
      icon: <FaDatabase />,
      title: "Sistemas Backend",
      description: "APIs simples, bancos de dados e sistemas básicos com Node.js e Python.",
      features: [
        "APIs RESTful",
        "Bancos de dados",
        "Autenticação básica",
        "CRUD completo",
        "Documentação clara"
      ],
      price: "A partir de R$ 1.000",
      duration: "2-4 semanas",
      category: "backend"
    },
    {
      id: 4,
      icon: <FaCloud />,
      title: "Projetos de Estudo",
      description: "Desenvolvimento de projetos para portfólio e aprendizado de novas tecnologias.",
      features: [
        "Projetos para portfólio",
        "Aprendizado prático",
        "Código documentado",
        "Tecnologias modernas",
        "Deploy e demonstração"
      ],
      price: "R$ 50/hora",
      duration: "Flexível",
      category: "study"
    },
    {
      id: 5,
      icon: <FaCogs />,
      title: "Manutenção & Suporte",
      description: "Correções de bugs, atualizações e suporte técnico para sistemas existentes.",
      features: [
        "Correção de bugs",
        "Atualizações de segurança",
        "Melhorias de performance",
        "Suporte técnico",
        "Documentação"
      ],
      price: "R$ 80/hora",
      duration: "Flexível",
      category: "support"
    },
    {
      id: 6,
      icon: <FaRocket />,
      title: "Consultoria Inicial",
      description: "Análise de projetos, escolha de tecnologias e planejamento de desenvolvimento.",
      features: [
        "Análise de requisitos",
        "Escolha de tecnologias",
        "Planejamento de projeto",
        "Estimativa de custos",
        "Recomendações técnicas"
      ],
      price: "R$ 100/hora",
      duration: "Flexível",
      category: "consulting"
    }
  ];

  return (
    <section id="services" className="section services">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Serviços Freelance</h2>
          <p className="section-subtitle">
            Soluções acessíveis para transformar suas ideias em realidade
          </p>

          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className={`service-card ${service.category}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="service-icon">
                  {service.icon}
                </div>
                
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                
                <div className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="feature-item">
                      <span className="feature-check">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="service-pricing">
                  <div className="price-info">
                    <span className="price">{service.price}</span>
                    <span className="duration">{service.duration}</span>
                  </div>
                  <button className="btn btn-outline service-btn">
                    Solicitar Orçamento
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="services-cta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3>Projeto personalizado?</h3>
            <p>Vamos conversar sobre suas necessidades e encontrar a melhor solução</p>
            <button 
              className="btn btn-primary"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Fale Comigo
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 