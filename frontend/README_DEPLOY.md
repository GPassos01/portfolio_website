# 🚀 Guia de Deploy - Portfólio PWA

## 📋 Checklist Antes do Deploy

### ✅ PWA Configurado
- [x] manifest.json
- [x] sw.js (Service Worker)
- [x] offline.html
- [x] Meta tags no index.html
- [x] Ícones PWA

### ✅ Performance
- [x] Build otimizado
- [x] Imagens comprimidas
- [x] Lazy loading
- [x] Cache configurado

### ✅ SEO
- [x] Meta tags
- [x] Open Graph
- [x] Twitter Cards
- [x] Sitemap (opcional)

## 🌐 Opções de Deploy

### **1. Netlify (Recomendado)**

```bash
# Build
npm run build

# Deploy
npx netlify-cli deploy --prod --dir=build
```

**URL:** `https://seu-portfolio.netlify.app`

### **2. Vercel**

```bash
# Deploy direto
npx vercel --prod
```

**URL:** `https://seu-portfolio.vercel.app`

### **3. GitHub Pages**

```bash
# Build
npm run build

# Deploy via GitHub Actions
git push origin main
```

**URL:** `https://seu-usuario.github.io/seu-repo`

### **4. Firebase**

```bash
# Setup
firebase init hosting
firebase deploy
```

**URL:** `https://seu-projeto.web.app`

## 🔧 Configurações Pós-Deploy

### **HTTPS (Obrigatório para PWA)**
- ✅ Netlify: Automático
- ✅ Vercel: Automático
- ✅ Firebase: Automático
- ⚠️ GitHub Pages: Manual

### **Headers de Segurança**
```nginx
# Para nginx (se usar VPS)
add_header Service-Worker-Allowed "/";
add_header X-Frame-Options "SAMEORIGIN";
```

### **Cache Headers**
```nginx
# Cache para PWA
location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

## 🧪 Testes Pós-Deploy

### **1. Lighthouse Audit**
- Abra Chrome DevTools
- Vá em Lighthouse
- Execute audit completo
- Score deve ser > 90

### **2. PWA Test**
- Chrome DevTools → Application
- Verifique Manifest
- Teste Service Worker
- Confirme instalação

### **3. Mobile Test**
- Teste em dispositivo real
- Verifique instalação
- Teste funcionalidade offline

## 📊 Monitoramento

### **Google Analytics**
```html
<!-- Adicionar no index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### **PWA Metrics**
- Install rate
- Engagement time
- Offline usage
- Performance metrics

## 🚨 Troubleshooting

### **PWA não funciona:**
1. Verificar HTTPS
2. Confirmar manifest.json
3. Testar Service Worker
4. Verificar ícones

### **Performance baixa:**
1. Otimizar imagens
2. Minificar CSS/JS
3. Usar CDN
4. Implementar lazy loading

### **SEO ruim:**
1. Adicionar meta tags
2. Criar sitemap
3. Configurar robots.txt
4. Otimizar Core Web Vitals

## 🎯 Próximos Passos

1. **Escolher plataforma** (Netlify recomendado)
2. **Fazer build** (`npm run build`)
3. **Deploy** (seguir instruções da plataforma)
4. **Testar PWA** (Lighthouse + mobile)
5. **Configurar domínio** (opcional)
6. **Monitorar métricas**

---

**Status:** ✅ Pronto para Deploy! 