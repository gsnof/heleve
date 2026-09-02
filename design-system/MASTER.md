# UI/UX Pro Max — Master Design System & Audit
**Projeto:** Clínica Heleve (Odontologia Especializada & Nutrologia Esportiva)  
**Localização:** São João del-Rei - MG  
**Stack:** Next.js 14 (App Router) + TypeScript + Tailwind CSS + Lucide Icons  

---

## 1. Perfil de Produto & Direção de Arte

- **Categoria:** Saúde, Medicina Integrada & Odontologia Premium.
- **Estética Dominante:** *Editorial Medical Luxury* (fundo escuro profundo, tipografia editorial imponente, detalhes em ouro champagne e fotografia real de alta autoridade).
- **Tom de Comunicação:** Autoridade clínica, acolhimento humanizado, segurança, sobriedade e sofisticação.
- **Objetivo Primário de UX:** Reduzir inseguranças de novos pacientes e maximizar a conversão para agendamentos via WhatsApp (`wa.me`).

---

## 2. Tokens de Cor (Semantic Palette)

```css
:root {
  /* Superfícies & Fundos */
  --bg-obsidian-base: #06080B;  /* Fundo principal da aplicação */
  --bg-obsidian-surface: #0B0E14; /* Cabeçalho e seções alternadas */
  --bg-obsidian-card: #10141C;    /* Superfície dos cards interativos */
  --bg-obsidian-elevated: #161B26;/* Modais, drawers e tooltips */

  /* Ouro Nobre & Champagne (Inspirado no Logotipo Oficial) */
  --gold-50: #FAF6EF;   /* Ouro ultra-claro */
  --gold-200: #E6D5B8;  /* Champagne sutil */
  --gold-300: #D7BD8E;  /* Destaque tipográfico */
  --gold-400: #C9A86A;  /* Cor primária da marca / bordas ativas */
  --gold-500: #B89352;  /* Gradientes e botões de ação */
  --gold-700: #7C5F2B;  /* Sombras e profundidade */

  /* Neutros e Tipografia */
  --text-primary: #F8F9FA;    /* Texto de leitura principal (contraste > 12:1) */
  --text-secondary: #CBD5E1;  /* Descrições e subtítulos */
  --text-muted: #94A3B8;      /* Legendas e metadados */

  /* Acentos Funcionais */
  --color-success: #10B981;   /* Status online e pontos de contato */
  --whatsapp-green: #25D366;  /* Indicadores do WhatsApp */
}
```

---

## 3. Tipografia & Escala Modular

- **Headings (Títulos & Destaques):** `Cormorant Garamond` (Google Font, Serif clássica)
  - `H1 (Hero):` `clamp(2.25rem, 5vw, 4rem)` / `leading-[1.12]`
  - `H2 (Seções):` `clamp(1.75rem, 3.5vw, 3rem)` / `leading-[1.15]`
  - `H3 (Cards/Especialidades):` `clamp(1.25rem, 2.5vw, 2rem)` / `leading-[1.2]`
- **Body & Interface (UI & Parágrafos):** `Plus Jakarta Sans` (Google Font, Geometric Sans)
  - `Body Text:` `15px–17px` / `line-height: 1.6–1.7` / `font-weight: 300–400`
  - `Labels & CTAs:` `11px–13px` / `uppercase` / `letter-spacing: 0.05em` / `font-weight: 600`
  - `Metadados & Badges:` `10px–11px` / `font-weight: 500`

---

## 4. Matriz de Auditoria UI/UX Pro Max (10 Prioridades)

| Prioridade | Categoria | Status | Implementação no Projeto |
| :--- | :--- | :---: | :--- |
| **1** | **Acessibilidade** | ✅ **APROVADO** | Relação de contraste > 7:1 em textos, `focus-visible` dourado de 2px, atributos `aria-label` e `aria-expanded` em menus e modais. |
| **2** | **Touch & Interação** | ✅ **APROVADO** | Alvos de toque mobile ≥ 44×44px, feedback tátil com `active:scale-[0.98]` e transições suaves de 200–300ms. |
| **3** | **Performance** | ✅ **APROVADO** | Imagens reais otimizadas com dimensões explícitas, build estático com First Load JS < 99kB e zero layout shifts (CLS < 0.05). |
| **4** | **Identidade Visual** | ✅ **APROVADO** | Ícones SVG semânticos do Lucide, sem emojis na interface, paleta unificada inspirada no brasão dourado oficial. |
| **5** | **Layout & Mobile** | ✅ **APROVADO** | Responsividade mobile-first testada em 390px, 768px, 1024px e 1440px sem overflow horizontal. |
| **6** | **Tipografia & Respiro** | ✅ **APROVADO** | `whitespace-nowrap` no menu, espaçamento modular com paddings de 20px a 112px e leitura fluida. |
| **7** | **Animação & Movimento** | ✅ **APROVADO** | Microinterações discretas, animação de entrada fade-in e conformidade com `prefers-reduced-motion`. |
| **8** | **CTAs & Conversão** | ✅ **APROVADO** | 18 pontos de contato com WhatsApp contextualizados para cada tratamento, além de widget flutuante não-invasivo. |
| **9** | **Navegação & Fluxo** | ✅ **APROVADO** | Cabeçalho inteligente com blur, menu mobile drawer acessível e âncoras suaves. |
| **10** | **Confiança & Prova Social** | ✅ **APROVADO** | Galeria de 5 casos reais (Odontologia + Nutrologia), aviso ético CFO/CFM, CNES e mapa interativo. |

---

## 5. Regras de Pre-Delivery Checklist
- [x] Zero erros no console JavaScript
- [x] Zero erros de build ou TypeScript
- [x] Imagens com textos alternativos (`alt`) descritivos
- [x] Links externos com `rel="noopener noreferrer"` e `target="_blank"`
- [x] Links de WhatsApp pré-formatados com mensagens codificadas em URL
- [x] Integração com Google Maps e rota direta configurada
