# 📸 Como Adicionar Imagens dos Projetos

## Passo a Passo

### 1. Tire Screenshots dos Sites

Acesse cada um dos seus projetos e tire screenshots:
- **Eletro Soluções**: https://eletrosolucoes.com.br/
- **Li Hai**: https://lihai.com.br/
- **Ambitus Global**: https://www.ambitusglobal.com/

**Dica**: Use a ferramenta de screenshot do navegador ou extensões como:
- Full Page Screen Capture (Chrome)
- Awesome Screenshot
- Ou simplesmente pressione `F12` > `Ctrl+Shift+P` > "Capture full size screenshot"

### 2. Prepare as Imagens

- **Formato recomendado**: JPG ou PNG
- **Tamanho sugerido**: 1200x800px (proporção 3:2)
- **Peso**: Otimize para web (máximo 500KB por imagem)

**Ferramentas para otimizar**:
- TinyPNG (https://tinypng.com/)
- Squoosh (https://squoosh.app/)
- ImageOptim (Mac)

### 3. Nomeie os Arquivos

Renomeie as imagens para:
- `eletrosolucoes.jpg`
- `lihai.jpg`
- `ambitus.jpg`

### 4. Coloque na Pasta Public

Copie as 3 imagens para a pasta `/public` do seu projeto:

```
seu-projeto/
├── public/
│   ├── eletrosolucoes.jpg  ← Adicione aqui
│   ├── lihai.jpg           ← Adicione aqui
│   ├── ambitus.jpg         ← Adicione aqui
│   ├── GustavoCortezDev.jpg
│   ├── LogoGC.png
│   └── ...
```

### 5. Pronto!

As imagens já estão configuradas no código. Quando você adicionar os arquivos na pasta `/public`, elas aparecerão automaticamente nos cards de projetos.

## 🎨 Alternativa: Usar Placeholders Temporários

Se você não tiver as imagens agora, o site já está funcionando com placeholders. Os cards mostram "Imagem do Projeto" até você adicionar as imagens reais.

## 🔧 Personalização Adicional

Se quiser ajustar o visual das imagens, edite o arquivo `src/components/projects.tsx`:

```tsx
{/* Área da imagem - linha ~64 */}
<div className="relative w-full h-48 bg-gray-800">
  {/* Ajuste a altura (h-48) se necessário */}
</div>
```

---

**Qualquer dúvida, é só chamar!** 🚀
