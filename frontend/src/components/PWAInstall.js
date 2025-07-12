import React, { useState, useEffect } from 'react';
import { FaDownload, FaTimes } from 'react-icons/fa';
import './PWAInstall.css';

const PWAInstall = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Verificar se já está instalado
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
      return;
    }

    // Listener para o evento beforeinstallprompt
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallPrompt(true);
    };

    // Listener para quando o app é instalado
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setShowInstallPrompt(false);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === 'accepted') {
      console.log('Usuário aceitou a instalação');
    } else {
      console.log('Usuário rejeitou a instalação');
    }

    setDeferredPrompt(null);
    setShowInstallPrompt(false);
  };

  const handleDismiss = () => {
    setShowInstallPrompt(false);
    setDeferredPrompt(null);
  };

  if (isInstalled || !showInstallPrompt) {
    return null;
  }

  return (
    <div className="pwa-install-banner">
      <div className="pwa-install-content">
        <div className="pwa-install-icon">
          <FaDownload />
        </div>
        <div className="pwa-install-text">
          <h3>Instalar App</h3>
          <p>Adicione este portfólio à sua tela inicial para acesso rápido</p>
        </div>
        <div className="pwa-install-actions">
          <button 
            className="pwa-install-btn"
            onClick={handleInstallClick}
          >
            Instalar
          </button>
          <button 
            className="pwa-dismiss-btn"
            onClick={handleDismiss}
            aria-label="Fechar"
          >
            <FaTimes />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PWAInstall; 