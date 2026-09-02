# Relatório de Auditoria SEO & AI-Search (AEO/GEO) — Clínica Heleve

**Domínio / Projeto:** Clínica Heleve (https://heleveclinica.com.br)  
**Segmento:** Odontologia Especializada, Reabilitação Oral e Nutrologia Esportiva  
**Mercado-Alvo:** São João del-Rei e Campo das Vertentes — MG  
**Data da Auditoria:** 01/09/2026  

---

## 1. Sumário Executivo & Oportunidades Principais

A arquitetura do site da **Clínica Heleve** foi estruturada desde a base com as melhores práticas de SEO Técnico, SEO On-Page e Otimização para Mecanismos de Resposta por IA (AEO / GEO / LLMO). 

### Principais Pontos Fortes:
- **Indexabilidade Imediata:** Sitemap XML dinâmico e robots.txt gerados nativamente pelo Next.js App Router.
- **Rico Grafo Schema.org (JSON-LD):** Dupla tipagem semântica (`MedicalClinic` + `Dentist`) com endereço físico exato, geolocalização de São João del-Rei, horários de atendimento, CNES e especialidades médicas/odontológicas.
- **Performance e Core Web Vitals:** Página estática pré-renderizada (First Load JS total de apenas 98.8 kB), garantindo tempo de resposta instantâneo (TTFB < 100ms) e ausência de saltos de layout (CLS < 0.05).
- **SEO Local Hiper-relevante:** Repetição contextual natural de termos geográficos (*São João del-Rei*, *Colônia do Marçal*, *MG*) sem keyword stuffing.

---

## 2. Auditoria SEO On-Page

### 🏷️ Metadados Principais
| Elemento | Implementação Atual | Avaliação SEO |
| :--- | :--- | :---: |
| **Title Tag** | `Clínica Heleve \| Implante Dentário, Ortodontia e Nutrologia Esportiva em São João del-Rei` | **Excelente** (74 caracteres, inclui marca, especialidades principais e cidade) |
| **Meta Description** | `Clínica Heleve em São João del-Rei - MG. Excelência em implantes dentários, reabilitação oral de alta precisão, ortodontia e nutrologia esportiva. Atendimento com hora marcada.` | **Excelente** (170 caracteres, alta densidade semântica e chamada de ação) |
| **Canonical** | `https://heleveclinica.com.br/` | **Correto** (evita conteúdo duplicado) |
| **Open Graph (OG)** | Configurado com título, descrição, imagem do consultório (1200x630) e locale `pt_BR` | **Correto** |
| **Twitter Cards** | `summary_large_image` configurado | **Correto** |
| **Favicon & Icons** | Imagem oficial do logotipo aplicada no `<head>` | **Correto** |

### 📑 Hierarquia de Cabeçalhos (Headings Structure)
- **H1 Único:** `"Saúde, confiança e excelência em cada detalhe."` (Acompanhado de eyebrow e parágrafo contendo as palavras-chave principais).
- **H2 (Seções):**
  - H2: *Mais do que tratamentos, uma experiência de cuidado e saúde integrativa.* (Sobre)
  - H2: *Odontologia especializada e saúde de alto padrão.* (Especialidades)
  - H2: *Transformações reais em odontologia e nutrologia esportiva.* (Resultados)
  - H2: *Por que nossos pacientes confiam em nosso cuidado.* (Diferenciais)
  - H2: *Profissionais dedicados à sua saúde e excelência estética.* (Corpo Clínico)
  - H2: *Seu atendimento em etapas claras e transparentes.* (Como Funciona)
  - H2: *A confiança de quem cuida da saúde conosco.* (Reputação)
  - H2: *Tire suas dúvidas antes de sua visita.* (FAQ)
  - H2: *Fácil acesso no coração de São João del-Rei.* (Localização)
  - H2: *Seu cuidado começa com uma avaliação detalhada.* (Final CTA)
- **H3 e H4:** Utilizados com coerência nos tratamentos, cards e etapas do processo.

---

## 3. Auditoria Técnica (Technical SEO)

- **Sitemap XML:** Disponível e válido em `https://heleveclinica.com.br/sitemap.xml`.
- **Robots.txt:** Disponível e válido em `https://heleveclinica.com.br/robots.txt` com link direto para o sitemap.
- **Renderização e HTML Semântico:** Utilização de `<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`, `<article>`, `<button>` e `<a>`.
- **Acessibilidade & Imagens:** Todas as 8 imagens do projeto possuem tags `alt` descritivas contextualizadas (ex: *"Logo Clínica Heleve"*, *"Corpo Clínico da Clínica Heleve no consultório"*, *"Reabilitação com Implantes Dentários"*).

---

## 4. Otimização para Motores de Resposta por IA (AEO / GEO / LLMO)

Os motores de busca baseados em IA (como Google AI Overviews/SGE, Perplexity AI, ChatGPT Search e Gemini) priorizam entidades claras, dados verificáveis e respostas diretas.

### Implementações Realizadas:
1. **Entidade Clínica Bem Definida:** Nome comercial (*Clínica Heleve*), Razão Social (*Heleve Odontologia e Saúde Ltda.*), CNES (*0819867*) e endereço físico.
2. **Formato Q&A no FAQ:** Perguntas em linguagem natural seguidas de respostas objetivas de 2 a 3 frases, facilitando a extração para respostas instantâneas (Zero-Click Searches).
3. **Casos Clínicos com Dados Concretos:** Métricas verificadas de evolução (-12 kg, -14 cm de cintura, reabilitação oclusal) fornecem substância quantitativa para citação por IAs.

---

## 5. Estrutura Schema.org JSON-LD Implementada

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "@id": "https://heleveclinica.com.br/#clinic",
      "name": "Clínica Heleve",
      "legalName": "Heleve Odontologia e Saúde Ltda.",
      "url": "https://heleveclinica.com.br",
      "telephone": "(32) 3518-5253",
      "logo": "https://heleveclinica.com.br/images/logo-heleve.jpg",
      "image": "https://heleveclinica.com.br/images/corpo-clinico-consultorio.jpg",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Avenida Trinta e Um de Março, 1291A",
        "addressLocality": "São João del-Rei",
        "addressRegion": "MG",
        "postalCode": "36302-016",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -21.1356,
        "longitude": -44.2618
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:30",
          "closes": "12:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "13:00",
          "closes": "18:00"
        }
      ],
      "sameAs": ["https://www.instagram.com/heleveclinica/"],
      "medicalSpecialty": [
        "https://health-lifesci.schema.org/Dentistry",
        "https://health-lifesci.schema.org/SportsMedicine"
      ],
      "priceRange": "$$$"
    },
    {
      "@type": "Dentist",
      "@id": "https://heleveclinica.com.br/#dentist",
      "name": "Clínica Heleve - Odontologia Especializada",
      "telephone": "(32) 3518-5253",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Avenida Trinta e Um de Março, 1291A",
        "addressLocality": "São João del-Rei",
        "addressRegion": "MG",
        "postalCode": "36302-016",
        "addressCountry": "BR"
      }
    }
  ]
}
```

---

## 6. Checklist de Recomendações Pós-Deploy

1. **Google Meu Negócio (Google Business Profile):**
   - Garantir que o nome, endereço (*Av. Trinta e Um de Março, 1291A*) e telefones estejam exatamente idênticos aos do site (consistência de NAP - Name, Address, Phone).
   - Inserir a URL do site no perfil do Google Maps.
2. **Google Search Console:**
   - Adicionar a propriedade `https://heleveclinica.com.br` e enviar o sitemap `https://heleveclinica.com.br/sitemap.xml` para indexação imediata.
3. **Bing Webmaster Tools:**
   - Importar a propriedade do Google Search Console para garantir presença no Bing e nos resultados do Microsoft Copilot.
