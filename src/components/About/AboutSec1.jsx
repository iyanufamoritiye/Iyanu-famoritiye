import React from "react";
import iyanu from "/assets/iyanu.png";
import CustomButton from "../button/CustomButton";
import { ArrowDownToLine, GraduationCap, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import EducationCard from "../EducationCard";
import ExperienceCard from "../ExperienceCard";

const AboutSec1 = () => {
  const navigate = useNavigate();

  const Educations = [
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

  const Experiences = [
    {
      date: "2016 - 2017",
      title: " junior FrontEnd engineer intenship",
      school: "Tony elumelu foundation",
    },
    {
      date: "2021 - 2022",
      title: "Technical support",
      school: "H D'interieur ",
    },

    {
      date: "2024  ",
      title: "React frontEnd Intermediate Eng",
      school: " KodeCamp",
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
      <div className=" flex flex-col md:flex-row  gap-4 xl:gap-12 w-full  mb-16  ">
        <div
          className="text-white text-center flex flex-col justify-center py-14 px-4 items-center 
         md:py-24 gap-5 bg-primary-800 rounded-3xl w-full md:w-[40%]     h-full mb-6 md:mb-0 "
        >
          <div className="rounded-full bg-error-500 w-64 h-72   md:w-60 md:h-64  xl:w-64 xl:h-72  relative">
            <img
              src={iyanu}
              alt="iyanu"
              className=" w-48  md:w-44 xl:w-48 left-8 right-0 rounded-full  absolute -top-20    "
            />
          </div>
        </div>

        <div className="p-4 w-full md:w-[70%] md:px-8 xl:px-12    py-10  bg-primary-800 rounded-3xl  mb-12 ">
          <h1 className=" text-xl md:text-2xl xl:text-3xl  text-gray-50 font-medium  mb-4  ">
            I am Iyanu Henry Famoritiye, a Front-End Developer
          </h1>
          <p className="text-base xl:text-xl font-medium text-gray-400 0 mb-4 md:w-[80%]  xl:w-full  ">
            I am a Nigeria-based front-end developer specializing in creating
            engaging and user-friendly web applications. With a strong
            foundation in web development and administration, I have honed my
            skills in building responsive and visually appealing interfaces.
          </p>

          <p className="text-base xl:text-xl font-medium text-gray-400 mb-4  md:w-[80%]  xl:w-full ">
            I hold a degree in Computer Science from Moshood Abiola Polytechnic,
            which has equipped me with essential technical knowledge and
            problem-solving abilities. I am committed to continuous learning and
            staying updated with the latest industry trends and technologies.
          </p>
          <p className="text-base xl:text-xl font-medium text-gray-400 mb-4  md:w-[80%]  xl:w-full  ">
            My work adheres to the highest standards of professional ethics,
            ensuring that I deliver quality results while following best
            practices in software development.
          </p>
          <div>
            <CustomButton
              type="submit"
              variant="error"
              size="lg"
              className="flex gap-4 px-5 items-center rounded-2xl  "
              onClick={handleClick}
            >
              Get in touch
              <Mail className="size-5 stroke-2    " />
            </CustomButton>
          </div>
        </div>
      </div>

      <div className=" md:flex items-start h-full justify-between w-full">
        <div className="p-4 xl:px-12 h-full w-full md:w-[47.5%] py-10  bg-primary-800 rounded-3xl  mb-12">
          <h3 className="text-gray-200 text-3xl font-bold">Experience</h3>
          <div>
            {Experiences.map((experience, index) => (
              <ExperienceCard
                key={index}
                school={experience.school}
                title={experience.title}
                date={experience.date}
              />
            ))}
          </div>
        </div>
        <div className="p-4 xl:px-12  h-full w-full md:w-[47.5%]  py-10  flex flex-col gap-6 bg-primary-800 rounded-3xl  mb-12">
          <h3 className="text-gray-200 text-3xl font-bold">Education</h3>
          <div>
            {Educations.map((education, index) => (
              <EducationCard
                key={index}
                school={education.school}
                title={education.title}
                date={education.date}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col  justify-center items-center    bg-primary-800 p-4 xl:p-12  py-8 rounded-3xl">
        <h1 className="text-2xl xl:text-4xl text-center font-semibold text-gray-100 mb-6  xl:w-3/4">
          Are You Ready to kickstart your project with a touch of magic?
        </h1>

        <p className="text-lg text-center font-semibold text-gray-500 mb-6 xl:w-3/4  ">
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

export default AboutSec1;
