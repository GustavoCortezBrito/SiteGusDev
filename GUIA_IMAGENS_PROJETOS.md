# 📸 Guia: Como Adicionar Imagens dos Projetos

## 🎯 O Problema
As APIs de screenshot automático nem sempre funcionam bem, então criei um sistema híbrido que:
1. **Primeiro** tenta usar imagens estáticas (que você adiciona)
2. **Se não encontrar**, mostra um fallback bonito com ícones temáticos

## 📁 Estrutura de Pastas

Crie esta estrutura na pasta `public`:

```
public/
├── projects/
│   ├── eletrosolucoes.jpg
│   ├── lihai.jpg
│   └── ambitus.jpg
├── GustavoCortezDev.jpg
├── LogoGC.png
└── ...
```

## 📷 Como Tirar Screenshots Perfeitos

### Método 1: Ferramenta Online (Recomendado)
1. Acesse: https://www.screenshotmachine.com/
2. Cole a URL do projeto
3. Configure:
   - **Tamanho**: 1200x800
   - **Formato**: JPG
   - **Qualidade**: Alta
4. Baixe e renomeie conforme abaixo

### Método 2: Extensão do Chrome
1. Instale: "Full Page Screen Capture"
2. Acesse o site do projeto
3. Clique na extensão
4. Baixe a imagem completa
5. Recorte a parte superior (header + hero)

### Método 3: DevTools do Chrome
1. Pressione `F12`
2. `Ctrl+Shift+P`
3. Digite "screenshot"
4. Escolha "Capture full size screenshot"

## 🏷️ Nomes dos Arquivos

Renomeie as imagens exatamente assim:
- **Eletro Soluções**: `eletrosolucoes.jpg`
- **Li Hai**: `lihai.jpg`
- **Ambitus Global**: `ambitus.jpg`

## 🎨 Especificações das Imagens

- **Formato**: JPG ou PNG
- **Tamanho**: 1200x800px (proporção 3:2)
- **Peso**: Máximo 500KB
- **Qualidade**: Alta, mas otimizada

### Otimização:
- Use: https://tinypng.com/
- Ou: https://squoosh.app/

## 🎭 Fallbacks Atuais

Se você não adicionar as imagens, o site mostra fallbacks bonitos:

### Eletro Soluções:
- ⚡ Ícone de raio amarelo
- Gradiente amarelo/laranja
- Texto "Clique para visitar"

### Li Hai:
- 🏢 Ícone de prédio roxo
- Gradiente roxo/rosa
- Design elegante

### Ambitus Global:
- 🌐 Ícone de globo azul
- Gradiente azul/ciano
- Tema internacional

## ✅ Resultado

Com as imagens:
- **Screenshots reais** dos seus projetos
- **Hover effect** com zoom suave
- **Loading otimizado**

Sem as imagens:
- **Fallbacks bonitos** com ícones temáticos
- **Cores coordenadas** com cada projeto
- **Ainda fica profissional**

## 🚀 Próximos Passos

1. **Tire screenshots** dos 3 sites
2. **Otimize as imagens** (TinyPNG)
3. **Renomeie corretamente**
4. **Coloque na pasta** `/public/projects/`
5. **Teste o site** - as imagens aparecerão automaticamente!

---

**Dica**: Mesmo sem as imagens, o site já está bonito com os fallbacks! Mas com as imagens reais fica ainda mais profissional. 🎨