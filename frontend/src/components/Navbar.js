import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { href: '#home', label: 'Início' },
    { href: '#about', label: 'Sobre' },
    { href: '#services', label: 'Serviços' },
    { href: '#projects', label: 'Projetos' },
    { href: '#testimonials', label: 'Experiências' },
    { href: '#contact', label: 'Contato' }
  ];

  return (
    <>
      {/* Skip Link para acessibilidade */}
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo principal
      </a>
      
      <nav 
        className={`navbar ${isScrolled ? 'scrolled' : ''}`}
        role="navigation"
        aria-label="Navegação principal"
      >
        <div className="container">
          <motion.div
            className="navbar-brand"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a 
              href="#home" 
              className="brand-link"
              aria-label="Voltar ao início"
            >
              Gabriel Passos
            </a>
          </motion.div>

          {/* Menu Desktop */}
          <motion.ul
            className="navbar-nav"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            role="menubar"
          >
            {navItems.map((item, index) => (
              <li key={item.href} role="none">
                <a
                  href={item.href}
                  className="nav-link"
                  role="menuitem"
                  aria-label={`Ir para seção ${item.label}`}
                  onClick={handleMobileMenuClose}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </motion.ul>

          {/* Botão Mobile */}
          <button
            className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={handleMobileMenuToggle}
            onKeyDown={handleKeyDown}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>

          {/* Menu Mobile */}
          <motion.div
            id="mobile-menu"
            className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ 
              opacity: isMobileMenuOpen ? 1 : 0,
              y: isMobileMenuOpen ? 0 : -20
            }}
            transition={{ duration: 0.3 }}
            role="menu"
            aria-label="Menu mobile"
          >
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="mobile-nav-link"
                role="menuitem"
                aria-label={`Ir para seção ${item.label}`}
                onClick={handleMobileMenuClose}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleMobileMenuClose();
                  }
                }}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        </div>
      </nav>
    </>
  );
};

export default Navbar; 