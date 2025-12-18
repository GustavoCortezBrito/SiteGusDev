# 🔍 Como Testar o Open Graph

## ✅ **Open Graph Configurado:**

### **Meta Tags Implementadas:**
```html
<!-- Básicas -->
<meta property="og:title" content="Gustavo Cortez - Desenvolvedor Web & Estudante de Medicina" />
<meta property="og:description" content="🚀 Transformo ideias em sites que vendem! Desenvolvedor web especializado em criar soluções digitais modernas e eficientes." />
<meta property="og:url" content="https://gustavocortez.dev" />
<meta property="og:site_name" content="Gustavo Cortez Dev" />
<meta property="og:type" content="website" />
<meta property="og:locale" content="pt_BR" />

<!-- Imagem -->
<meta property="og:image" content="https://gustavocortez.dev/opengraph-image.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:type" content="image/png" />
<meta property="og:image:alt" content="Gustavo Cortez - Desenvolvedor Web & Estudante de Medicina" />

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@gustavocortezdev" />
<meta name="twitter:creator" content="@gustavocortezdev" />
<meta name="twitter:title" content="Gustavo Cortez - Desenvolvedor Web & Estudante de Medicina" />
<meta name="twitter:description" content="🚀 Transformo ideias em sites que vendem!" />
<meta name="twitter:image" content="https://gustavocortez.dev/opengraph-image.png" />
```

## 🧪 **Como Testar:**

### **1. Facebook Debugger**
- Acesse: https://developers.facebook.com/tools/debug/
- Cole sua URL: `https://seudominio.com`
- Clique em "Debug"
- Deve mostrar: título, descrição e imagem

### **2. Twitter Card Validator**
- Acesse: https://cards-dev.twitter.com/validator
- Cole sua URL
- Deve mostrar preview do card

### **3. WhatsApp**
- Envie sua URL em uma conversa
- Deve aparecer: imagem, título e descrição
- **Nota**: WhatsApp pode demorar para atualizar cache

### **4. LinkedIn Post Inspector**
- Acesse: https://www.linkedin.com/post-inspector/
- Cole sua URL
- Deve mostrar preview profissional

### **5. Teste Manual**
```bash
# Ver meta tags
curl -s https://seudominio.com | grep -i "og:"
curl -s https://seudominio.com | grep -i "twitter:"
```

## 🖼️ **Imagem Open Graph Criada:**

### **Características:**
- ✅ **Tamanho**: 1200x630px (padrão)
- ✅ **Formato**: PNG (melhor qualidade)
- ✅ **Design**: Profissional com gradientes
- ✅ **Texto**: "Transformo ideias em sites que vendem 🚀"
- ✅ **Avatar**: Iniciais "GC" estilizadas
- ✅ **Branding**: URL no rodapé
- ✅ **Cores**: Roxo/rosa (identidade visual)

### **Layout da Imagem:**
```
┌─────────────────────────────────────────────────────────┐
│  Transformo ideias em sites que vendem 🚀               │
│  Desenvolvedor Web especializado...                     │
│                                                         │
│  Gustavo Cortez • Medicina & Tecnologia          [GC]  │
│                                                         │
│  gustavocortez.dev                                      │
└─────────────────────────────────────────────────────────┘
```

## 📱 **Como Vai Aparecer:**

### **WhatsApp:**
```
┌─────────────────────────────────────┐
│ [Imagem com design profissional]    │
│ Gustavo Cortez - Desenvolvedor Web  │
│ 🚀 Transformo ideias em sites...    │
│ gustavocortez.dev                   │
└─────────────────────────────────────┘
```

### **Facebook/LinkedIn:**
```
┌─────────────────────────────────────┐
│ [Imagem 1200x630]                  │
│ Gustavo Cortez - Desenvolvedor Web  │
│ 🚀 Transformo ideias em sites que   │
│ vendem! Desenvolvedor web...        │
│ GUSTAVOCORTEZ.DEV                   │
└─────────────────────────────────────┘
```

### **Twitter:**
```
┌─────────────────────────────────────┐
│ [Imagem large card]                 │
│ Gustavo Cortez - Desenvolvedor Web  │
│ 🚀 Transformo ideias em sites...    │
│ gustavocortez.dev                   │
└─────────────────────────────────────┘
```

## ⚠️ **Importante:**

### **Cache das Plataformas:**
- **Facebook**: Cache por 24h
- **WhatsApp**: Cache por 7 dias
- **Twitter**: Cache por 1h
- **LinkedIn**: Cache por 7 dias

### **Para Forçar Atualização:**
1. **Facebook**: Use o debugger e clique "Scrape Again"
2. **WhatsApp**: Pode demorar até 7 dias
3. **Twitter**: Geralmente atualiza rápido
4. **LinkedIn**: Use o Post Inspector

### **Troubleshooting:**
- ✅ Imagem deve ser HTTPS
- ✅ Tamanho mínimo: 600x315px
- ✅ Tamanho máximo: 8MB
- ✅ Formato: JPG, PNG, GIF
- ✅ Proporção: 1.91:1 (ideal)

---

**Status**: ✅ Open Graph 100% configurado | ⏳ Aguardando teste nas plataformas