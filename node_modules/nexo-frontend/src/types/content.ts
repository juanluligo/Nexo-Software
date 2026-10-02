export type Project = {
  id: string;
  label: string;
  title: string;
  description: string;
  tags: string[];
  tone: 'blue' | 'green' | 'neutral';
};

export type Service = {
  id: string;
  title: string;
  description: string;
  tone: 'blue' | 'green' | 'neutral';
};

export type ProcessStep = {
  id: string;
  number: string;
  title: string;
  description: string;
  featured?: boolean;
};

export type SiteContent = {
  projects: Project[];
  services: Service[];
  process: ProcessStep[];
};
