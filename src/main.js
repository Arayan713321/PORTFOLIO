// ===================================
// MAIN APPLICATION LOGIC
// ===================================

// Import modules
import splashScreen from './splash.js';

// ===== Data =====

const projectsData = [
  {
    title: 'SynTrix AI',
    status: 'Production Ready',
    problem: 'Scalable Multi-Agent AI Orchestration Suite',
    description: 'An enterprise-grade SaaS platform enabling developers to deploy autonomous AI agents, orchestrate complex LLM chains, and expose secure REST API endpoints with sub-100ms latency.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'OpenAI API', 'LangChain', 'TailwindCSS'],
    links: [
      { label: 'Live Preview', url: 'https://github.com/Arayan713321', icon: 'fas fa-play-circle', type: 'preview' },
      { label: 'Source Code', url: 'https://github.com/Arayan713321', icon: 'fab fa-github', type: 'code' }
    ],
    image: '/assets/images/code-bg.jpg'
  },
  {
    title: 'HealthMate AI Vision',
    status: 'Featured Mobile',
    problem: 'AI-Powered Dietary & Medical Scan Analysis',
    description: 'A high-performance mobile application that leverages GPT-4V and custom computer vision modules to scan ingredient labels, analyze health images, and deliver real-time personalized wellness suggestions.',
    tech: ['Flutter', 'Dart', 'GPT-4V API', 'Firebase', 'TensorFlow Lite', 'State Management'],
    links: [
      { label: 'Live Preview', url: 'https://github.com/Arayan713321', icon: 'fas fa-play-circle', type: 'preview' },
      { label: 'Source Code', url: 'https://github.com/Arayan713321', icon: 'fab fa-github', type: 'code' }
    ],
    image: '/assets/images/mobile-dev-hero.jpg'
  },
  {
    title: 'Live Casino App',
    status: 'High Performance',
    problem: 'Real-Time Multiplayer Concurrency on Mobile',
    description: 'A cinematic multiplayer gaming application with WebSocket-driven low-latency player state synchronization, secure payment gateway integrations, and highly responsive micro-animations.',
    tech: ['React Native', 'TypeScript', 'WebSockets', 'Node.js', 'Redux Toolkit', 'Razorpay'],
    links: [
      { label: 'Live Preview', url: 'https://github.com/Arayan713321', icon: 'fas fa-play-circle', type: 'preview' },
      { label: 'Source Code', url: 'https://github.com/Arayan713321', icon: 'fab fa-github', type: 'code' }
    ],
    image: '/assets/images/code-bg.jpg'
  },
  {
    title: 'Lab91 Website',
    status: 'Freelance Client',
    problem: 'High-Converting Custom Shopify E-Commerce Store',
    description: 'Designed and engineered a high-conversion Shopify storefront for a VC-backed startup, leveraging custom Liquid templates, automated third-party integrations, and extreme speed optimizations.',
    tech: ['Shopify', 'Liquid', 'HTML5', 'CSS3', 'JavaScript', 'Shopify APIs', 'SEO Optimization'],
    links: [
      { label: 'Live Preview', url: 'https://www.trylab91.com/', icon: 'fas fa-play-circle', type: 'preview' }
    ],
    image: '/assets/images/flutter-react.png'
  },
  {
    title: 'Smart Expense Tracker',
    status: 'Completed',
    problem: 'Personal Finance Analytics Hub',
    description: 'A modern React Native app displaying real-time financial tracking, budget forecasting with simple regression, interactive charts, and secure local authentication.',
    tech: ['React Native', 'JavaScript', 'Firebase', 'Chart.js', 'AsyncStorage'],
    links: [
      { label: 'Live Preview', url: 'https://github.com/Arayan713321', icon: 'fas fa-play-circle', type: 'preview' },
      { label: 'Source Code', url: 'https://github.com/Arayan713321', icon: 'fab fa-github', type: 'code' }
    ],
    image: '/assets/images/code-bg.jpg'
  },
  {
    title: 'Digital Diary',
    status: 'Completed',
    problem: 'Encrypted Journaling with Offline Sync',
    description: 'A Flutter mobile application prioritizing robust offline journaling with local SQLite database encryption, biometric authentication, and automated cloud backups.',
    tech: ['Flutter', 'Dart', 'SQLite', 'Firebase Auth', 'Local Authentication'],
    links: [
      { label: 'Live Preview', url: 'https://github.com/Arayan713321', icon: 'fas fa-play-circle', type: 'preview' },
      { label: 'Source Code', url: 'https://github.com/Arayan713321', icon: 'fab fa-github', type: 'code' }
    ],
    image: '/assets/images/mobile-dev-hero.jpg'
  }
];

const experienceData = [
  {
    role: 'Freelance Software Developer',
    company: 'Self-Employed',
    date: '2024 - Present',
    description: 'Architecting and shipping production-ready mobile apps and high-performance e-commerce platforms for international startup clients.',
    achievements: [
      'Shipped 10+ custom cross-platform applications using Flutter & React Native with 100% on-time delivery.',
      'Engineered custom Shopify Liquid templates and backend app pipelines, improving store load speeds by 40% and conversion rates by 12%.',
      'Developed scalable REST APIs and serverless backends integrated with OpenAI models to automate customer onboarding.',
      'Optimized mobile app bundle sizes by 30% and introduced offline caching mechanisms utilizing SQLite and Hive.'
    ]
  },
  {
    role: 'Web Developer',
    company: 'Pure Cosmeceuticals Pvt. Ltd.',
    date: 'Aug 2025 - Present',
    description: 'Leading e-commerce architecture optimization and advanced front-end modules.',
    achievements: [
      'Optimized Shopify storefront databases and assets, resulting in a 35% reduction in bounce rate.',
      'Created custom responsive sections and reusable Liquid components for high-converting landing pages.',
      'Integrated automated analytics workflows to track real-time sales performance and marketing campaigns.',
      'Enhanced stability and conversion flow through strategic optimizations.'
    ]
  },
  {
    role: 'Mobile App Developer Intern',
    company: 'Tamizhan Skills',
    date: 'June 2025',
    description: 'Accelerated UI development and optimized mobile application load paths.',
    achievements: [
      'Boosted cross-platform app rendering performance by 35% and reduced screen load latency by 1.5s.',
      'Authored modular Flutter widgets and custom state controllers, slashing engineering UI delivery cycles by 40%.',
      'Developed comprehensive unit tests and CI/CD pipelines to guarantee code reliability and fast feature deployment.',
      'Coordinated closely with backend architects to align database designs with local app caches.'
    ]
  },
  {
    role: 'Mobile App Developer Intern',
    company: 'Celebal Technologies (CSI)',
    date: 'May - July 2025',
    description: 'Crafted reliable cross-platform modules and integrated cloud-native database services.',
    achievements: [
      'Constructed robust Flutter and React Native feature modules utilized across multiple internal projects.',
      'Enhanced app stability and uptime by 45% using Firebase authentication and offline-first Firestore storage.',
      'Accelerated API response handling and data mapping processes, resulting in a 25% drop in service integration issues.',
      'Participated in Daily Standups and Sprint Planning sessions under modern Agile workflows.'
    ]
  }
];

const skillsData = [
  {
    category: 'Mobile Development',
    icon: 'fas fa-mobile-alt',
    skills: ['Flutter', 'React Native', 'Dart', 'Java', 'Android SDK']
  },
  {
    category: 'Frontend',
    icon: 'fas fa-code',
    skills: ['React.js', 'Next.js', 'Tailwind CSS', 'JavaScript (ES6+)', 'Responsive Design']
  },
  {
    category: 'Backend',
    icon: 'fas fa-server',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'WebSockets', 'Shopify Liquid']
  },
  {
    category: 'Databases',
    icon: 'fas fa-database',
    skills: ['Firebase', 'MongoDB', 'PostgreSQL', 'SQLite', 'Real-time DB']
  },
  {
    category: 'AI & APIs',
    icon: 'fas fa-brain',
    skills: ['OpenAI API', 'GPT-4V Integration', 'Computer Vision', 'LangChain', 'JSON / RESTful']
  },
  {
    category: 'Tools & Deployment',
    icon: 'fas fa-tools',
    skills: ['Git & GitHub', 'VS Code', 'Postman', 'Vercel / Firebase', 'Agile / Scrum']
  }
];

// ===== DOM Elements =====

const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const nav = document.getElementById('navigation');

// ===== Navigation =====

// Toggle mobile menu
navToggle?.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  navToggle.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Add scrolled class to nav on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Active section highlighting
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
  const scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute('id');
    const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLink?.classList.add('active');
    } else {
      navLink?.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', highlightNavigation);

// ===== Project Type Detection =====

function detectProjectType(techStack) {
  const mobileKeywords = ['flutter', 'react native', 'android', 'mobile', 'dart', 'ios', 'swift', 'kotlin'];
  const webKeywords = ['html', 'css', 'javascript', 'shopify', 'web', 'liquid', 'wordpress', 'react', 'vue', 'angular', 'tailwind'];

  const techLower = techStack.map(t => t.toLowerCase());

  const isMobile = techLower.some(tech =>
    mobileKeywords.some(keyword => tech.includes(keyword))
  );

  const isWeb = techLower.some(tech =>
    webKeywords.some(keyword => tech.includes(keyword))
  );

  if (isMobile && !isWeb) return 'mobile';
  return 'web';
}

// ===== Generate Animated Preview HTML =====

function generateMobilePreview() {
  return `
    <div class="preview-container preview-mobile">
      <div class="phone-frame">
        <div class="phone-notch"></div>
        <div class="phone-screen">
          <div class="mobile-header">
            <div class="mobile-status-bar">
              <div class="status-left">
                <div class="status-time">9:41</div>
              </div>
              <div class="status-right">
                <div class="status-icon"></div>
                <div class="status-icon"></div>
                <div class="status-icon"></div>
              </div>
            </div>
            <div class="mobile-app-bar">
              <div class="app-bar-icon"></div>
              <div class="app-bar-title"></div>
              <div class="app-bar-action"></div>
            </div>
          </div>
          <div class="mobile-content">
            <div class="mobile-card card-1"></div>
            <div class="mobile-card card-2"></div>
            <div class="mobile-card card-3"></div>
            <div class="mobile-list">
              <div class="list-item"></div>
              <div class="list-item"></div>
              <div class="list-item"></div>
              <div class="list-item"></div>
            </div>
          </div>
          <div class="mobile-nav-bar">
            <div class="nav-item"></div>
            <div class="nav-item active"></div>
            <div class="nav-item"></div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function generateWebPreview() {
  return `
    <div class="preview-container preview-web">
      <div class="browser-frame">
        <div class="browser-header">
          <div class="browser-dots">
            <span class="dot dot-red"></span>
            <span class="dot dot-yellow"></span>
            <span class="dot dot-green"></span>
          </div>
          <div class="browser-address-bar">
            <div class="address-bar-icon"></div>
            <div class="address-bar-text"></div>
          </div>
        </div>
        <div class="browser-content">
          <div class="web-hero">
            <div class="hero-text-line line-1"></div>
            <div class="hero-text-line line-2"></div>
            <div class="hero-button"></div>
          </div>
          <div class="web-section">
            <div class="web-grid">
              <div class="grid-card"></div>
              <div class="grid-card"></div>
              <div class="grid-card"></div>
            </div>
          </div>
          <div class="web-footer">
            <div class="footer-block"></div>
            <div class="footer-block"></div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ===== Render Projects =====

function renderProjects() {
  const projectsGrid = document.getElementById('projectsGrid');
  if (!projectsGrid) return;

  projectsGrid.innerHTML = projectsData.map(project => {
    const projectType = detectProjectType(project.tech);
    const preview = projectType === 'mobile' ? generateMobilePreview() : generateWebPreview();

    return `
    <div class="project-card reveal" data-project-type="${projectType}">
      <div class="project-preview">
        ${preview}
      </div>
      <div class="project-content">
        <div class="project-header">
          <h3 class="project-title">${project.title}</h3>
          ${project.status ? `<span class="project-status">${project.status}</span>` : ''}
        </div>
        <p class="project-problem">${project.problem}</p>
        <p class="project-description">${project.description}</p>
        <div class="project-tech">
          ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
        <div class="project-links">
          ${project.links.map(link => `
            <a href="${link.disabled ? '#' : link.url}" 
               target="${link.disabled ? '_self' : '_blank'}" 
               rel="noopener" 
               class="project-link ${link.type || ''} ${link.disabled ? 'disabled' : ''}"
               ${link.disabled ? 'onclick="return false;"' : ''}
               ${link.tooltip ? `title="${link.tooltip}"` : ''}>
              <i class="${link.icon}"></i>
              ${link.label}
              ${link.disabled ? '<span class="coming-soon-badge">Soon</span>' : ''}
            </a>
          `).join('')}
        </div>
      </div>
    </div>
  `;
  }).join('');

  setupPreviewObserver();
}

// ===== Pause animations when off-screen =====

function setupPreviewObserver() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    document.querySelectorAll('.preview-container').forEach(preview => {
      preview.classList.add('reduced-motion');
    });
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      } else {
        entry.target.classList.remove('in-view');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.preview-container').forEach(preview => {
    observer.observe(preview);
  });
}

// ===== Render Experience =====

function renderExperience() {
  const experienceTimeline = document.getElementById('experienceTimeline');
  if (!experienceTimeline) return;

  experienceTimeline.innerHTML = experienceData.map(exp => `
    <div class="timeline-item reveal">
      <div class="timeline-marker"></div>
      <div class="timeline-content">
        <div class="timeline-header">
          <h3 class="timeline-role">${exp.role}</h3>
          <p class="timeline-company">${exp.company}</p>
          <span class="timeline-date">${exp.date}</span>
        </div>
        <p class="timeline-description">${exp.description}</p>
        <ul class="timeline-achievements">
          ${exp.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');
}

// ===== Render Skills =====

function renderSkills() {
  const skillsGrid = document.getElementById('skillsGrid');
  if (!skillsGrid) return;

  skillsGrid.innerHTML = skillsData.map((category, index) => `
    <div class="skill-category reveal" style="animation-delay: ${index * 0.1}s">
      <div class="skill-category-header">
        <div class="skill-icon-wrapper">
          <i class="${category.icon} skill-category-icon"></i>
          <div class="skill-icon-glow"></div>
        </div>
        <h3 class="skill-category-title">${category.category}</h3>
      </div>
      <div class="skill-items">
        ${category.skills.map((skill, skillIndex) => `
          <div class="skill-item" style="animation-delay: ${(index * 0.1) + (skillIndex * 0.05)}s">
            <span class="skill-name">${skill}</span>
            <div class="skill-bar">
              <div class="skill-bar-fill"></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

// ===== Scroll Reveal Animation =====

function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');

  reveals.forEach(element => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      element.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);

// ===== Custom Cursor =====

function initCustomCursor() {
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    const cursorDot = document.createElement('div');
    cursorDot.className = 'custom-cursor-dot';
    document.body.appendChild(cursorDot);

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let dotX = 0;
    let dotY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function animateCursor() {
      const speed = 0.15;
      const dotSpeed = 0.25;

      cursorX += (mouseX - cursorX) * speed;
      cursorY += (mouseY - cursorY) * speed;
      dotX += (mouseX - dotX) * dotSpeed;
      dotY += (mouseY - dotY) * dotSpeed;

      cursor.style.left = cursorX + 'px';
      cursor.style.top = cursorY + 'px';
      cursorDot.style.left = dotX + 'px';
      cursorDot.style.top = dotY + 'px';

      requestAnimationFrame(animateCursor);
    }

    animateCursor();

    const hoverElements = document.querySelectorAll('a, button, .project-card, .skill-item, .detail-card');

    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        document.body.classList.add('cursor-hover');
      });

      el.addEventListener('mouseleave', () => {
        document.body.classList.remove('cursor-hover');
      });
    });

    document.addEventListener('mousedown', () => {
      document.body.classList.add('cursor-click');
    });

    document.addEventListener('mouseup', () => {
      document.body.classList.remove('cursor-click');
    });
  }
}

// ===== Ripple Effect on Click =====

function addRippleEffect() {
  const buttons = document.querySelectorAll('.btn, .project-link, .contact-link');

  buttons.forEach(button => {
    button.addEventListener('click', function (e) {
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');

      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';

      this.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);
    });
  });
}

// ===== JavaScript Multi-Variant Typing Engine =====

function initTypingEffect() {
  const typingElement = document.getElementById('heroTyping');
  if (!typingElement) return;

  const roles = [
    'Mobile-First Full-Stack Developer',
    'React Native & Flutter Specialist',
    'AI Solutions Integrator',
    'Freelance Software Engineer'
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
      typingElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      typingElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 80;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      typingSpeed = 2000; // Pause at end of text
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 500; // Pause before typing next word
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

// ===== Contact Form with Custom Toast System =====

function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('formName').value.trim();
    const email = document.getElementById('formEmail').value.trim();
    const subject = document.getElementById('formSubject').value.trim();
    const message = document.getElementById('formMessage').value.trim();

    if (!name || !email || !subject || !message) {
      showToast('Please fill in all required fields.', 'error');
      return;
    }

    const submitBtn = contactForm.querySelector('.btn-submit');
    const originalContent = submitBtn.innerHTML;

    // Loading State
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <span>Sending Message...</span>
      <i class="fas fa-spinner fa-spin"></i>
    `;

    // High fidelity feedback simulation
    setTimeout(() => {
      showToast('Message sent successfully! I will reach out to you soon.', 'success');
      contactForm.reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalContent;
    }, 1800);
  });
}

function showToast(message, type = 'success') {
  // Inject toast styling if it doesn't already exist
  if (!document.getElementById('customToastStyles')) {
    const style = document.createElement('style');
    style.id = 'customToastStyles';
    style.innerHTML = `
      .toast-container {
        position: fixed;
        top: 24px;
        right: 24px;
        z-index: 10000;
        display: flex;
        flex-direction: column;
        gap: 12px;
        pointer-events: none;
      }
      .custom-toast {
        background: rgba(9, 13, 26, 0.85);
        backdrop-filter: blur(15px);
        border: 1px solid rgba(0, 240, 255, 0.1);
        border-left: 4px solid var(--color-accent-primary);
        color: var(--color-text-primary);
        padding: 16px 20px;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), 0 0 15px rgba(0, 240, 255, 0.1);
        display: flex;
        align-items: center;
        gap: 12px;
        min-width: 320px;
        max-width: 400px;
        pointer-events: auto;
        transform: translateX(120%);
        transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.4s ease;
        opacity: 0;
      }
      .custom-toast.toast-error {
        border-left-color: var(--color-error);
        border-color: rgba(239, 68, 68, 0.2);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), 0 0 15px rgba(239, 68, 68, 0.15);
      }
      .custom-toast.show {
        transform: translateX(0);
        opacity: 1;
      }
      .toast-icon {
        font-size: 18px;
        color: var(--color-accent-primary);
      }
      .custom-toast.toast-error .toast-icon {
        color: var(--color-error);
      }
      .toast-msg {
        font-size: 14px;
        font-weight: 500;
        line-height: 1.4;
      }
      @media (max-width: 576px) {
        .toast-container {
          top: 16px;
          right: 16px;
          left: 16px;
        }
        .custom-toast {
          min-width: 100%;
        }
      }
    `;
    document.head.appendChild(style);
  }

  // Create toast container if not exists
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  // Create toast node
  const toast = document.createElement('div');
  toast.className = `custom-toast ${type === 'error' ? 'toast-error' : ''}`;
  
  const iconClass = type === 'error' ? 'fas fa-exclamation-circle' : 'fas fa-check-circle';
  toast.innerHTML = `
    <i class="${iconClass} toast-icon"></i>
    <span class="toast-msg">${message}</span>
  `;

  container.appendChild(toast);

  // Trigger enter animation
  setTimeout(() => {
    toast.classList.add('show');
  }, 10);

  // Remove toast after delay
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      toast.remove();
      if (container.children.length === 0) {
        container.remove();
      }
    }, 400);
  }, 4000);
}

// ===== Initialize =====

async function init() {
  // Show splash screen first (only on first visit)
  await splashScreen.show();

  // Initialize app after splash
  renderProjects();
  renderExperience();
  renderSkills();

  // Initial reveal check
  setTimeout(() => {
    revealOnScroll();
  }, 100);

  // Add reveal class to static sections
  document.querySelectorAll('.section').forEach(section => {
    section.classList.add('reveal');
  });

  // Initialize custom cursor
  initCustomCursor();

  // Add ripple effects
  setTimeout(() => {
    addRippleEffect();
  }, 500);

  // Initialize dynamic JS features
  initTypingEffect();
  initContactForm();
}

// Run on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// ===== Console Easter Egg =====

console.log('%c👋 Hey there!', 'font-size: 24px; font-weight: bold; color: #00f0ff;');
console.log('%cLooking for a developer? Let\'s talk!', 'font-size: 16px; color: #f59e0b;');
console.log('%carayan713321@gmail.com', 'font-size: 14px; color: #cbd5e1;');
