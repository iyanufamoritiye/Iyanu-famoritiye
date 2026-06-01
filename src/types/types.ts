export type ProjectType = {
  image: string;
  type: string;
  status: 'personal project' | 'in development' | 'coming soon' | 'live';
  company: string;
  title: string;
  link?: string;
  description: string;
};

export type LanguagesType = {
  icon: string;
  alt: string;
};
export interface Company {
  name: string;
  icon?: string;
  position: string;
  light?: boolean;
}

export interface EduType {
  date: string;
  title: string;
  school: string;
}