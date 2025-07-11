import React from 'react';
import './CyberpunkLoader.css';

const CyberpunkLoader = () => {
  return (
    <div className="cyberpunk-loader">
      <div className="loader-container">
        <div className="loader-text">INICIALIZANDO SISTEMA</div>
        <div className="loader-bar">
          <div className="loader-progress"></div>
        </div>
        <div className="loader-status">CARREGANDO MÓDULOS...</div>
      </div>
    </div>
  );
};

export default CyberpunkLoader; 