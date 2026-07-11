export const siteData = {
  hero: {
    eyebrow: "Olivia Todesco",
    title: ["No hago una sola cosa.", "Construyo productos, empresas e historias."],
    subtitle: [
      "Soy Olivia Todesco.",
      "Desarrollo software, fundé Nebula Solutions, creo contenido sobre programación, diseño productos digitales y hago actuación.",
      "Todo parece distinto.",
      "Hasta que entendés que todas esas habilidades terminan construyendo mejores productos.",
    ],
    primaryCta: { text: "Explorar mi universo", href: "#versions" },
    secondaryCta: { text: "Ver proyectos", href: "#projects" },
  },

  versions: {
    title: "Elegí una versión de mí",
    subtitle: "Cada habilidad mejora las demás.",
    items: [
      {
        id: "programmer",
        emoji: "💻",
        title: "Programadora",
        short: "Construyo software que resuelve problemas reales.",
        description: [
          "No me interesa escribir código por escribir.",
          "Me interesa entender el negocio, diseñar la mejor solución y convertir una idea en un producto escalable.",
        ],
        tags: ["Laravel", "React", "Next.js", "Tailwind", "Node", "MySQL", "AWS", "Docker"],
        cta: { text: "Ver proyectos →", href: "#projects" },
      },
      {
        id: "ceo",
        emoji: "🚀",
        title: "CEO de Nebula Solutions",
        short: "No solo desarrollo productos. También construyo empresas.",
        description: [
          "En Nebula Solutions ayudamos a startups y empresas a transformar procesos en software.",
          "Desde MVPs hasta plataformas utilizadas por miles de usuarios.",
        ],
        metrics: [
          "+20 proyectos",
          "Clientes internacionales",
          "Argentina • España • Francia • Estados Unidos",
        ],
        cta: { text: "Conocer Nebula →", href: "https://nebulasolutions.com.ar/" },
      },
      {
        id: "creator",
        emoji: "🎥",
        title: "Creadora de contenido",
        short: "Enseñar también forma parte de mi trabajo.",
        description: [
          "Comparto programación, inteligencia artificial y desarrollo de productos para miles de personas.",
          "No solo porque me gusta enseñar. Porque explicar obliga a entender mejor.",
        ],
        tags: ["Instagram", "YouTube", "Charlas", "Colaboraciones", "Marcas"],
        cta: { text: "Ver contenido →", href: "https://www.youtube.com/@oliviatodesco" },
      },
      {
        id: "designer",
        emoji: "🎨",
        title: "Diseñadora UI/UX",
        short: "El código importa. La experiencia también.",
        description: [
          "Diseño interfaces pensando primero en las personas.",
          "Cada pantalla tiene que ser intuitiva antes de ser linda.",
        ],
        tags: ["Figma", "Design Systems", "Wireframes", "Antes / Después"],
        cta: { text: "Ver diseños →", href: "#projects" },
      },
      {
        id: "actress",
        emoji: "🎭",
        title: "Actriz",
        short: "Aprender a comunicar cambió mi forma de crear productos.",
        description: [
          "La actuación me enseñó algo que ningún framework enseña.",
          "Escuchar. Observar. Contar historias.",
          "Hoy aplico eso para presentar ideas, vender proyectos y comunicar tecnología de una forma más humana.",
        ],
        cta: { text: "Ver más →", href: "#about" },
      },
    ],
  },

  connection: {
    title: "Cómo se conecta todo",
    subtitle: "Nada de esto está separado.",
    steps: [
      "Actuación",
      "Comunicación",
      "Contenido",
      "Marca Personal",
      "Nebula",
      "Software",
      "Productos",
    ],
    paragraphs: [
      "Cada habilidad potencia a las demás.",
      "Diseñar me hace mejor programadora. Programar me hace mejor CEO. La actuación mejora mi comunicación. Crear contenido me obliga a aprender constantemente.",
      "Y todo eso termina en mejores productos.",
    ],
  },

  projects: {
    title: "Proyectos",
    subtitle: "Casos reales construidos con Nebula Solutions.",
    items: [
      {
        id: "my-office-taxes",
        name: "My Office Taxes",
        role: "Plataforma de Firmas Digitales",
        country: "Estados Unidos",
        budget: "13.000 USD",
        duration: "3–4 meses",
        stack: ["Laravel", "Inertia", "Tailwind", "MySQL", "Stripe", "Square"],
        team: "Santiago",
        problem:
          "Una firma de taxes necesitaba digitalizar la gestión documental, firmas y comunicación interna con clientes.",
        process:
          "Diseñamos y desarrollamos un sistema completo con firmas digitales verificables, chat en tiempo real, facturación automatizada y flujos de trabajo del personal.",
        result:
          "Una plataforma moderna y responsive que centraliza documentos, tareas y pagos en un solo lugar.",
        link: "#",
      },
      {
        id: "epsilon",
        name: "Epsilon",
        role: "Lector de Anime y Manga",
        country: "Francia",
        budget: "7.000 USD",
        duration: "En evolución",
        stack: ["Laravel", "Inertia", "Tailwind", "MySQL"],
        team: "Santiago",
        problem:
          "Crear una plataforma moderna para visualizar anime y manga con miles de capítulos y funcionalidades avanzadas.",
        process:
          "Implementamos scraping de más de 100.000 capítulos, sistema de favoritos, historial, recomendaciones, contenido por suscripción y métricas internas.",
        result:
          "Aplicación totalmente responsive con diseño UX/UI propio, seguridad avanzada y escalabilidad para miles de usuarios.",
        link: "https://epsilonsoft.to/",
      },
      {
        id: "fitness-pwa",
        name: "Plataforma Fitness PWA",
        role: "Gestión de entrenamiento y nutrición",
        country: "España",
        budget: "8.500 USD",
        duration: "3 meses",
        stack: ["Laravel", "Inertia", "MySQL"],
        team: "Olivia, Tomás, Luciano, Santiago",
        design: "Olivia",
        problem:
          "Un cliente con gran volumen de usuarios necesitaba una PWA para gestionar planes de entrenamiento y nutrición.",
        process:
          "Construimos roles de admin, coach y cliente, con flujos claros para asignar planes, seguir progresos y escalar la operación.",
        result:
          "Una PWA funcional y escalable que permite administrar usuarios, planes y contenido desde un panel central.",
        link: "#",
      },
      {
        id: "sense-patagonia",
        name: "Sense Patagonia",
        role: "Sistema de reservas turísticas",
        country: "Argentina",
        budget: "1.400 USD",
        duration: "4 meses",
        stack: ["Laravel", "Inertia", "MySQL"],
        team: "Olivia, Tomás, Luciano",
        design: "Olivia + dos diseñadores externos",
        problem:
          "Una empresa familiar de turismo necesitaba vender excursiones online con cupos, horarios y pagos.",
        process:
          "Desarrollamos carrito de compras, multilenguaje (3 idiomas), multimoneda (ARS/USD), pagos con Mercado Pago y PayPal, y confirmaciones por email y WhatsApp.",
        result:
          "Panel admin con exportaciones, gestión de fechas y analíticas. Sistema listo para operar temporadas completas.",
        link: "#",
      },
      {
        id: "laboriosos",
        name: "Laboriosos",
        role: "Plataforma de servicios profesionales",
        country: "República Dominicana",
        budget: "6.000+ USD",
        duration: "En evolución",
        stack: ["Laravel", "Inertia", "Stripe", "MySQL"],
        team: "Nebula Solutions",
        problem:
          "Crear una plataforma donde profesionales paguen por publicar servicios y otros usuarios puedan contratarlos.",
        process:
          "Implementamos perfiles con publicaciones, home, pasarela de pagos con Stripe, auditorías de seguridad y migración de servidor.",
        result:
          "Un marketplace funcional con pagos integrados, perfiles profesionales y administración de publicaciones.",
        link: "#",
      },
      {
        id: "figuras",
        name: "Figuras",
        role: "Marketplace de figuras coleccionables",
        country: "Internacional",
        budget: "20.000 USD",
        duration: "2026",
        stack: ["Laravel", "Inertia", "Tailwind", "MySQL", "Stripe"],
        team: "Santiago",
        problem:
          "Construir un marketplace seguro para compra/venta de figuras coleccionables con pagos internacionales y resolución de disputas.",
        process:
          "Diseñamos catálogo, checkout con Stripe, sistema de escrow, bandeja de pedidos por país, claims manuales, registro de eventos y flujo formal de disputas.",
        result:
          "Una plataforma preparada para escalar a Fase II con logística, etiquetas y tarifas fijas por país.",
        link: "#",
      },
    ],
  },

  timeline: {
    title: "Mi recorrido",
    items: [
      { year: "2021", label: "Empiezo programación." },
      { year: "2022", label: "Primeros clientes." },
      { year: "2023", label: "Creo contenido." },
      { year: "2025", label: "Fundo Nebula Solutions." },
      { year: "2025", label: "Clientes internacionales." },
      { year: "2026", label: "Hoy." },
    ],
  },

  about: {
    title: "Sobre mí",
    paragraphs: [
      "Siempre me gustó construir.",
      "Antes eran historias. Después páginas web. Hoy son empresas, productos y contenido.",
      "Creo que la tecnología sirve cuando mejora la vida de alguien. Y esa es la idea detrás de todo lo que hago.",
    ],
  },

  contact: {
    title: "¿Construimos algo juntos?",
    subtitle:
      "Si tenés una idea, un negocio o un producto que querés llevar al siguiente nivel, hablemos.",
    cta: { text: "Agendar una llamada", href: "https://calendly.com/nebulasolutions23/30min" },
    social: [
      { name: "Instagram", href: "https://www.instagram.com/oliviatodesco/" },
      { name: "LinkedIn", href: "https://www.linkedin.com/in/anaoliviatodesco/" },
      { name: "YouTube", href: "https://www.youtube.com/@oliviatodesco" },
      { name: "GitHub", href: "https://github.com/SrtaLiv" },
      { name: "Nebula", href: "https://nebulasolutions.com.ar/" },
    ],
  },
};

export type SiteData = typeof siteData;
