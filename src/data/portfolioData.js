// ============================================================
//  Portfolio Data — Arayan Kumar Shaw
//  All personal info, projects, experience, skills
// ============================================================

export const PERSONAL = {
  name:       'Arayan Kumar Shaw',
  email:      'arayan713321@gmail.com',
  phone:      '+91 90645 08660',
  github:     'https://github.com/Arayan713321',
  linkedin:   'https://www.linkedin.com/in/arayan-kumar-shaw-4619551a0',
  twitter:    'https://x.com/ix_my_fumes',
  instagram:  'https://www.instagram.com/ix_my_fumes',
  resumeUrl:  '/assets/images/ARAYAN KUMAR SHAW RESUME.pdf',
};

export const ROLES = [
  'Full-Stack Engineer',
  'Mobile Developer',
  'AI / GenAI Builder',
  'Shopify Developer',
];

// ── Projects ──────────────────────────────────────────────
export const PROJECTS = [
  {
    id:       '01',
    name:     'Syntrix AI',
    subtitle: 'GenAI Career Copilot',
    year:     '2025',
    tags:     ['AI', 'Full-Stack', 'Next.js'],
    badge:    'FEATURED',
    image:    '/assets/images/syntrix-ai-preview.png',
    stack:    ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'OpenAI API', 'LangChain', 'ChromaDB', 'NextAuth.js'],
    description:
      'Built a production-grade AI career assistant with ATS resume analysis, semantic job matching, AI interview generation, and conversational career guidance. Powered by RAG workflows, vector embeddings (ChromaDB), and secure Google OAuth.',
    github:   'https://github.com/Arayan713321',
    live:     null,
  },
  {
    id:       '02',
    name:     'TARS',
    subtitle: 'Real-Time Chat App',
    year:     '2024',
    tags:     ['Full-Stack', 'Real-Time', 'React'],
    badge:    null,
    image:    '/assets/images/tars-chat-preview.png',
    stack:    ['React', 'Node.js', 'Socket.io', 'MongoDB', 'JWT', 'Clerk', 'Vercel'],
    description:
      'Full-stack real-time messaging app with WebSocket communication via Socket.io, JWT + Clerk authentication, MongoDB storage, and auto-deployments on Vercel.',
    github:   'https://github.com/Arayan713321',
    live:     null,
  },
  {
    id:       '03',
    name:     'Truth & Beauty US',
    subtitle: 'Live Shopify Store',
    year:     '2025',
    tags:     ['Shopify', 'E-Commerce', 'Live'],
    badge:    null,
    image:    null,
    stack:    ['Shopify', 'Liquid', 'Eurus Theme', 'CSS', 'Core Web Vitals'],
    description:
      'Customized Eurus Theme for a live US skincare brand. Built 4 custom Liquid sections with responsive typography (CSS clamp), improved LCP with lazy loading and responsive srcset.',
    github:   null,
    live:     'https://truthandbeautyus.com',
  },
  {
    id:       '04',
    name:     'Flutter App Suite',
    subtitle: 'Production Mobile Apps',
    year:     '2024',
    tags:     ['Mobile', 'Flutter', 'Android'],
    badge:    null,
    image:    null,
    stack:    ['Flutter', 'Dart', 'Clean Architecture', 'Local Storage', 'Android'],
    description:
      'Multiple production Flutter apps including task managers, journaling, and event management. Offline storage, clean architecture, optimized state management.',
    github:   'https://github.com/Arayan713321',
    live:     null,
  },
];

// ── Experience (work only — 3 items) ──────────────────────
export const EXPERIENCE = [
  {
    role:     'Shopify Developer',
    company:  'Pure Cosmeceuticals Pvt. Ltd.',
    period:   'Oct 2025 – May 2026',
    type:     'Remote',
    bullets:  [
      'Built production Shopify storefront with custom Liquid sections and metafield-driven product pages',
      'Integrated third-party Shopify apps (review, marketing, analytics) without breaking theme layout',
      'Improved mobile LCP scores by refactoring Liquid templates and adding lazy loading to product images',
    ],
  },
  {
    role:     'Mobile App Developer Intern',
    company:  'Celebal Technologies (CSI)',
    period:   'May 2025 – Jul 2025',
    type:     'Remote',
    bullets:  [
      'Developed reusable UI components in Flutter and React Native across 4 feature screens',
      'Set up Firebase Authentication, Firestore, and Cloud Messaging for push notifications in a 2-week sprint',
    ],
  },
  {
    role:     'Flutter Developer Intern',
    company:  'Tamizhan Skills',
    period:   'Jun 2025',
    type:     'Remote',
    bullets:  [
      'Reduced app startup time ~1.5s by reorganizing widget tree, compressing images, async FutureBuilder loading',
      'Restructured codebase into UI/logic/data layers following clean architecture principles',
    ],
  },
];

// ── Education (separate from work experience) ─────────────
export const EDUCATION = {
  degree:       'B.Tech — Computer Science and Engineering',
  institution:  'University of Engineering and Management, Jaipur',
  period:       '2022 – 2026',
  cgpa:         '7.5',
  location:     'Jaipur, India',
  certifications: [
    'AI Fluency for Students',
    'Introduction to Agent Skills',
    'AI Fluency: Framework & Foundations',
  ],
};

// ── Skills ────────────────────────────────────────────────
export const SKILLS_MARQUEE_ROW1 = [
  'JavaScript', 'TypeScript', 'Dart', 'React.js', 'Next.js',
  'React Native', 'Flutter', 'Node.js', 'Express.js', 'Python',
];

export const SKILLS_MARQUEE_ROW2 = [
  'OpenAI API', 'LangChain', 'ChromaDB', 'Firebase', 'MongoDB',
  'Tailwind CSS', 'Shopify Liquid', 'Socket.io', 'Vercel', 'Supabase',
];

export const SKILL_CATEGORIES = [
  {
    title:  'Mobile Development',
    icon:   '📱',
    skills: ['React Native', 'Flutter', 'Expo', 'Dart', 'Android Studio'],
  },
  {
    title:  'Frontend',
    icon:   '🖥',
    skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'],
  },
  {
    title:  'AI / GenAI',
    icon:   '🤖',
    skills: ['OpenAI API', 'LangChain', 'ChromaDB', 'Gemini API', 'RAG'],
  },
  {
    title:  'Backend',
    icon:   '⚙️',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'Socket.io', 'Python'],
  },
  {
    title:  'CMS / Shopify',
    icon:   '🛒',
    skills: ['Shopify', 'Liquid', 'Eurus Theme', 'Metafields', 'Core Web Vitals'],
  },
  {
    title:  'Cloud & Tools',
    icon:   '☁️',
    skills: ['Firebase', 'MongoDB', 'Vercel', 'Git', 'Docker'],
  },
];

// ── About stats ──────────────────────────────────────────
export const STATS = [
  { value: 3,   suffix: '+', label: 'Years Coding' },
  { value: 10,  suffix: '+', label: 'Projects Shipped' },
  { value: 3,   suffix: '',  label: 'Internships' },
];

export const ABOUT_TICKER = [
  'REACT', 'FLUTTER', 'NEXT.JS', 'NODE.JS', 'OPENAI',
  'FIREBASE', 'TYPESCRIPT', 'SHOPIFY', 'MONGODB', 'TAILWIND',
];

// ── Hero tech marquee ────────────────────────────────────
export const HERO_MARQUEE = [
  'REACT NATIVE', 'FLUTTER', 'NEXT.JS', 'NODE.JS', 'OPENAI',
  'FIREBASE', 'MONGODB', 'TAILWIND', 'SHOPIFY', 'TYPESCRIPT',
];
