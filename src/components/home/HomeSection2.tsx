import React from "react";
import ProjectCard from "../ProjectCard";
import CustomButton from "../button/CustomButton";
import { ArrowDownToLine } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { projects }from '../../data/data'

const HomeSection2 = () => {
  const navigate = useNavigate();

 
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
      <div
        className="flex flex-col justify-center items-center mt-12 bg-app-bg-main
       p-4 xl:p-12 pt-8  rounded-3xl mb-24"
      >
        <div className="flex  flex-col items-center mb-8 text-app-text xl:mb-24">
          <h1 className=" text-2xl text-center xl:text-4xl font-semibold  mb-4 md:mb-6 ">
            Works and Projects completed
          </h1>

          <p className="text-lg text-center font-semibold text-app-text xl:w-4/5">
            Check out some of my awesome projects, meticulously crafted with
            love and dedication, each one reflecting the passion and soul I
            poured into every detail.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {projects.slice(0, 3).map((project, index) => (
            <ProjectCard key={index} project={project} />
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
      <div
        className="flex flex-col  justify-center items-center  text-app-text bg-app-bg-main
       p-4 xl:p-12  py-8 rounded-3xl"
      >
        <h1 className="text-2xl xl:text-4xl text-center font-semibold mb-6 text-app-text xl:w-3/4">
          Are You Ready to kickstart your project with a touch of magic?
        </h1>

        <p className="text-lg text-center font-semibold text-app-text mb-6 xl:w-3/4  ">
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
