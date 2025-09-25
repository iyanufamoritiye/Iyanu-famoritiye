import { Company, LanguagesType, ProjectType } from '@/types/types';
import {
  Github,
  Linkedin,
} from 'lucide-react';



export const languages: LanguagesType[] = [
  {
    icon: '/assets/javascript_logo.svg',
    alt: 'javascript logo',
  },
  {
    icon: '/assets/css_logo.svg',
    alt: 'cssLogo',
  },

  {
    icon: '/assets/js_logo.svg',
    alt: 'jsLogo',
  },
  {
    icon: '/assets/react_logo.svg',
    alt: 'React',
  },
  {
    icon: '/assets/git_logo.svg',
    alt: 'Git',
  },
];

export const projects: ProjectType[] = [
  {
    image: '/assets/x_project.png',
    projectName: 'Website',
    company: 'KodeCamp',
    title: 'X-Project',
    link: 'https://x-project-fe-ten.vercel.app/',
    description: `Collaborated with a cross-functional team to build Kodecamp X, an ed-tech platform that delivers 
      affordable and accessible technology education. The platform features flexible learning options, 
      structured curriculums, and industry-driven courses designed to prepare learners for real-world roles.`,
  },
  {
    image: '/assets/omini_food.png',
    projectName: 'Website',
    company: 'Udemy',
    title: 'OmniFood',
    link: 'https://iyanufamoritiye.github.io/myominifoodproject/',
    description: `Developed a modern AI-powered food ordering platform that generates customized weekly meal plans 
      based on user preferences, allergies, and dietary needs. It helps users maintain healthy eating habits 
      while optimizing time with automated scheduling and order tracking.`,
  },
  {
    image: '/assets/ecommerce.png',
    projectName: 'Website',
    company: 'KodeCamp',
    title: 'Online Store',
    link: 'https://myecommerce-zeta-six.vercel.app/',
    description: `Built a full-featured eCommerce web application where users can browse products, search by keywords, 
      add items to carts or wishlists, and proceed with secure checkout. The platform includes real-time product updates 
      and order management capabilities.`,
  },
  {
    image: '/assets/portfolio.png',
    projectName: 'Website',
    company: 'Personal',
    title: 'My Portfolio',
    link: 'https://my-portfolio-silk-three-88.vercel.app/',
    description: `Designed and developed a personal portfolio using React.js and Tailwind CSS to showcase 
      professional projects, skills, and case studies in a clean, responsive interface.`,
  },
  {
    image: '/assets/user_dashboard.png',
    projectName: 'Website',
    company: 'KodeCamp',
    title: 'User Dashboard',
    link: 'https://user-dashboard-eosin-beta.vercel.app/',
    description: `Implemented an interactive user dashboard with account creation, profile management, 
      search functionality, and responsive layouts. Optimized for usability and scalability in real-world applications.`,
  },
  {
    image: '/assets/landing_page.png',
    projectName: 'Website',
    company: 'KodeCamp',
    title: 'Landing Page',
    link: 'https://myecommerce-zeta-six.vercel.app/',
    description: `Designed a simple, responsive landing page with clear call-to-action sections and 
      modern design elements to highlight product offerings effectively.`,
  },
  {
    image: '/assets/country_api.png',
    projectName: 'Website',
    company: 'KodeCamp',
    title: 'Countries API',
    link: 'https://countriesapi-2b1k.vercel.app/',
    description: `Developed a web app that consumes a public REST API to display country data, including flags, 
      populations, regions, and languages. Users can filter and search countries seamlessly.`,
  },
  {
    image: '/assets/todo_list.png',
    projectName: 'Website',
    company: 'KodeCamp',
    title: 'Todo List',
    link: 'https://todolist-nine-rosy.vercel.app/',
    description: `Built a full-stack task management application where users can create, update, and 
      organize tasks. Integrated responsive design for easy use across devices.`,
  },
  {
    image: '/assets/todo_list.png',
    projectName: 'Website',
    company: 'KodeCamp',
    title: 'Todo List API (CSR)',
    link: 'https://todo-list-my-api.vercel.app/',
    description: `Created a client-side rendered todo list powered by an API. Users can add, update, 
      and delete tasks with real-time updates, showcasing dynamic state management.`,
  },
  {
    image: '/assets/todo_list.png',
    projectName: 'Website',
    company: 'KodeCamp',
    title: 'Todo List API (SSR)',
    link: 'https://todo-ssr-sigma.vercel.app/todos',
    description: `Built a server-side rendered todo list application integrated with an API. Designed 
      for improved SEO, performance, and faster data delivery compared to CSR.`,
  },
  {
    image: '/assets/decadev.png',
    projectName: 'Website',
    company: 'Decadev',
    title: 'Decadev CleanYard',
    link: 'https://figma-decadev.vercel.app/',
    description: `Developed a marketing landing page for a yard-cleaning service. Focused on presenting 
      services clearly with intuitive navigation and strong visuals.`,
  },
  {
    image: '/assets/code_magazine.png',
    projectName: 'Website',
    company: 'Udemy',
    title: 'Code Magazine',
    link: 'https://code-magazine.vercel.app/',
    description: `Created a code magazine demo site to practice and demonstrate modern CSS layouts including 
      Flexbox and Grid. The design showcases articles, images, and multi-column layouts.`,
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
    icon: '/assets/TEF.png',
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
    icon: '/assets/kodecamp.png',
    position: 'Intermediate Frontend Developer (React)',
  },
  {
    name: 'KodeHauz',
    light: true,
    icon: '/assets/kodeHauz.png',
    position: 'Mid Frontend Developer Intern',
  },
];

