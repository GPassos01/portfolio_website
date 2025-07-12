import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envio
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Entre em Contato</h2>
          <p className="section-subtitle">
            Vamos conversar sobre seu próximo projeto
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Seu Nome"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Seu Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Sua Mensagem"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="form-input"
              />
            </div>

            <button 
              type="submit" 
              className={`btn btn-primary ${isSubmitting ? 'loading' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  Enviando...
                </>
              ) : (
                'Enviar Mensagem'
              )}
            </button>

            {/* Mensagens de Status */}
            {submitStatus === 'success' && (
              <div className="form-status success">
                <span className="status-icon">✅</span>
                <div>
                  <strong>Mensagem enviada com sucesso!</strong>
                  <p>Obrigado pelo contato. Responderei em breve!</p>
                </div>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="form-status error">
                <span className="status-icon">❌</span>
                <div>
                  <strong>Erro ao enviar mensagem</strong>
                  <p>Algo deu errado no servidor. Tente novamente ou entre em contato via email.</p>
                </div>
              </div>
            )}
            
            {submitStatus === 'network-error' && (
              <div className="form-status error">
                <span className="status-icon">🌐</span>
                <div>
                  <strong>Erro de conexão</strong>
                  <p>Verifique sua conexão com a internet e tente novamente.</p>
                </div>
              </div>
            )}
            
            {submitStatus === 'validation-error' && (
              <div className="form-status warning">
                <span className="status-icon">⚠️</span>
                <div>
                  <strong>Campos obrigatórios</strong>
                  <p>Por favor, preencha todos os campos antes de enviar.</p>
                </div>
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 