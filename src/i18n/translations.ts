export type Language = "es" | "en";

const es = {
  common: {
    language: "Idioma",
  },
  nav: {
    inicio: "Inicio",
    educacion: "Educación",
    experiencia: "Experiencia",
    habilidades: "Habilidades",
    portfolio: "Portfolio",
    contacto: "Contacto",
  },
  hero: {
    greeting: "Hola, soy",
    role: "Estudiante de Ingeniería Informática • Desarrollador Web y Administrador de Sistemas",
    about:
      "Soy un estudiante apasionado por la programación, con gran interés en el desarrollo de páginas web. Me caracterizo por mi motivación constante para seguir aprendiendo y mejorar mis habilidades técnicas. Busco oportunidades que me permitan crecer profesionalmente, aportar creatividad y aplicar mis conocimientos en proyectos reales.",
    downloadCV: "Descargar CV",
    contact: "Contactar",
    portfolio: "Ver Portfolio",
    profilePhoto: "Foto de perfil",
  },
  education: {
    title: "Educación",
    subtitle: "Mi trayectoria académica.",
    items: [
      {
        degree: "CFGM - Sistemas Microinformáticos y Redes",
        institution: "Jesuïtes Bellvitge",
        period: "2021 - 2023",
        description:
          "Montaje, configuración y mantenimiento de equipos microinformáticos, periféricos y programas software. Instalación y configuración de redes locales y servicios de red.",
      },
      {
        degree: "CFGS - Desarrollo de Aplicaciones Web",
        institution: "Jesuïtes Bellvitge",
        period: "2024 - 2025",
        description:
          "Creación de aplicaciones Web utilizando diversos lenguajes de programación y plataformas de desarrollo. Diseño de contenidos gráficos y multimedia. Aplicaciones Web en entorno cliente y servidor. Desarrollo de aplicaciones interactivas con HTML5.",
      },
      {
        degree: "CFGS - Administración de Sistemas Informáticos en Red",
        institution: "Jesuïtes Bellvitge",
        period: "2025 - 2026",
        description:
          "Configuración, administración y mantenimiento de sistemas informáticos libres y propietarios, tanto cliente como en contexto servidor. Diseño e implementación de sistemas en red. Seguridad informática y alta disponibilidad de recursos en red. Gestión de bases de datos e implantación de gestores de contenidos Web.",
      },
      {
        degree: "Grado en Ingeniería Informática",
        institution: "UOC (Universidad Abierta de Cataluña)",
        period: "Septiembre 2026 - Actualmente",
        description: "Estudios universitarios de Ingeniería Informática en modalidad online.",
      },
    ],
  },
  experience: {
    title: "Experiencia Laboral",
    subtitle: "Mi trayectoria profesional.",
    items: [
      {
        title: "Prácticas de Grado Medio (SMR, Sistemas Microinformáticos y Redes)",
        company: "Jesuïtes Sant Gervasi",
        period: "Enero 2022 - Mayo 2022",
        duration: "5 meses",
        description: "Administración de equipos informáticos.",
        technologies: ["Soporte informático", "Mantenimiento de equipos"],
      },
      {
        title: "Prácticas Duales de Grado Superior (DAW, Desarrollo de Aplicaciones Web)",
        company: "GEPROM - Ingeniería de Automatización Industrial Barcelona",
        period: "Marzo 2024 - Abril 2025",
        duration: "1 año y 2 meses",
        description:
          "Soluciones que permiten integrar máquinas, personas y sistemas en entornos altamente automatizados, favoreciendo la eficiencia y la toma de decisiones basada en datos.",
        technologies: ["Legato", "LC2", "Draw.io"],
      },
      {
        title: "Prácticas de Grado Superior (ASIR, Administración de Sistemas Informáticos en Red)",
        company: "SOSMATIC - Servicios de soporte B2B i B2B2C",
        period: "Octubre 2025 - Mayo 2026",
        duration: "8 meses",
        description: "Soporte técnico de incidencias para la UOC (Universidad Abierta de Cataluña).",
        technologies: ["HelpDesk", "Soporte IT", "Atención al cliente"],
      },
    ],
  },
  skills: {
    title: "Habilidades",
    categories: [
      {
        title: "Desarrollo Web",
        skills: [
          "HTML5",
          "CSS3",
          "Tailwind CSS",
          "JavaScript",
          "TypeScript",
          "React",
          "PHP (Laravel)",
          "MySQL",
          "phpMyAdmin",
          "Git / GitHub",
          "Scrum / Sprints",
          "Documentación de proyectos",
        ],
      },
      {
        title: "Administración de Sistemas",
        skills: [
          "Servidores Linux y Windows",
          "Virtualización (VMware, VirtualBox, Docker)",
          "SSH / Acceso remoto",
          "PowerShell / Bash scripting",
          "Mantenimiento y configuración de equipos informáticos",
          "Gestión de redes: IPv4, DNS, DHCP",
        ],
      },
      {
        title: "Idiomas",
        skills: ["Castellano: Nativo", "Catalán: Nativo", "Inglés: Intermedio"],
      },
      {
        title: "Personales",
        skills: [
          "Trabajo en equipo",
          "Adaptabilidad",
          "Organización y gestión del tiempo",
          "Resolución de problemas",
          "Comunicación efectiva",
          "Autodidactismo",
          "Pensamiento analítico",
        ],
      },
    ],
  },
  portfolio: {
    title: "Portfolio",
    subtitle: "Algunos de mis proyectos más destacados",
    projects: [
      {
        title: "Minecraft Local Server App",
        description:
          "Aplicación de escritorio para gestionar servidores locales de Minecraft. Compatible con Vanilla, Paper, Spigot, Bukkit, Fabric y Forge.",
        technologies: ["JavaScript", "Electron", "Node.js"],
        liveLabel: "Ver Página Web",
        codeLabel: "Código",
      },
      {
        title: "Sospedra",
        description:
          "Proyecto de diseño y maquetación web enfocado en estilos CSS modernos y responsivos.",
        technologies: ["CSS", "HTML", "Responsive Design"],
        liveLabel: "Ver Página Web",
        codeLabel: "Código",
      },
      {
        title: "J.A.R.V.I.S",
        description:
          "Asistente virtual desarrollado en Python con funcionalidades de automatización y control de sistema.",
        technologies: ["Python", "Automatización"],
        liveLabel: "Ver Demo",
        codeLabel: "Código",
      },
    ],
  },
  contact: {
    title: "Contacto",
    subtitle: "¿Tienes un proyecto en mente? ¡Hablemos!",
    labels: {
      email: "Email",
      phone: "Teléfono",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    copy: "Copiar",
    downloadCV: "Descargar CV",
  },
  footer: {
    rights: "Todos los derechos reservados",
  },
  meta: {
    title: "Hugo Alda Cárdenas | CV y Portfolio",
    description:
      "Currículum y portfolio de Hugo Alda Cárdenas - Desarrollador Web y Administrador de Sistemas",
    ogTitle: "Hugo Alda Cárdenas - CV y Portfolio",
    ogDescription:
      "Desarrollador Web y Administrador de Sistemas. Estudiante de Ingeniería Informática en la UOC.",
  },
};

export type Translations = typeof es;

const en: Translations = {
  common: {
    language: "Language",
  },
  nav: {
    inicio: "Home",
    educacion: "Education",
    experiencia: "Experience",
    habilidades: "Skills",
    portfolio: "Portfolio",
    contacto: "Contact",
  },
  hero: {
    greeting: "Hi, I'm",
    role: "Computer Engineering Student • Web Developer & System Administrator",
    about:
      "I'm a student passionate about programming, with a strong interest in web development. I'm driven by a constant motivation to keep learning and improving my technical skills. I'm looking for opportunities that let me grow professionally, bring creativity, and apply my knowledge to real-world projects.",
    downloadCV: "Download CV",
    contact: "Contact",
    portfolio: "View Portfolio",
    profilePhoto: "Profile photo",
  },
  education: {
    title: "Education",
    subtitle: "My academic background.",
    items: [
      {
        degree: "Vocational Training (CFGM) - Microcomputer Systems and Networks",
        institution: "Jesuïtes Bellvitge",
        period: "2021 - 2023",
        description:
          "Assembly, configuration and maintenance of microcomputers, peripherals and software. Installation and configuration of local area networks and network services.",
      },
      {
        degree: "Vocational Training (CFGS) - Web Application Development",
        institution: "Jesuïtes Bellvitge",
        period: "2024 - 2025",
        description:
          "Creating web applications using various programming languages and development platforms. Design of graphic and multimedia content. Client-side and server-side web applications. Development of interactive applications with HTML5.",
      },
      {
        degree: "Vocational Training (CFGS) - Computer Network Systems Administration",
        institution: "Jesuïtes Bellvitge",
        period: "2025 - 2026",
        description:
          "Configuration, administration and maintenance of open-source and proprietary systems, both client-side and server-side. Design and implementation of network systems. IT security and high availability of network resources. Database management and web content management system deployment.",
      },
      {
        degree: "Bachelor's Degree in Computer Engineering",
        institution: "UOC (Open University of Catalonia)",
        period: "September 2026 - Present",
        description: "Online university studies in Computer Engineering.",
      },
    ],
  },
  experience: {
    title: "Work Experience",
    subtitle: "My professional journey.",
    items: [
      {
        title: "Vocational Training Internship (SMR, Microcomputer Systems and Networks)",
        company: "Jesuïtes Sant Gervasi",
        period: "January 2022 - May 2022",
        duration: "5 months",
        description: "Computer equipment administration.",
        technologies: ["IT Support", "Equipment Maintenance"],
      },
      {
        title: "Dual Vocational Training Internship (DAW, Web Application Development)",
        company: "GEPROM - Industrial Automation Engineering Barcelona",
        period: "March 2024 - April 2025",
        duration: "1 year and 2 months",
        description:
          "Solutions that integrate machines, people and systems in highly automated environments, improving efficiency and data-driven decision making.",
        technologies: ["Legato", "LC2", "Draw.io"],
      },
      {
        title: "Vocational Training Internship (ASIR, Computer Network Systems Administration)",
        company: "SOSMATIC - B2B and B2B2C support services",
        period: "October 2025 - May 2026",
        duration: "8 months",
        description: "Technical support for incident resolution for the UOC (Open University of Catalonia).",
        technologies: ["HelpDesk", "IT Support", "Customer Service"],
      },
    ],
  },
  skills: {
    title: "Skills",
    categories: [
      {
        title: "Web Development",
        skills: [
          "HTML5",
          "CSS3",
          "Tailwind CSS",
          "JavaScript",
          "TypeScript",
          "React",
          "PHP (Laravel)",
          "MySQL",
          "phpMyAdmin",
          "Git / GitHub",
          "Scrum / Sprints",
          "Project Documentation",
        ],
      },
      {
        title: "System Administration",
        skills: [
          "Linux and Windows Servers",
          "Virtualization (VMware, VirtualBox, Docker)",
          "SSH / Remote Access",
          "PowerShell / Bash scripting",
          "Computer equipment maintenance and configuration",
          "Network management: IPv4, DNS, DHCP",
        ],
      },
      {
        title: "Languages",
        skills: ["Spanish: Native", "Catalan: Native", "English: Intermediate"],
      },
      {
        title: "Soft Skills",
        skills: [
          "Teamwork",
          "Adaptability",
          "Organization and time management",
          "Problem solving",
          "Effective communication",
          "Self-taught",
          "Analytical thinking",
        ],
      },
    ],
  },
  portfolio: {
    title: "Portfolio",
    subtitle: "Some of my most notable projects",
    projects: [
      {
        title: "Minecraft Local Server App",
        description:
          "Desktop application for managing local Minecraft servers. Compatible with Vanilla, Paper, Spigot, Bukkit, Fabric and Forge.",
        technologies: ["JavaScript", "Electron", "Node.js"],
        liveLabel: "Visit Website",
        codeLabel: "Code",
      },
      {
        title: "Sospedra",
        description:
          "Web design and markup project focused on modern, responsive CSS techniques.",
        technologies: ["CSS", "HTML", "Responsive Design"],
        liveLabel: "Visit Website",
        codeLabel: "Code",
      },
      {
        title: "J.A.R.V.I.S",
        description:
          "Virtual assistant developed in Python with system automation and control features.",
        technologies: ["Python", "Automation"],
        liveLabel: "View Demo",
        codeLabel: "Code",
      },
    ],
  },
  contact: {
    title: "Contact",
    subtitle: "Have a project in mind? Let's talk!",
    labels: {
      email: "Email",
      phone: "Phone",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    copy: "Copy",
    downloadCV: "Download CV",
  },
  footer: {
    rights: "All rights reserved",
  },
  meta: {
    title: "Hugo Alda Cárdenas | CV & Portfolio",
    description:
      "Résumé and portfolio of Hugo Alda Cárdenas - Web Developer & System Administrator",
    ogTitle: "Hugo Alda Cárdenas - CV & Portfolio",
    ogDescription:
      "Web Developer & System Administrator. Computer Engineering student at UOC.",
  },
};

export const translations: Record<Language, Translations> = { es, en };
