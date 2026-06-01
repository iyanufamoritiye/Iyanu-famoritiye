import { Company, LanguagesType, ProjectType } from '@/types/types';
import {
  Github,
  Linkedin,
} from 'lucide-react';
import {
  jsLogo,
  cssLogo,
  jsSmallLogo,
  reactLogo,
  gitLogo,
  xProjectImg,
  ominiFoodImg,
  ecommerceImg,
  portfolioImg,
  userDashboardImg,
  landingPageImg,
  countryApiImg,
  todoListImg,
  decadevImg,
  codeMagazineImg,
  tefImg,
  KodeCamp,
  kodecampImg,
  kodehauzImg,
  kodecampLms,
  KodeHauzWebsite,
  jobboard,
  cypherpal,
  mentorstower,
} from '@/assets/images';




export const languages: LanguagesType[] = [
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    alt: 'JavaScript',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    alt: 'TypeScript',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    alt: 'React',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    alt: 'Next.js',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    alt: 'Vue.js',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    alt: 'Node.js',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    alt: 'Express.js',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
    alt: 'Redux Toolkit',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    alt: 'HTML5',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    alt: 'CSS3',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    alt: 'Tailwind CSS',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
    alt: 'Firebase',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
    alt: 'Jest',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    alt: 'Git',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    alt: 'GitHub',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg',
    alt: 'Material UI',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg',
    alt: 'Vite',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    alt: 'Figma',
  },
];

export const projects: ProjectType[] = [
  {
    image: kodecampLms,
    type: 'Website',
    company: 'kodehauz',
    title: 'Kodecamp website',
    status: 'live',
    link: 'https://lms.kode.camp/',
    description: `A comprehensive online training platform focused on upskilling individuals in web development, mobile app development, and other tech fields, providing hands-on learning and real-world projects.`,
  },
  {
    image: KodeHauzWebsite,
    type: 'website',
    company: 'kodehauz',
    title: 'kodehuaz solution',
    link: 'https://kodehauz.com/',
    status: 'live',
    description: `At KodeHauz, we believe in building a community of innovators who are passionate about making a difference in the tech world.`,
  },

  {
    image: mentorstower,
    type: 'Website',
    company: 'mentors tower',
    title: 'Mentors tower',
    status: 'coming soon',
    description: `A platform that connects mentors and mentees to foster personal and professional growth. We aim to provide valuable guidance and support, helping individuals achieve their goals.`,
  },
  {
    image: cypherpal,
    type: 'website',
    company: 'CypherPal',
    title: 'CypherPal',
    status: 'coming soon',
    description: `A crypto platform that can easily track all your crypto transactions across wallets and exchanges, automatically calculate your gains, and generate accurate tax reports—ready to file in minutes.`,
  },
  {
    image: jobboard,
    type: 'Website',
    company: 'kodehauz',
    title: 'Job Board',
    status: 'coming soon',
    description: `A platform that Easily discover tailored opportunities, connect with top employers, and apply seamlessly. With a user-friendly interface, recommendations, and real-time updates, landing your dream job has never been simpler.`,
  },

  {
    image: xProjectImg,
    type: 'Website',
    company: 'KodeCamp',
    title: 'X-Project',
    status: 'in development',
    link: 'https://x-project-fe-ten.vercel.app/',
    description: `Collaborated with a cross-functional team to build Kodecamp X, an ed-tech platform that delivers 
      affordable and accessible technology education. The platform features flexible learning options, 
      structured curriculums, and industry-driven courses designed to prepare learners for real-world roles.`,
  },
  {
    image: ominiFoodImg,
    type: 'Website',
    company: 'Udemy',
    title: 'OmniFood',
    status: 'personal project',
    link: 'https://iyanufamoritiye.github.io/myominifoodproject/',
    description: `Developed a modern AI-powered food ordering platform that generates customized weekly meal plans 
      based on user preferences, allergies, and dietary needs. It helps users maintain healthy eating habits 
      while optimizing time with automated scheduling and order tracking.`,
  },
  {
    image: portfolioImg,
    type: 'Website',
    company: 'Personal',
    title: 'My Portfolio',
    status: 'personal project',
    link: 'https://my-portfolio-silk-three-88.vercel.app/',
    description: `Designed and developed a personal portfolio using React.js and Tailwind CSS to showcase 
      professional projects, skills, and case studies in a clean, responsive interface.`,
  },
];

export const socialMediaLinks = [
  {
    url: ' https://www.linkedin.com/in/henryfamoritiye/',
    icon: Linkedin,
    alt: 'Linkedin',
  },
  {
    url: ' https://github.com/iyanufamoritiye',
    icon: Github,
    alt: 'Github',
  },
];

export const Links = [
  { name: 'home', link: '/' },
  { name: 'about', link: '/about' },
  { name: 'works', link: '/works' },
  { name: 'contact', link: '/contact' },
];

export const companies: Company[] = [
  {
    name: 'Tony Elumelu Foundation',
    icon: tefImg,
    position: 'Entrepreneurship Program Beneficiary',
  },
  {
    name: 'H-DINTERIEUR',
    light: true,
    position: 'Founder & Frontend Developer',
  },
  {
    name: 'KodeCamp',
    light: true,
    icon: kodecampImg,
    position: 'Intermediate Frontend Developer (React)',
  },
  {
    name: 'KodeHauz',
    light: true,
    icon: kodehauzImg,
    position: 'Mid Frontend Developer Intern',
  },
];

  export const Educations = [
    {
      date: "2013 - 2015",
      title: "  National Diploma of Computer science",
      school: "Moshood abiola polytechnic ",
    },
    {
      date: "2017 - 2020",
      title: "Higher National Diploma of Computer science",
      school: "Moshood abiola polytechnic ",
    },
    {
      date: "2023",
      title: " Front-end with HTML,CSS and JavaScript",
      school: "Udemy ",
    },

    {
      date: "2024  ",
      title: "React Intermediate",
      school: " KodeCamp",
    },
  ];

  export const Experiences = [
    {
      date: '2016 - 2017',
      title: ' junior FrontEnd engineer intenship',
      school: 'Tony elumelu foundation',
    },
    {
      date: '2024  ',
      title: 'React frontEnd Intermediate Eng',
      school: ' KodeCamp',
    },
    {
      date: '2025  ',
      title: 'React frontEnd Intermediate Eng',
      school: ' KodeHuaz',
    },
  ];
