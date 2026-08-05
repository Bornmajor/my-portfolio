export interface Company {
  name: string;
  logo: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  period: string;
  company: Company;
  location: string;
  achievements: string[];
}