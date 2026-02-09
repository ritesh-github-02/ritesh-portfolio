
import { Project, Skill, Experience, Education } from './types';

export const PROJECTS: Project[] = [
  // {
  //   id: '1',
  //   name: 'HR Attendance & Payroll System',
  //   techStack: ['ASP.NET', 'SQL Server', 'C#'],
  //   description: 'A comprehensive enterprise system for managing employee attendance and automated payroll processing.',
  //   image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800',
  //   link: 'https://github.com/riteshwaghmare',
  //   github: 'https://github.com/riteshwaghmare',
  //   year: '2024',
  //   category: 'Software Development'
  // },
  // {
  //   id: '2',
  //   name: 'Employee Self Service Portal',
  //   techStack: ['PHP Laravel', 'MySQL', 'React.js'],
  //   description: 'An interactive module allowing employees to manage their profiles, leave requests, and payslips.',
  //   image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
  //   link: 'https://github.com/riteshwaghmare',
  //   github: 'https://github.com/riteshwaghmare',
  //   year: '2024',
  //   category: 'Software Development'
  // },
  // {
  //   id: '3',
  //   name: 'Inventory Management Suite',
  //   techStack: ['ASP.NET Core', 'React', 'SQL Server'],
  //   description: 'Enterprise-grade inventory tracking with real-time analytics and reporting capabilities.',
  //   image: 'https://images.unsplash.com/photo-1586769852044-692d6e3703a0?auto=format&fit=crop&q=80&w=800',
  //   link: 'https://github.com/riteshwaghmare',
  //   github: 'https://github.com/riteshwaghmare',
  //   year: '2023',
  //   category: 'Enterprise Tool'
  // }
];

export const ALL_PROJECTS: Project[] = [
  ...PROJECTS,
  { id: '4', name: 'Equilibrium-Modern', year: '2025', category: 'Designing Website', link: 'https://equilibrium-modern-animating-web-site.vercel.app/' },
  { id: '5', name: 'Miranda Website', year: '2025', category: 'Design Agency', link: 'https://miranda-website-clone.vercel.app/' },
  { id: '6', name: 'Sidcup-Family-Golf', year: '2024', category: 'Modern Era', link: 'https://sidcup-family-golf-flame.vercel.app/' },
  { id: '7', name: 'Modern Ochi', year: '2024', category: 'Design Studio', link: 'https://ochi-modern-website.vercel.app/' },
  { id: '8', name: 'Media Getter', year: '2025', category: 'Design Studio', link: 'https://media-getter.vercel.app/' },


];

export const SKILLS: Skill[] = [
  // Frontend
  { name: 'React', category: 'frontend', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'HTML5', category: 'frontend', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', category: 'frontend', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JS', category: 'frontend', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Tailwind', category: 'frontend', iconUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg' },
  
  // Backend
  { name: 'ASP.NET', category: 'backend', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg' },
  { name: 'Laravel', category: 'backend', iconUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-original.svg' },
  { name: 'C#', category: 'backend', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
  
  // Database
  { name: 'SQL Server', category: 'database', iconUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/microsoftsqlserver/microsoftsqlserver-original.svg' },
  { name: 'MySQL', category: 'database', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  
  // Tools
  { name: 'GitHub', category: 'tools', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'Git', category: 'tools', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Postman', category: 'tools', iconUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postman/postman-original.svg' },

  // Designing
  { name: 'PS', category: 'designing', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg' },
  { name: 'AI', category: 'designing', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg' },
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'CloudMex Technologies',
    role: 'Software Developer',
    period: 'Present',
    description: [
      'Architected and maintained large-scale HR Attendance & Payroll Systems.',
      'Developed core Employee Self Service (ESS) modules using PHP Laravel and React.',
      'Optimized SQL Server queries for enterprise-level data processing.',
      'Collaborated with cross-functional teams to deliver scalable enterprise solutions.'
    ]
  }
];

export const EDUCATIONS: Education[] = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Ongoing',
    year: 'Ongoing',
    status: 'In Progress'
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Graduate',
    year: 'Completed',
    status: 'Graduate'
  }
];
