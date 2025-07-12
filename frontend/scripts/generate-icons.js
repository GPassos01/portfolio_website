const fs = require('fs');
const path = require('path');

// Função para gerar ícone usando Canvas
function generateIcon(size) {
  const canvas = require('canvas');
  const c = canvas.createCanvas(size, size);
  const ctx = c.getContext('2d');

  // Background gradiente
  const gradient = ctx.createLinearGradient(0, 0, size, size);
  gradient.addColorStop(0, '#af3dff');
  gradient.addColorStop(1, '#55ffe1');
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);

  // Círculo central
  const centerX = size / 2;
  const centerY = size / 2;
  const radius = size * 0.3;

  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
  ctx.fill();

  // Símbolo de código
  ctx.fillStyle = '#af3dff';
  ctx.font = `bold ${size * 0.2}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('</>', centerX, centerY);

  return c.toBuffer('image/png');
}

// Tamanhos de ícones necessários
const iconSizes = [72, 96, 128, 144, 152, 192, 384, 512];

// Gerar ícones
iconSizes.forEach(size => {
  const iconBuffer = generateIcon(size);
  const iconPath = path.join(__dirname, '../public/icons', `icon-${size}x${size}.png`);
  
  fs.writeFileSync(iconPath, iconBuffer);
  console.log(`Ícone ${size}x${size} gerado: ${iconPath}`);
});

console.log('Todos os ícones PWA foram gerados com sucesso!'); 