export interface Company {
  name: string;
  logo?: string; // A letter tile is shown when omitted
}

export interface ExperienceItem {
  id: string;
  role: string;
  period: string;
  company: Company;
  location: string;
  achievements: string[];
}
