export const data = {
  name: 'Dheeraj Duggempudi',
  title: 'Senior Software Engineer',
  summary:
    'Senior Software Engineer with over 5 years of experience building high-performance, scalable web applications using Angular, TypeScript, and Node.js. Specialized in UI architecture, performance optimization, accessibility, and sustainable engineering practices across enterprise-scale systems.',
  resume: '/assets/resume.pdf',
  social: {
    github: 'https://github.com/dheerajduggempudi',
    linkedin: 'https://www.linkedin.com/in/dheeraj-duggempudi/',
    twitter: 'https://twitter.com/dheerajduggempudi',
  },

  projects: [
    {
      id: 'p1',
      title: 'Financial Analytics Dashboard (Morgan Stanley)',
      description:
        'Built customer-facing financial dashboards handling real-time data and analytics. Improved rendering efficiency and reduced time-to-interactive by over 30%.',
      tech: ['Angular', 'NgRx', 'RxJS', 'Node.js', 'Apollo Server'],
      link: '#',
    },
    {
      id: 'p2',
      title: 'Amadeus Digital Experience Suite',
      description:
        'Developed and maintained the Digital Experience Suite powering global airline booking systems for Lufthansa, Air India, and Malaysian Airlines. Focused on accessibility, performance, and scalability.',
      tech: ['Angular', 'TypeScript', 'RxJS', 'GraphQL', 'Azure DevOps'],
      link: '#',
    },
    {
      id: 'p3',
      title: 'Micro Frontend Architecture Initiative',
      description:
        'Led the design and implementation of a modular micro frontend architecture enabling independent deployment and scaling across multiple applications.',
      tech: ['Angular', 'Webpack Module Federation', 'TypeScript', 'Nginx'],
      link: '#',
    },
  ],

  skills: [
    { name: 'Angular', level: 95 },
    { name: 'TypeScript', level: 93 },
    { name: 'RxJS / NgRx', level: 90 },
    { name: 'HTML / SCSS', level: 92 },
    { name: 'GraphQL / Node.js', level: 85 },
    { name: 'Performance Optimization', level: 88 },
    { name: 'Accessibility (WCAG)', level: 85 },
    { name: 'Docker / CI-CD', level: 82 },
  ],

  experience: [
    {
      id: 'e1',
      company: 'Accolite Digital (Client: Morgan Stanley)',
      role: 'Senior Software Engineer',
      date: 'Oct 2024 – Sept 2025',
      bullets: [
        'Owned development of Angular-based financial dashboards handling live analytics with high reliability.',
        'Architected scalable frontend integrated with Node.js microservices and GraphQL APIs.',
        'Reduced time-to-interactive by 30% through performance profiling and optimization.',
        'Enhanced CI/CD pipelines using GitHub Actions and YAML parallelization, cutting build time by 40%.',
        'Mentored junior engineers and standardized coding practices across teams.',
      ],
    },
    {
      id: 'e2',
      company: 'Amadeus Labs',
      role: 'Software Engineer',
      date: 'Jul 2020 – Aug 2024',
      bullets: [
        'Built enterprise-grade airline booking applications serving millions of users globally.',
        'Led Angular frontend development with a focus on scalability, accessibility, and cross-device support.',
        'Implemented micro frontends and reusable design systems for multi-brand airline platforms.',
        'Automated deployments with Docker and Azure DevOps, improving build reproducibility.',
        'Introduced Jest and Playwright-based TDD, improving release quality and reducing regressions.',
      ],
    },
  ],

  education: [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'SRM University',
      score: '89%',
      date: '2016 – 2020',
    },
  ],
}

export type Project = typeof data.projects[number]
