export type ProjectLane = 'mobile' | 'web' | 'backend';

export interface ProjectResource {
  type: 'github' | 'live' | 'playstore' | 'appstore';
  url: string;
  label?: string; // Overrides the default button label for this resource type
}

export interface ProjectItem {
  id: string;
  title: string;
  lanes: ProjectLane[];
  image?: string; // Screenshot path; a text placeholder is shown when omitted
  imageFit?: 'cover' | 'contain'; // 'contain' shows the whole image (default 'cover', cropped to the top)
  imageBg?: string; // Background colour behind a 'contain' image
  description: string;
  techStack: string[];
  resources: ProjectResource[];
}
