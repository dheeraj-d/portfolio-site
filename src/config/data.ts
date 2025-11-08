export const data = {
  name: 'Dheeraj Duggempudi',
  title: 'Senior Software Development Engineer',
  summary:
    'Seasoned frontend engineer specializing in modern React, TypeScript, and delightful user experiences. I design and build large scale frontend systems while keeping accessibility and performance in mind.',
  // resume stored in public/assets/resume.pdf
  resume: '/assets/resume.pdf',
  social: {
    github: 'https://github.com/yourname',
    linkedin: 'https://www.linkedin.com/in/dheeraj-duggempudi/',
    twitter: 'https://twitter.com/yourname',
  },
  projects: [
    {
      id: 'p1',
      title: 'Design System & Component Library',
      description:
        'Built an accessible, themeable component library used across multiple products. Focused on performance, tree-shaking, and DX with TypeScript and Storybook.',
      tech: ['React', 'TypeScript', 'Vite', 'Storybook'],
      link: '#',
    },
    {
      id: 'p2',
      title: 'Realtime Collaboration App',
      description:
        'Led frontend for a realtime collaboration product using websockets and optimistic UIs. Improved latency and reduced rendering overhead.',
      tech: ['React', 'Redux', 'WebSocket', 'Node.js'],
      link: '#',
    },
    {
      id: 'p3',
      title: 'E-commerce Platform Migration',
      description:
        'Migrated legacy storefront to modern SPA with incremental adoption, improving Core Web Vitals and conversion rate.',
      tech: ['React', 'Next.js', 'TypeScript', 'GraphQL'],
      link: '#',
    },
  ],
  skills: [
    { name: 'React', level: 95 },
    { name: 'TypeScript', level: 92 },
    { name: 'HTML & CSS', level: 98 },
    { name: 'Performance', level: 90 },
    { name: 'Accessibility', level: 88 },
    { name: 'Node.js / Backend', level: 78 },
  ],
  experience: [
    {
      id: 'e1',
      company: 'Acme Corp',
      role: 'Senior Frontend Engineer',
      date: '2021 - Present',
      bullets: [
        'Led frontend team of 6, owned performance strategy.',
        'Designed component library and CI for publishing packages.',
      ],
    },
    {
      id: 'e2',
      company: 'Beta Labs',
      role: 'Software Engineer',
      date: '2018 - 2021',
      bullets: ['Built customer-facing dashboards', 'Improved test coverage and deploy cadence'],
    },
  ],
}

export type Project = typeof data.projects[number]
