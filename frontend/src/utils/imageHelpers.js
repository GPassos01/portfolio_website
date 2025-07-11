// Configuração de imagens
const IMAGE_CONFIG = {
  // Desenvolver localmente, produção com CDN
  BASE_URL: process.env.NODE_ENV === 'production' 
    ? 'https://res.cloudinary.com/seu-cloud/image/upload/'
    : '/images/',
    
  // Otimizações automáticas para produção
  CLOUDINARY_PARAMS: 'f_auto,q_auto,w_auto,dpr_auto/',
};

export const getImageUrl = (imageName, optimize = true) => {
  if (process.env.NODE_ENV === 'production' && optimize) {
    return `${IMAGE_CONFIG.BASE_URL}${IMAGE_CONFIG.CLOUDINARY_PARAMS}${imageName}`;
  }
  return `${IMAGE_CONFIG.BASE_URL}${imageName}`;
};

// Componente de imagem otimizada
export const OptimizedImage = ({ src, alt, className, ...props }) => {
  const imageUrl = getImageUrl(src);
  
  return (
    <img 
      src={imageUrl}
      alt={alt}
      className={className}
      loading="lazy"
      {...props}
    />
  );
}; 