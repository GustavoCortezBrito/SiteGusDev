export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://gustavocortez.dev/#person",
        "name": "Gustavo Cortez de Brito",
        "alternateName": "Gustavo Cortez",
        "description": "Desenvolvedor web especializado em sites, landing pages e SEO. Estudante de Medicina na UNOESTE com experiência em Sistemas de Informação pela UFSC.",
        "url": "https://gustavocortez.dev",
        "image": {
          "@type": "ImageObject",
          "url": "https://gustavocortez.dev/GustavoCortezDev.jpg",
          "width": 400,
          "height": 400
        },
        "sameAs": [
          "https://www.instagram.com/gustavocortez.dev/",
          "https://wa.me/5517981404761"
        ],
        "jobTitle": "Desenvolvedor Web",
        "worksFor": {
          "@type": "Organization",
          "name": "Freelancer"
        },
        "alumniOf": [
          {
            "@type": "EducationalOrganization",
            "name": "Universidade Federal de Santa Catarina",
            "alternateName": "UFSC"
          },
          {
            "@type": "EducationalOrganization", 
            "name": "Universidade do Oeste Paulista",
            "alternateName": "UNOESTE"
          }
        ],
        "knowsAbout": [
          "Desenvolvimento Web",
          "React",
          "Next.js",
          "JavaScript",
          "TypeScript",
          "HTML",
          "CSS",
          "TailwindCSS",
          "SEO",
          "Landing Pages",
          "Sites Institucionais"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://gustavocortez.dev/#website",
        "url": "https://gustavocortez.dev",
        "name": "Gustavo Cortez - Desenvolvedor Web",
        "description": "Transformo ideias em sites que vendem. Desenvolvedor web especializado em criar soluções digitais modernas e eficientes.",
        "publisher": {
          "@id": "https://gustavocortez.dev/#person"
        },
        "inLanguage": "pt-BR",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://gustavocortez.dev/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://gustavocortez.dev/#webpage",
        "url": "https://gustavocortez.dev",
        "name": "Gustavo Cortez - Desenvolvedor Web & Estudante de Medicina",
        "description": "Transformo ideias em sites que vendem. Desenvolvedor web especializado em criar soluções digitais modernas e eficientes.",
        "isPartOf": {
          "@id": "https://gustavocortez.dev/#website"
        },
        "about": {
          "@id": "https://gustavocortez.dev/#person"
        },
        "datePublished": "2024-12-18",
        "dateModified": "2024-12-18",
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://gustavocortez.dev"
            }
          ]
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://gustavocortez.dev/#service",
        "name": "Gustavo Cortez - Desenvolvimento Web",
        "description": "Serviços de desenvolvimento web, criação de sites institucionais, landing pages e otimização SEO.",
        "provider": {
          "@id": "https://gustavocortez.dev/#person"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Brasil"
        },
        "serviceType": [
          "Desenvolvimento Web",
          "Criação de Sites",
          "Landing Pages",
          "Otimização SEO",
          "Design Responsivo"
        ],
        "offers": {
          "@type": "Offer",
          "description": "Desenvolvimento de sites profissionais e landing pages",
          "availability": "https://schema.org/InStock"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://gustavocortez.dev/#organization",
        "name": "Gustavo Cortez Dev",
        "alternateName": "GC Dev",
        "url": "https://gustavocortez.dev",
        "logo": {
          "@type": "ImageObject",
          "url": "https://gustavocortez.dev/LogoGC.png"
        },
        "founder": {
          "@id": "https://gustavocortez.dev/#person"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+55-17-98140-4761",
          "contactType": "customer service",
          "availableLanguage": "Portuguese"
        },
        "sameAs": [
          "https://www.instagram.com/gustavocortez.dev/"
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}