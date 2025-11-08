export const content = {
  site: {
    brandSuffix: ' — Senior Software Development Engineer',
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
    subtitlePrefix: '',
  },
  about: {
    title: 'About',
    paragraphs: [
      'Seasoned frontend engineer specializing in modern React, TypeScript, and delightful user experiences. I design and build large scale frontend systems while keeping accessibility and performance in mind.',
      'I focus on clean, maintainable UI architecture, strong developer experience, and measurable frontend performance gains. I enjoy mentoring engineers and building reliable design systems.',
    ],
    stats: [
      { label: 'Years Experience', value: '10+' },
      { label: 'Public Components', value: '30+' },
      { label: 'Monthly Active Users', value: '100k+' },
    ],
  },
  projects: {
    title: 'Selected Projects',
    viewButton: 'View',
  },
  experience: {
    title: 'Experience',
  },
  skills: {
    title: 'Skills',
  },
  contact: {
    title: 'Contact',
    prompt: "If you'd like to work together, reach out — I respond quickly to serious inquiries.",
    emailButton: 'Email Me',
    socialPrefix: 'Find me on',
  },
  footer: {
    left: 'Built with React & TypeScript',
  },
  // portfolio data moved to src/config/data.ts (import that as `data` in components)
}

export type Content = typeof content
