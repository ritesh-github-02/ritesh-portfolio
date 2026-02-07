
export interface Project {
  id: string;
  name: string;
  techStack?: string[];
  description?: string;
  link?: string;
  github?: string;
  image?: string;
  year?: string;
  category?: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'designing';
  iconUrl?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  status?: string;
}