import React from "react";
import ProjectCard from "../ProjectCard";

import OmniFood from "/assets/OminiFood.png";
import Ecommerce from "/assets/Ecommerce.png";
import XProject from "/assets/x_project.png";
import CustomButton from "../button/CustomButton";
import { ArrowDownToLine } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HomeSection2 = () => {
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
  ];
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    navigate("/contact");
  };

  const handleViewAll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    navigate("/works");
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center  bg-primary-800 p-4 xl:p-12  pt-8  rounded-3xl mb-24">
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

        <div className="grid place-items-center mt-12 grid-cols-1 mb-6  w-full md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              projectName={project.projectName}
              description={project.description}
              company={project.company}
              title={project.title}
              link={project.link}
            />
          ))}
        </div>
        <div>
          <CustomButton
            type="submit"
            variant="text"
            size="lg"
            onClick={handleViewAll}
            className="flex gap-4 px-5 rounded-2xl   font-normal underline underline-offset-8  "
          >
            View all project
          </CustomButton>
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

export default HomeSection2;
