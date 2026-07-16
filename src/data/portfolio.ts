export const siteData = {
  nav: {
    name: "Olivia Todesco",
    links: [
      { label: "Proyectos", href: "#projects" },
      { label: "Sobre mí", href: "#about" },
      { label: "Contacto", href: "#contact" },
    ],
    cta: { label: "Hablemos", href: "https://calendly.com/nebulasolutions23/30min?month=2026-04&date=2026-04-21" },
  },

  hero: {
    eyebrow: "Full Stack Developer · UX/UI Designer · Co-founder",
    title: ["Construyo productos", "que conectan personas."],
    description:
      "Soy Olivia Todesco. Desarrollo software, diseño interfaces y fundé Nebula junto a Santiago. Todo es parte del mismo sistema.",
    primaryCta: { text: "Conocer mi historia", href: "#about" },
    secondaryCta: { text: "Ver proyectos en Nebula", href: "https://nebulasolutions.com.ar/" },
  },

  manifesto: {
    lines: ["Software.", "Productos.", "Empresas.", "Historias.", "Todo conectado."],
  },

  connection: {
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
    cta: { text: "Ver todos los proyectos", href: "https://nebulasolutions.com.ar/es/projects" },
    items: [
      {
        id: "sense-patagonia",
        name: "Sense Patagonia",
        role: "Sistema de reservas turísticas",
        country: "Argentina",
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
        id: "epic-bariloche",
        name: "Epic Bariloche",
        role: "Sistema de reservas turísticas",
        country: "Argentina",
        duration: "2 semanas",
        stack: ["Laravel", "Inertia", "MySQL"],
        team: "Olivia, Tomás, Luciano",
        problem:
          "Un operador turístico de Bariloche necesitaba vender excursiones y actividades online sin depender de WhatsApp para cada reserva.",
        solution:
          "Desarrollamos en dos semanas una plataforma de reservas con catálogo de excursiones, calendario de disponibilidad y confirmación automática por email.",
        impact:
          "Un sitio funcional y liviano que le permite al operador recibir reservas 24/7 sin intervención manual.",
        learnings:
          "Aprendí a priorizar el alcance bajo un plazo muy ajustado, enfocándome en lo esencial para lanzar rápido.",
      },
    ],
  },

  timeline: {
    title: "Mi recorrido",
    subtitle: "Hitos que explican cómo llegué hasta acá.",
    items: [
      { year: "2023", label: "Empiezo a programar.", note: "Arranco con un curso de creación de videojuegos: el primer contacto con código cambia todo." },
      { year: "2024", label: "Creo contenido.", note: "Aprender en público se convierte en mi forma de crecer." },
      { year: "2025", label: "Fundo Nebula Solutions.", note: "Junto a Santiago armamos el equipo y entregamos más de 15 proyectos en 6 países distintos." },
      { year: "2026", label: "Lanzamiento de Tourly.", note: "Seguimos con Nebula y sacamos nuestro propio SaaS de turismo." },
    ],
  },

  about: {
    title: "Sobre mí",
    quote: "La tecnología sirve cuando mejora la vida de alguien.",
    intro: [
      "Siempre me gustó construir. Antes eran historias. Después páginas web. Hoy son empresas, productos y contenido.",
      "No creo en separar el código del diseño, el producto del negocio, o la técnica de la comunicación. Cuanto más conectadas están esas partes, mejor resultado se obtiene.",
    ],
    story: {
      title: "Cómo llegué hasta acá",
      paragraphs: [
        "Mi camino empezó lejos del código. De chica me gustaba crear historias, entender a las personas y encontrar formas de comunicar ideas. Esa curiosidad terminó llevándome a la tecnología, donde descubrí que construir productos digitales no era tan diferente: se trata de entender un problema, diseñar una solución y contarla de forma clara.",
        "En 2023 escribí mis primeras líneas de código, arrancando con un curso de creación de videojuegos. No fue amor a primera vista, pero sí una fascinación creciente: me di cuenta de que podía crear cosas que otras personas usaban de verdad.",
        "Un año después, en 2024, empecé a compartir lo que aprendía en redes. Enseñar me obligó a entender mejor, a simplificar conceptos y a conectar con una comunidad de personas que también estaban construyendo. Ese hábito de aprender en público se convirtió en el motor de todo lo que vino después.",
        "En 2025, junto a Santiago, fundamos Nebula Solutions. Ese mismo año entregamos más de 15 proyectos en 6 países distintos, transformando procesos de startups y empresas en software real.",
        "Hoy sigo programando, diseñando, liderando proyectos y creando contenido. En 2026 seguimos con Nebula y además estamos lanzando Tourly, nuestro propio SaaS de turismo, donde pongo en práctica todo lo aprendido trabajando con clientes.",
      ],
    },
    values: {
      title: "Cómo trabajo",
      items: [
        {
          title: "Entender antes de construir",
          description:
            "No me interesa escribir código por escribir. Primero entiendo el problema, el negocio y las personas que van a usar el producto.",
        },
        {
          title: "Diseño y código van juntos",
          description:
            "Lo que diseño lo puedo construir, y lo que construyo lo diseño pensando en quien lo va a usar. No separo una disciplina de la otra.",
        },
        {
          title: "Aprender en público",
          description:
            "Crear contenido no es solo compartir lo que sé: es una forma de aprender mejor, conectar con otros builders y construir con honestidad.",
        },
        {
          title: "Pensar en escala",
          description:
            "Me gusta que las soluciones no solo funcionen hoy, sino que puedan crecer sin derrumbarse mañana.",
        },
      ],
    },
    skills: {
      title: "Herramientas y habilidades",
      categories: [
        {
          name: "Desarrollo",
          items: ["Laravel", "React", "Next.js", "TypeScript", "Node.js", "MySQL", "AWS", "Docker"],
        },
        {
          name: "Diseño",
          items: ["Figma", "Design Systems", "Wireframes", "Prototipos", "User Flows", "UX Research"],
        },
        {
          name: "Producto & Negocio",
          items: ["Discovery", "Validación", "MVP", "Storytelling", "Liderazgo de equipo", "Comunicación con clientes"],
        },
      ],
    },
    personal: {
      title: "Algunos datos",
      items: [
        { label: "Ubicación", value: "Argentina" },
        { label: "Idiomas", value: "Español e inglés" },
        { label: "Disponibilidad", value: "Abierta a proyectos y colaboraciones" },
        { label: "Rol principal", value: "Co-founder & Full Stack Developer en Nebula Solutions" },
      ],
    },
    cta: {
      title: "¿Trabajamos juntos?",
      description: "Si tenés una idea, un negocio o simplemente querés charlar sobre tecnología, escribime.",
      button: { text: "Agendar una llamada", href: "https://calendly.com/nebulasolutions23/30min?month=2026-04&date=2026-04-21" },
    },
  },

  content: {
    title: "También comparto lo que aprendo",
    subtitle: "Contenido sobre programación, producto, diseño y el día a día de construir cosas.",
  },

  themeContent: {
    creative: {
      eyebrow: "Modo diseñadora",
      processTitle: "Cómo se conecta todo",
      processSubtitle: "No son habilidades separadas. Es un ecosistema.",
      toolsTitle: "Con qué trabajo",
      tools: ["Figma", "CapCut", "Canva", "Adobe Premiere", "Notion"],
      helpTitle: "En qué puedo ayudarte",
      help: [
        {
          title: "UX/UI",
          description: "Diseño interfaces claras, usables y con identidad propia.",
        },
        {
          title: "Portfolio",
          description: "Armamos tu portfolio o el de tu marca personal.",
        },
        {
          title: "Colaboraciones con marcas",
          description: "Contenido y campañas pensadas para conectar de verdad.",
        },
      ],
    },
    tech: {
      eyebrow: "Modo developer",
      processTitle: "Cómo se conecta el stack",
      processSubtitle: "No son piezas sueltas: es un pipeline completo.",
      toolsTitle: "Stack",
      tools: ["VS Code", "Claude", "Laravel", "React", "PHP", "Inertia", "MySQL", "PostgreSQL"],
      helpTitle: "En qué puedo ayudarte",
      help: [
        {
          title: "MVP",
          description: "De cero a producto funcional, listo para validar.",
        },
        {
          title: "Proyecto a medida",
          description: "Software hecho para tu negocio, no una plantilla genérica.",
        },
        {
          title: "Integraciones y APIs",
          description: "Conecto tu producto con pagos, terceros y automatizaciones.",
        },
      ],
    },
    corporate: {
      eyebrow: "Modo ejecutiva",
      processTitle: "Cómo trabajo",
      processSubtitle: "Un proceso simple, pensado para escalar.",
      toolsTitle: "Con qué trabajo",
      tools: ["Comunicación clara", "Google Meet", "Habilidades blandas", "Gestión de equipos", "Toma de decisiones"],
      helpTitle: "En qué puedo ayudarte",
      help: [
        {
          title: "Consultoría de producto y tech",
          description: "Decisiones de negocio y tecnología alineadas.",
        },
        {
          title: "Liderazgo de equipos",
          description: "Armado y gestión de equipos de desarrollo.",
        },
        {
          title: "Comunicación ejecutiva",
          description: "Presentaciones y pitches claros para inversores y clientes.",
        },
      ],
    },
  },

  contact: {
    title: "Si llegaste hasta acá, probablemente tengamos mucho de qué hablar.",
    subtitle: "Si tenés una idea, un negocio o simplemente querés charlar sobre tecnología, escribime.",
    email: "anaoliviatodesco@gmail.com",
    cta: { text: "Agendar una llamada", href: "https://calendly.com/nebulasolutions23/30min?month=2026-04&date=2026-04-21" },
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
