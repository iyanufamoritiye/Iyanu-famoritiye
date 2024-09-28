import React from "react";
import ProjectCard from "../ProjectCard";

import OmniFood from "/assets/OminiFood.png";
import Ecommerce from "/assets/Ecommerce.png";
import XProject from "/assets/x_project.png";
import User_dashboard from "/assets/User_dashboard.png";
import LandingPage from "/assets/LandingPage.png";
import todo_list from "/assets/todo_list.png";
import code_magazine from "/assets/code_magazine.png";
import country_api from "/assets/country_api.png";
import portfolio from "/assets/portfolio.png";
import Decadev from "/assets/Decadev.png";
import { ArrowDownToLine } from "lucide-react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../button/CustomButton";

const WockSection1 = () => {
  const navigate = useNavigate();

  const projects = [
    {
      image: XProject,
      projectName: "Website",
      company: "KodeCamp",
      title: "X-Project",
      link: "https://x-project-fe-ten.vercel.app/",
      description: `Collaborated with a team to build Kodecamp X, a platform that provides accessible 
      and affordable tech education, offering flexible learning options and industry-driven courses.`,
    },
    {
      image: OmniFood,
      projectName: "Website",
      company: "Udemy",
      title: "OmniFood",
      link: "https://iyanufamoritiye.github.io/myominifoodproject/",
      description: `Built an AI-powered food ordering website that allows Users to creates a custom weekly meal plan based on their likes and dislikes, 
        helping them maintain healthy meals while staying on schedule.`,
    },
    {
      image: Ecommerce,
      projectName: "Website",
      company: "KodeCamp",
      title: "Online Store",
      link: "https://myecommerce-zeta-six.vercel.app/",
      description: `Built an eCommerce website where users can add products, 
        search for products, add items to wishlists, view the latest product information, 
        manage cart items, and purchase and receive product deliveries.`,
    },
    {
      image: portfolio,
      projectName: "Website",
      company: "Personal",
      title: "My Portfolio",
      link: "https://my-portfolio-silk-three-88.vercel.app/",
      description: `Built my personal Portfolio using ReactJs and tailwind CSS.`,
    },
    {
      image: User_dashboard,
      projectName: "Website",
      company: "KodeCamp",
      title: "User Dashboard",
      link: "https://user-dashboard-eosin-beta.vercel.app/",
      description: `Built a user dashboard where users can create and manage their accounts, 
        update their profile, and search items available in the dashboard.`,
    },
    {
      image: LandingPage,
      projectName: "Website",
      company: "KodeCamp",
      title: "Landing Page",
      link: "https://myecommerce-zeta-six.vercel.app/",
      description: `Built a simple landing page.`,
    },
    {
      image: country_api,
      projectName: "Website",
      company: "KodeCamp",
      title: "countries API",
      link: "https://countriesapi-2b1k.vercel.app/",
      description: `Built a simple landing page.`,
    },
    {
      image: todo_list,
      projectName: "Website",
      company: "KodeCamp",
      title: "Todo List",
      link: "https://todolist-nine-rosy.vercel.app/",
      description: `Built a full-stack todo item list where users can manage their tasks.`,
    },
    {
      image: todo_list,
      projectName: "Website",
      company: "KodeCamp",
      title: "Todo List API (CSR)",
      link: "https://todo-list-my-api.vercel.app/",
      description: `Built a todo list where users can add, update, and delete items, 
        with the list fetched from an API and rendered on the client side.`,
    },
    {
      image: todo_list,
      projectName: "Website",
      company: "KodeCamp",
      title: "Todo List API (SSR)",
      link: "https://todo-ssr-sigma.vercel.app/todos",
      description: `Built a todo list where users can add, update, and delete items, 
        with the list fetched from an API and rendered on the server side.`,
    },
    {
      image: Decadev,
      projectName: "Website",
      company: "Decadev",
      title: "Decadev CleanYard",
      link: "https://figma-decadev.vercel.app/",
      description: `Built a simple landing page for a yard cleaning service.`,
    },

    {
      image: code_magazine,
      projectName: "Website",
      company: "udemy",
      title: "Code Magazine",
      link: "https://code-magazine.vercel.app/",
      description: `Built a code magazine for  Block, Flexbox and Grid.`,
    },
  ];

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    navigate("/contact");
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center  bg-primary-800 p-4 xl:p-16  pt-8   rounded-3xl mb-24">
        <div className="flex  flex-col items-center mb-8  xl:mb-24">
          <h1 className=" text-2xl text-center  xl:text-4xl font-lato font-semibold text-gray-scale-100 mb-4 md:mb-6 ">
            Works and Projects completed
          </h1>

          <p className="text-lg text-center font-lato font-semibold text-gray-scale-500 xl:w-4/5">
            Check out some of my awesome projects, meticulously crafted with
            love and dedication, each one reflecting the passion and soul I
            poured into every detail.
          </p>
        </div>

        <div className="grid place-items-center mt-12 grid-cols-1 mb-6  w-full md:grid-cols-2 gap-6 xl:gap-16   ">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              projectName={project.projectName}
              company={project.company}
              description={project.description}
              title={project.title}
              link={project.link}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col  justify-center items-center    bg-primary-800 p-4 xl:p-12  py-8 rounded-3xl">
        <h1 className="text-2xl xl:text-4xl text-center font-lato font-semibold text-gray-scale-100 mb-6  xl:w-3/4">
          Are You Ready to kickstart your project with a touch of magic?
        </h1>

        <p className="text-lg text-center font-lato font-semibold text-gray-scale-500 mb-6 xl:w-3/4  ">
          Reach out and let's make it happen ✨. I'm also available for
          full-time or Part-time opportunities to push the boundaries of
          collaboration and deliver exceptional work.
        </p>
        <div>
          <CustomButton
            type="submit"
            variant="error"
            size="lg"
            className="flex gap-4 px-5 rounded-2xl  "
            onClick={handleClick}
          >
            let's talk
            <ArrowDownToLine className="size-5 stroke-2    " />
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default WockSection1;
