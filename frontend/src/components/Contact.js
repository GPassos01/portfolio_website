import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSpinner, FaCheck, FaExclamationTriangle } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    budget: '',
    timeline: '',
    description: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: ''
  });

  const serviceOptions = [
    { value: '', label: 'Selecione um serviço' },
    { value: 'web-development', label: 'Desenvolvimento Web' },
    { value: 'mobile-app', label: 'Aplicação Mobile' },
    { value: 'backend-api', label: 'Sistema Backend' },
    { value: 'study-project', label: 'Projeto de Estudo' },
    { value: 'maintenance', label: 'Manutenção & Suporte' },
    { value: 'consulting', label: 'Consultoria Técnica' },
    { value: 'other', label: 'Outro' }
  ];

  const budgetOptions = [
    { value: '', label: 'Selecione o orçamento' },
    { value: 'under-500', label: 'Até R$ 500' },
    { value: '500-1000', label: 'R$ 500 - R$ 1.000' },
    { value: '1000-2000', label: 'R$ 1.000 - R$ 2.000' },
    { value: '2000-5000', label: 'R$ 2.000 - R$ 5.000' },
    { value: 'over-5000', label: 'Acima de R$ 5.000' },
    { value: 'hourly', label: 'Por hora' },
    { value: 'discuss', label: 'Vamos conversar' }
  ];

  const timelineOptions = [
    { value: '', label: 'Selecione o prazo' },
    { value: 'asap', label: 'O quanto antes' },
    { value: '1-2-weeks', label: '1-2 semanas' },
    { value: '1-month', label: '1 mês' },
    { value: '2-3-months', label: '2-3 meses' },
    { value: 'flexible', label: 'Flexível' }
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Descrição do projeto é obrigatória';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Limpar erro quando usuário começa a digitar
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setStatus({ loading: true, success: false, error: false, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({
          loading: false,
          success: true,
          error: false,
          message: 'Mensagem enviada com sucesso! Entrarei em contato em breve.'
        });
        setFormData({
          name: '',
          email: '',
          service: '',
          budget: '',
          timeline: '',
          description: ''
        });
        setErrors({});
      } else {
        throw new Error('Erro ao enviar mensagem');
      }
    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Erro ao enviar mensagem. Tente novamente.'
      });
    }
  };

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 id="contact-title" className="section-title">Vamos Conversar</h2>
          <p className="section-subtitle">
            Estou sempre aberto a novos projetos e oportunidades de aprendizado
          </p>

          <div className="contact-content">
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3>Por que trabalhar comigo?</h3>
              <div className="contact-benefits" role="list">
                <div className="benefit-item" role="listitem">
                  <div className="benefit-icon" aria-hidden="true">💡</div>
                  <div className="benefit-content">
                    <h4>Preços Acessíveis</h4>
                    <p>Valores competitivos para projetos pequenos e médios</p>
                  </div>
                </div>
                <div className="benefit-item" role="listitem">
                  <div className="benefit-icon" aria-hidden="true">🚀</div>
                  <div className="benefit-content">
                    <h4>Entregas Rápidas</h4>
                    <p>Foco em projetos menores com prazos curtos</p>
                  </div>
                </div>
                <div className="benefit-item" role="listitem">
                  <div className="benefit-icon" aria-hidden="true">📚</div>
                  <div className="benefit-content">
                    <h4>Aprendizado Contínuo</h4>
                    <p>Sempre estudando e aplicando as melhores práticas</p>
                  </div>
                </div>
                <div className="benefit-item" role="listitem">
                  <div className="benefit-icon" aria-hidden="true">💬</div>
                  <div className="benefit-content">
                    <h4>Comunicação Clara</h4>
                    <p>Atualizações regulares e transparência total</p>
                  </div>
                </div>
              </div>

              <div className="contact-availability">
                <h4>Disponibilidade</h4>
                <ul>
                  <li>✅ Disponível para novos projetos</li>
                  <li>✅ Resposta em até 24h</li>
                  <li>✅ Reuniões por videochamada</li>
                </ul>
              </div>
            </motion.div>

            <motion.form
              className="contact-form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              noValidate
              aria-labelledby="contact-title"
            >
              <div className="form-group">
                <label htmlFor="name" id="name-label">
                  Nome <span className="required" aria-label="campo obrigatório">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Seu nome completo"
                  aria-labelledby="name-label"
                  aria-describedby={errors.name ? `name-error` : undefined}
                  aria-invalid={errors.name ? 'true' : 'false'}
                />
                {errors.name && (
                  <div id="name-error" className="error-message" role="alert">
                    {errors.name}
                  </div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="email" id="email-label">
                  Email <span className="required" aria-label="campo obrigatório">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="seu@email.com"
                  aria-labelledby="email-label"
                  aria-describedby={errors.email ? `email-error` : undefined}
                  aria-invalid={errors.email ? 'true' : 'false'}
                />
                {errors.email && (
                  <div id="email-error" className="error-message" role="alert">
                    {errors.email}
                  </div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="service" id="service-label">
                  Tipo de Projeto
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  aria-labelledby="service-label"
                >
                  {serviceOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="budget" id="budget-label">
                    Orçamento
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    aria-labelledby="budget-label"
                  >
                    {budgetOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="timeline" id="timeline-label">
                    Prazo
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    aria-labelledby="timeline-label"
                  >
                    {timelineOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="description" id="description-label">
                  Descrição do Projeto <span className="required" aria-label="campo obrigatório">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Conte-me sobre seu projeto, objetivos e requisitos..."
                  aria-labelledby="description-label"
                  aria-describedby={errors.description ? `description-error` : undefined}
                  aria-invalid={errors.description ? 'true' : 'false'}
                  required
                />
                {errors.description && (
                  <div id="description-error" className="error-message" role="alert">
                    {errors.description}
                  </div>
                )}
              </div>

              {status.message && (
                <div 
                  className={`form-message ${status.success ? 'success' : status.error ? 'error' : ''}`}
                  role="alert"
                  aria-live="polite"
                >
                  {status.success && <FaCheck className="message-icon" aria-hidden="true" />}
                  {status.error && <FaExclamationTriangle className="message-icon" aria-hidden="true" />}
                  <span>{status.message}</span>
                </div>
              )}

              <button
                type="submit"
                className="btn btn-primary submit-btn"
                disabled={status.loading}
                aria-describedby={status.loading ? 'loading-status' : undefined}
              >
                {status.loading ? (
                  <>
                    <FaSpinner className="spinner" aria-hidden="true" />
                    Enviando...
                    <span id="loading-status" className="sr-only">Enviando formulário, aguarde...</span>
                  </>
                ) : (
                  'Enviar Mensagem'
                )}
              </button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 