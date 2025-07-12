import React from 'react';
import './GradientBackground.css';

const GradientBackground = () => {
  return (
    <div className="gradient-background">
      <div className="gradient-layer gradient-1"></div>
      <div className="gradient-layer gradient-2"></div>
      <div className="gradient-layer gradient-3"></div>
      <div className="gradient-mesh"></div>
    </div>
  );
};

export default GradientBackground; 