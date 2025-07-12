import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-container">
          <div className="nav-logo" onClick={() => scrollToSection('home')}>
            <h2>Gabriel Passos</h2>
          </div>

          <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
            <li className="nav-item">
              <button onClick={() => scrollToSection('about')} className="nav-link">
                Sobre
              </button>
            </li>
            <li className="nav-item">
              <button onClick={() => scrollToSection('projects')} className="nav-link">
                Projetos
              </button>
            </li>
            <li className="nav-item">
              <button onClick={() => scrollToSection('skills')} className="nav-link">
                Habilidades
              </button>
            </li>
            <li className="nav-item">
              <button onClick={() => scrollToSection('contact')} className="nav-link">
                Contato
              </button>
            </li>
          </ul>

          <div className="nav-toggle" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 