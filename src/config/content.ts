export const content = {
  site: {
    brandSuffix: ' — Senior Software Engineer',
    skipLink: 'Skip to content',
  },
  nav: [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ],
  hero: {
    ctaResume: 'Download Resume',
    ctaProjects: 'View Projects',
    subtitlePrefix: 'Building scalable, accessible, and high-performance web applications.',
  },
  about: {
    title: 'About',
    paragraphs: [
      'I’m a Senior Software Engineer with over 5 years of experience delivering enterprise-grade web applications using Angular, TypeScript, and Node.js. I specialize in architecting performant, maintainable, and accessible frontend systems at scale.',
      'I enjoy designing modular architectures, optimizing rendering performance, and enabling teams through clean coding standards, documentation, and mentorship. My work combines technical precision with a focus on real-world impact and user experience.',
    ],
    stats: [
      { label: 'Years Experience', value: '5+' },
      { label: 'Enterprise Projects', value: '10+' },
      { label: 'Airlines & Finance Platforms Served', value: '6+' },
    ],
  },
  projects: {
    title: 'Selected Projects',
    viewButton: 'View',
  },
  experience: {
    title: 'Professional Experience',
  },
  skills: {
    title: 'Core Skills',
  },
  contact: {
    title: 'Contact',
    prompt:
      'Looking to collaborate or hire? I’m open to opportunities in modern web development, architecture, and UI engineering.',
    emailButton: 'Email Me',
    socialPrefix: 'Connect with me on',
  },
  footer: {
    // left: 'Built with Angular, TypeScript, and clean engineering principles.',
    left: 'Built with React, TypeScript',
  },
  // portfolio data moved to src/config/data.ts (import that as `data` in components)
}

export type Content = typeof content
