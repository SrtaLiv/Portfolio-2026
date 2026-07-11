export const siteData = {
  nav: {
    name: "Olivia Todesco",
    links: [
      { label: "Versiones", href: "#versions" },
      { label: "Proyectos", href: "#projects" },
      { label: "Recorrido", href: "#journey" },
      { label: "Sobre mí", href: "#about" },
      { label: "Contenido", href: "#content" },
    ],
    cta: { label: "Hablemos", href: "https://calendly.com/nebulasolutions23/30min" },
  },

  hero: {
    eyebrow: "Full Stack Developer · UX/UI Designer · Co-founder",
    title: ["Construyo productos", "que conectan personas."],
    description:
      "Soy Olivia Todesco. Desarrollo software, diseño interfaces, fundé Nebula Solutions y comparto lo que aprendo. Todo es parte del mismo sistema.",
    primaryCta: { text: "Explorar mi universo", href: "#versions" },
    secondaryCta: { text: "Ver proyectos en Nebula", href: "https://nebulasolutions.com.ar/" },
  },

  manifesto: {
    lines: ["Software.", "Productos.", "Empresas.", "Historias.", "Todo conectado."],
  },

  versions: {
    title: "Elegí una versión de mí",
    subtitle: "Cada una es una puerta a un universo diferente.",
    items: [
      {
        id: "developer",
        emoji: "💻",
        title: "Full Stack Developer",
        short: "Código que resuelve problemas de verdad.",
        description: [
          "No escribo código por escribir. Me interesa entender el negocio, diseñar la mejor solución y convertir una idea en un producto escalable.",
          "Disfruto del proceso de pasar de cero a algo que funciona, se entiende y puede crecer.",
        ],
        tags: ["Laravel", "React", "Next.js", "Tailwind", "Node", "MySQL", "AWS", "Docker"],
        cta: { text: "Ver proyectos", href: "#projects" },
      },
      {
        id: "cofounder",
        emoji: "🚀",
        title: "Co-founder de Nebula Solutions",
        short: "Construyo empresas, no solo productos.",
        description: [
          "En Nebula ayudamos a startups y empresas a transformar procesos en software. Desde MVPs hasta plataformas usadas por miles de usuarios.",
          "Aprendí a liderar equipos, tomar decisiones técnicas y comerciales, y crecer un negocio de forma sostenible.",
        ],
        metrics: [
          "+20 proyectos entregados",
          "Clientes en Argentina, España, Francia y EE.UU.",
          "Equipo de 4 fullstack developers",
        ],
        cta: { text: "Conocer Nebula", href: "https://nebulasolutions.com.ar/" },
      },
      {
        id: "designer",
        emoji: "🎨",
        title: "Diseñadora UX/UI",
        short: "Interfaces pensadas primero en personas.",
        description: [
          "El código importa, pero la experiencia también. Diseño pantallas que sean intuitivas antes de ser lindas.",
          "Mezclo herramientas de diseño con criterio técnico: lo que diseño puedo construirlo, y lo que construyo lo diseño pensando en quien lo va a usar.",
        ],
        tags: ["Figma", "Design Systems", "Wireframes", "Prototipos", "User Flows"],
        cta: { text: "Ver proyectos", href: "#projects" },
      },
      {
        id: "creator",
        emoji: "🎥",
        title: "Creadora de contenido",
        short: "Enseñar obliga a entender mejor.",
        description: [
          "Comparto programación, inteligencia artificial y desarrollo de productos para miles de personas.",
          "Crear contenido no es solo marketing: es una forma de aprender en público, conectar con otros builders y construir una marca personal honesta.",
        ],
        tags: ["Instagram", "YouTube", "Charlas", "Colaboraciones"],
        cta: { text: "Ver contenido", href: "https://www.youtube.com/@oliviatodesco" },
      },
      {
        id: "entrepreneur",
        emoji: "🧭",
        title: "Emprendedora",
        short: "Siempre construyendo la siguiente idea.",
        description: [
          "Además de Nebula, trabajo en productos propios. Me gusta identificar problemas reales, validar soluciones rápido y lanzar.",
          "Actuar me enseñó a comunicar, escuchar y contar historias. Hoy uso eso para presentar ideas, vender proyectos y hablar de tecnología de forma más humana.",
        ],
        tags: ["Producto", "Validación", "Lanzamiento", "Storytelling"],
        cta: { text: "Ver recorrido", href: "#journey" },
      },
    ],
  },

  connection: {
    title: "Cómo se conecta todo",
    subtitle: "No son habilidades separadas. Es un ecosistema.",
    steps: [
      { label: "Contenido", note: "Aprender en público" },
      { label: "Marca Personal", note: "Conectar con la comunidad" },
      { label: "Nebula Solutions", note: "Convertir conocimiento en productos" },
      { label: "Clientes", note: "Resolver problemas reales" },
      { label: "Nuevos productos", note: "Reinvertir lo aprendido" },
    ],
    paragraph:
      "Cada parte alimenta a la siguiente. Crear contenido me obliga a aprender. Aprender mejora mi trabajo en Nebula. Nebula me expone a problemas reales. Esos problemas se convierten en experiencia. Y esa experiencia vuelve a alimentar todo lo demás.",
  },

  projects: {
    title: "Proyectos seleccionados",
    subtitle: "Casos reales construidos con Nebula Solutions.",
    cta: { text: "Ver todos en Nebula", href: "https://nebulasolutions.com.ar/" },
    items: [
      {
        id: "my-office-taxes",
        name: "My Office Taxes",
        role: "Plataforma de firmas digitales",
        country: "Estados Unidos",
        budget: "13.000 USD",
        duration: "3–4 meses",
        stack: ["Laravel", "Inertia", "Tailwind", "MySQL", "Stripe", "Square"],
        team: "Santiago",
        problem: "Una firma de taxes necesitaba digitalizar firmas, documentos y comunicación con clientes.",
        solution:
          "Construimos un sistema completo con firmas digitales verificables, chat en tiempo real, facturación automatizada y flujos de trabajo del personal.",
        impact:
          "Una plataforma moderna y responsive que centraliza documentos, tareas y pagos en un solo lugar.",
        learnings:
          "Aprendí a diseñar flujos complejos manteniendo la interfaz simple, y a equilibrar seguridad con facilidad de uso.",
      },
      {
        id: "epsilon",
        name: "Epsilon",
        role: "Lector de anime y manga",
        country: "Francia",
        budget: "7.000 USD",
        duration: "En evolución",
        stack: ["Laravel", "Inertia", "Tailwind", "MySQL"],
        team: "Santiago",
        problem: "Crear una plataforma moderna para visualizar anime y manga con miles de capítulos.",
        solution:
          "Implementamos scraping de más de 100.000 capítulos, favoritos, historial, recomendaciones, contenido por suscripción y métricas internas.",
        impact:
          "Aplicación responsive con diseño UX/UI propio, seguridad avanzada y escalabilidad para miles de usuarios.",
        learnings:
          "Mejoré mi comprensión de rendimiento a escala, scraping ético y arquitectura de contenido masivo.",
        link: "https://epsilonsoft.to/",
      },
      {
        id: "fitness-pwa",
        name: "Plataforma Fitness",
        role: "PWA de entrenamiento y nutrición",
        country: "España",
        budget: "8.500 USD",
        duration: "3 meses",
        stack: ["Laravel", "Inertia", "MySQL"],
        team: "Olivia, Tomás, Luciano, Santiago",
        design: "Olivia",
        problem: "Un cliente con gran volumen de usuarios necesitaba gestionar planes de entrenamiento y nutrición.",
        solution:
          "Construimos roles de admin, coach y cliente, con flujos claros para asignar planes, seguir progresos y escalar la operación.",
        impact:
          "Una PWA funcional y escalable que permite administrar usuarios, planes y contenido desde un panel central.",
        learnings:
          "Entendí cómo diseñar para usuarios recurrentes y cómo estructurar permisos sin complicar la experiencia.",
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
        problem: "Una empresa familiar de turismo necesitaba vender excursiones online con cupos, horarios y pagos.",
        solution:
          "Desarrollamos carrito de compras, multilenguaje, multimoneda, pagos con Mercado Pago y PayPal, y confirmaciones por email y WhatsApp.",
        impact:
          "Panel admin con exportaciones, gestión de fechas y analíticas. Sistema listo para operar temporadas completas.",
        learnings:
          "Aprendí a priorizar funcionalidades según el contexto del negocio y a diseñar para operadores no técnicos.",
      },
      {
        id: "laboriosos",
        name: "Laboriosos",
        role: "Marketplace de servicios profesionales",
        country: "República Dominicana",
        budget: "6.000+ USD",
        duration: "En evolución",
        stack: ["Laravel", "Inertia", "Stripe", "MySQL"],
        team: "Nebula Solutions",
        problem: "Crear una plataforma donde profesionales paguen por publicar servicios y otros usuarios puedan contratarlos.",
        solution:
          "Implementamos perfiles con publicaciones, home, pasarela de pagos con Stripe, auditorías de seguridad y migración de servidor.",
        impact:
          "Un marketplace funcional con pagos integrados, perfiles profesionales y administración de publicaciones.",
        learnings:
          "Mejoré mi visión sobre modelos de negocio marketplace, flujos de pago y seguridad en transacciones.",
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
        problem: "Construir un marketplace seguro para compra/venta internacional de figuras coleccionables.",
        solution:
          "Diseñamos catálogo, checkout con Stripe, sistema de escrow, bandeja de pedidos por país, claims manuales y flujo formal de disputas.",
        impact:
          "Una plataforma preparada para escalar a Fase II con logística, etiquetas y tarifas fijas por país.",
        learnings:
          "Aprendí sobre complejidad de pagos internacionales, resolución de disputas y diseño de sistemas de confianza.",
      },
    ],
  },

  timeline: {
    title: "Mi recorrido",
    subtitle: "Hitos que explican cómo llegué hasta acá.",
    items: [
      { year: "2021", label: "Empiezo a programar.", note: "El primer contacto con código cambia todo." },
      { year: "2022", label: "Creo contenido.", note: "Aprender en público se convierte en mi forma de crecer." },
      { year: "2025", label: "Fundo Nebula Solutions.", note: "Junto a Santiago, Tomás y Luciano armamos el equipo." },
      { year: "2025", label: "Primer cliente internacional.", note: "Pasamos de proyectos locales a trabajar con empresas del exterior." },
      { year: "2025", label: "Proyecto de 13.000 USD.", note: "My Office Taxes: el proyecto más grande hasta ese momento." },
      { year: "2026", label: "Lanzamiento de Tourly.", note: "Mi primer producto propio en el mercado." },
    ],
  },

  about: {
    title: "Sobre mí",
    quote: "La tecnología sirve cuando mejora la vida de alguien.",
    paragraphs: [
      "Siempre me gustó construir. Antes eran historias. Después páginas web. Hoy son empresas, productos y contenido.",
      "No creo en separar el código del diseño, el producto del negocio, o la técnica de la comunicación. Cuanto más conectadas están esas partes, mejor resultado se obtiene.",
      "Me interesa entender el problema antes de elegir la solución. Trabajar con founders, CEOs y equipos que quieren construir algo real. Y aprender algo nuevo en cada proyecto.",
    ],
  },

  content: {
    title: "También comparto lo que aprendo",
    subtitle: "Contenido sobre programación, producto, diseño y el día a día de construir cosas.",
  },

  contact: {
    title: "Si llegaste hasta acá, probablemente tengamos mucho de qué hablar.",
    subtitle: "Si tenés una idea, un negocio o simplemente querés charlar sobre tecnología, escribime.",
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
