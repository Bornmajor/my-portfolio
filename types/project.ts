export interface ProjectResource {
  type: 'github' | 'live';
  url: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  image: string; // The required screenshot path
  description: string;
  techStack: string[];
  resources: ProjectResource[];
}