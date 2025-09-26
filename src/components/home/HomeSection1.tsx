import React from 'react';
import { ArrowDownToLine } from 'lucide-react';
import CustomButton from '../button/CustomButton';
import { companies, languages } from '../../data/data';
import { useTheme } from '@/contexts/ThemeContext';

const HomeSection1 = () => {
  const { theme } = useTheme();
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/iyanu_resume.pdf';
    link.download = 'Iyanu_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 xl:gap-12 lg:h-[600px] w-full text-app-text mb-12">
        <div
          className=" text-app-text text-center flex flex-col justify-center px-4 items-center 
         py-8 gap-5 bg-app-bg-main rounded-3xl w-full md:w-[40%] h-full "
        >
          <div className="rounded-full bg-error-dark w-64 h-72 md:w-60 md:h-64 xl:w-64 xl:h-72 relative">
            <img
              src="/assets/iyanu.png"
              alt="iyanu"
              loading="lazy"
              className="w-48  md:w-44 xl:w-48 left-8 right-0 rounded-full absolute -top-20    "
            />
          </div>
          <h2 className="text-2xl font-bold w-full ">Iyanu Henry Famoritiye</h2>
          <span className="text-base font-normal">Software Engineer</span>
          <p className="text-base font-medium ">
            I am a passionate software engineer with a background in web
            development and a strong desire to learn and grow.
          </p>
          <div>
            <div className="grid grid-cols-5 gap-4">
              {languages.map((language, index) => (
                <div
                  key={index}
                  className="rounded-full border-2 border-gray-scale-500 p-2 hover:scale-110"
                >
                  <img
                    src={language.icon}
                    alt={language.alt}
                    className=" size-6 md:size-4 xl:size-6 text-app-text"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="p-4 h-[350px] md:h-full xl:px-12  flex flex-col justify-center w-full md:w-[60%] bg-app-bg-main text-app-text rounded-3xl">
          <h3 className="text-lg font-medium  mb-4">Hello There!</h3>
          <p className="text-xl xl:text-4xl font-medium  mb-4 xl:w-4/5">
            I'm Iyanu Henry Famoritiye, a Front-End Developer with expertise in
            creating user-friendly, responsive interfaces and delivering
            reliable web solutions.
          </p>
          <div className="flex gap-2 items-center mb-4">
            <div className="rounded-full size-4 bg-app-bg animate-bounce"></div>
            <span className="text-base font-medium font-sans">
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
      </div>
      <div className="bg-app-bg-main rounded-3xl w-full p-8 md:p-12">
        <h1 className="text-xl text-app-text font-semibold mb-12">
          Companies Worked With
        </h1>
        <div className="flex flex-wrap gap-6 justify-between w-full">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex w-full md:w-[300px] flex-col gap-2 "
            >
              <div
                className={`w-full h-24 flex items-center justify-center p-1 rounded-md shadow ${
                  company.light && theme != 'light'
                    ? 'bg-gray-200'
                    : 'bg-gray-600'
                }`}
              >
                {company.icon ? (
                  <img
                    src={company.icon}
                    alt={company.name}
                    className="max-h-16 w-full object-contain"
                  />
                ) : (
                  <div className="font-bold text-2xl text-app-bg-main">
                    {company.name}
                  </div>
                )}
              </div>
              <div className="text-xl text-app-text font-extrabold md:text-3xl">
                {company.name}
              </div>
              <p className="text-base text-app-text font-medium">
                {company.position}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeSection1;
