import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const [skills, setSkills] = useState(null);

  useEffect(() => {
    fetch('/api/skills')
      .then(res => res.json())
      .then(data => setSkills(data))
      .catch(err => console.error('Erro ao carregar habilidades:', err));
  }, []);

  if (!skills) {
    return <div>Carregando...</div>;
  }

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Habilidades</h2>
          <p className="section-subtitle">Tecnologias que estou estudando</p>

          <div className="skills-container">
            {Object.keys(skills).map(category => (
              <div key={category} className="skills-category">
                <h3>{category}</h3>
                {skills[category].map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-header">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 