export const seoConfig = {
  baseUrl: 'https://gustavocortez.dev',
  siteName: 'Gustavo Cortez Dev',
  title: 'Gustavo Cortez - Desenvolvedor Web & Estudante de Medicina',
  description: '🚀 Transformo ideias em sites que vendem! Desenvolvedor web especializado em sites institucionais, landing pages e SEO. Estudante de Medicina na UNOESTE com experiência em Sistemas de Informação pela UFSC.',
  keywords: [
    'desenvolvedor web',
    'sites profissionais', 
    'landing pages',
    'SEO otimização',
    'medicina tecnologia',
    'freelancer web',
    'Gustavo Cortez',
    'React Next.js',
    'sites que vendem',
    'desenvolvedor freelancer',
    'criação de sites',
    'design responsivo',
    'UNOESTE UFSC',
    'desenvolvedor Brasil'
  ],
  author: {
    name: 'Gustavo Cortez de Brito',
    email: 'gustavocortezdev@gmail.com',
    url: 'https://gustavocortez.dev',
    social: {
      instagram: 'https://www.instagram.com/gustavocortez.dev/',
      whatsapp: 'https://wa.me/5517981404761'
    }
  },
  images: {
    logo: '/LogoGC.png',
    avatar: '/GustavoCortezDev.jpg',
    ogImage: '/opengraph-image.png',
    favicon: '/favicon.ico'
  },
  contact: {
    phone: '+5517981404761',
    email: 'gustavocortezdev@gmail.com',
    whatsapp: 'https://wa.me/5517981404761'
  },
  services: [
    'Desenvolvimento Web',
    'Sites Institucionais',
    'Landing Pages',
    'Otimização SEO',
    'Design Responsivo',
    'Consultoria Digital'
  ],
  technologies: [
    'React',
    'Next.js',
    'JavaScript',
    'TypeScript',
    'HTML5',
    'CSS3',
    'TailwindCSS',
    'Node.js',
    'Git'
  ],
  education: [
    {
      institution: 'Universidade do Oeste Paulista',
      course: 'Medicina',
      status: 'Cursando',
      abbreviation: 'UNOESTE'
    },
    {
      institution: 'Universidade Federal de Santa Catarina',
      course: 'Sistemas de Informação',
      status: 'Experiência Acadêmica',
      abbreviation: 'UFSC'
    }
  ]
}

export const generatePageMetadata = (page: {
  title?: string
  description?: string
  path?: string
  image?: string
}) => {
  const fullTitle = page.title 
    ? `${page.title} | ${seoConfig.siteName}`
    : seoConfig.title
  
  const fullUrl = page.path 
    ? `${seoConfig.baseUrl}${page.path}`
    : seoConfig.baseUrl
    
  const imageUrl = page.image 
    ? `${seoConfig.baseUrl}${page.image}`
    : `${seoConfig.baseUrl}${seoConfig.images.ogImage}`

  return {
    title: fullTitle,
    description: page.description || seoConfig.description,
    openGraph: {
      title: fullTitle,
      description: page.description || seoConfig.description,
      url: fullUrl,
      images: [{ url: imageUrl }],
    },
    twitter: {
      title: fullTitle,
      description: page.description || seoConfig.description,
      images: [imageUrl],
    },
    alternates: {
      canonical: fullUrl,
    },
  }
}