import React from 'react';
import { ArrowDownToLine } from 'lucide-react';
import CustomButton from '../button/CustomButton';
import { languages } from '../../data/data';

const HomeSection1 = () => {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/iyanu_resume.pdf';
    link.download = 'Iyanu_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const companies = ['Tony Elumelu Foundation', 'H-DINTERIEUR', 'KodeCamp'];

  return (
    <div className="flex flex-col md:flex-row  gap-4 xl:gap-12 w-full  mb-24">
      <div
        className=" text-white text-center flex flex-col justify-center px-4 items-center 
         py-8 gap-5 bg-primary rounded-3xl w-full md:w-[40%] h-full  "
      >
        <div className="rounded-full bg-error-500 w-64 h-72 md:w-60 md:h-64  xl:w-64 xl:h-72  relative">
          <img
            src="/assets/iyanu.png"
            alt="iyanu"
            loading="lazy"
            className="w-48  md:w-44 xl:w-48 left-8 right-0 rounded-full absolute -top-20    "
          />
        </div>
        <h2 className="text-2xl font-bold w-full ">
          Iyanu Henry Famoritiye
        </h2>
        <span className="text-base font-normal text-gray-400">
          Software Engineer
        </span>
        <p className="text-base text-gray-400 font-medium ">
          I am a passionate software engineer with a background in web
          development and a strong desire to learn and grow.
        </p>
        <div>
          <div className="grid grid-cols-5 gap-4">
            {languages.map((language, index) => (
              <div
                key={index}
                className="rounded-full border-2 border-gray-scale-500 p-2  hover:scale-110  "
              >
                <img
                  src={language.icon}
                  alt={language.alt}
                  className=" size-6 md:size-4 xl:size-6  text-primary-light"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className=" w-full md:w-[60%]   ">
        <div className="p-4 xl:pl-12 md:py-32 w-full   bg-primary rounded-3xl  mb-12 ">
          <h3 className="text-lg text-gray-400 font-medium  mb-4  ">
            Hello There!
          </h3>
          <p className="text-xl  xl:text-4xl font-medium text-gray-50 mb-4    xl:w-4/5">
            I'm Iyanu Henry Famoritiye, a Front-End Developer with expertise in
            creating user-friendly, responsive interfaces and delivering
            reliable web solutions.
          </p>
          <div className="flex gap-2 items-center mb-4">
            <div className="rounded-full size-4 bg-secondary-800 animate-bounce"></div>
            <span className="text-base text-gray-400 font-medium font-sans">
              Available for Freelancing
            </span>
          </div>
          <div>
            <CustomButton
              type="submit"
              variant="error"
              size="lg"
              className="flex gap-4 px-5 rounded-2xl    "
              onClick={handleResumeDownload}
            >
              Get Resume
              <ArrowDownToLine className="size-5 stroke-2    " />
            </CustomButton>
          </div>
        </div>
        <div className="bg-primary rounded-3xl w-full p-8 md:px-12 md:py-12">
          <h1 className="text-xl text-gray-400  font-semibold mb-12">
            Companies Worked With
          </h1>
          <div className="marquee-container overflow-hidden whitespace-nowrap">
            <div className="marquee-content flex gap-x-8 animate-marquee ">
              {companies.map((company, index) => (
                <div
                  key={index}
                  className="item-1 text-xl font-black bg-clip-text bg-gradient-to-r from-stone-300 via-stone-400 to-gray-700 text-transparent md:text-3xl font-[fantasy]"
                >
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection1;
