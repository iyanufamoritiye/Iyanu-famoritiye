import { ArrowUpRight } from "lucide-react";
import React from "react";

const ProjectCard = ({
  image,
  title,
  link,
  company,
  projectName,
  description,
}) => {
  return (
    <div
      className=" group bg-primary-900  relative w-full   h-full pb-8
        overflow-hidden rounded-b-2xl shadow  shadow-slate-600   hover:shadow-2xl transition-shadow duration-300"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-[60%] object-cover transition-transform duration-300  "
      />

      <div className=" text-gray-scale-50 font-medium  h-[40%] mt-4 pt-4 p-8">
        <h2 className="text-base m:text-lg xl:text-xl  uppercase mb-2 ">
          {title}
        </h2>
        <span className="text-error-600 mr-2 text-sm">{company}</span>
        <span className="text-primary-400 text-sm ">{projectName}</span>

        <p className="text-gray-scale-400 text-sm md:text-md xl:text-base  break-words  mb-4">
          {description}
        </p>
      </div>
      <div
        className="absolute  inset-0     bg-gray-950 bg-opacity-50 opacity-0 group-hover:opacity-100 
      transition-opacity duration-300  "
      >
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-lg  absolute  top-40 left-[45%]  font-semibold underline bg-primary-500 rounded-full  p-2"
        >
          <ArrowUpRight />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
