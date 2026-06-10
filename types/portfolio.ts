export interface Profile {
  name: string;
  headline: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  bio: string;
  socialLinks: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  duration?: string;
  description: string;
  responsibilities: string[];
  kpis: string[];
  technologies: string[];
  category: 'product-management' | 'business-analysis' | 'ai-products' | 'consulting' | 'engineering';
  highlights?: string[];
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  problem: string;
  opportunity: string;
  users: string;
  features: Feature[];
  kpis: string[];
  outcomes: string[];
  technologies: string[];
  year?: string;
  image?: string;
}

export interface Feature {
  name: string;
  description: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  grade?: string;
  highlights?: string[];
  logo?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  category: 'award' | 'leadership' | 'recognition';
  impact?: string;
}

export interface Skill {
  id: string;
  category: string;
  skills: string[];
  proficiency?: number;
}

export interface ImpactMetric {
  id: string;
  label: string;
  value: string;
  description: string;
  icon?: string;
}

export interface Portfolio {
  profile: Profile;
  experience: Experience[];
  products: Product[];
  education: Education[];
  certifications: Certification[];
  achievements: Achievement[];
  skills: Skill[];
  impactMetrics: ImpactMetric[];
}
