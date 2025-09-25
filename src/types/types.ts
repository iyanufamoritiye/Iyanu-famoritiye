export type ProjectType = {
  image: string;
  projectName: string;
  company: string;
  title: string;
  link: string;
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