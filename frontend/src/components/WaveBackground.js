import React from 'react';
import './WaveBackground.css';

const WaveBackground = ({ variant = 'primary' }) => {
  return (
    <div className={`wave-background wave-${variant}`}>
      <div className="wave wave1"></div>
      <div className="wave-top wave"></div>
    </div>
  );
};

export default WaveBackground; 