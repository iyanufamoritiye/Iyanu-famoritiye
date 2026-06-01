import React from 'react';
import { ArrowDownToLine } from 'lucide-react';
import CustomButton from '../button/CustomButton';
import { companies, languages } from '../../data/data';
import { Iyanu } from '@/assets/images';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import IconWithLabel from '../IconWithLabel';
import CompanyCard from '../CompanyCard';
import CTASection from '../CTASection';

const HomeSection1 = () => {
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
              src={Iyanu}
              alt="iyanu"
              className="w-48  md:w-44 xl:w-48 left-8 right-0 rounded-full absolute -top-20    "
            />
          </div>

          <h2 className="text-2xl font-bold w-full ">Iyanu Henry Famoritiye</h2>
          <span className="text-base font-normal">FrontEnd Dev</span>
          <p className="text-base font-medium ">
            I craft engaging, responsive, and high-impact scalable web
            applications.
          </p>
          <div className="w-full">
            <Swiper
              modules={[Navigation, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              spaceBetween={8}
              slidesPerView="auto"
              className="w-[90%] py-2"
            >
              {languages.map((language) => (
                <SwiperSlide key={language.alt} className="!w-fit">
                  <IconWithLabel icon={language.icon} label={language.alt} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="p-4 h-[350px] md:h-full xl:px-12  flex flex-col justify-center w-full md:w-[60%] bg-app-bg-main text-app-text rounded-3xl">
          <h3 className="text-lg font-medium  mb-4">Hello There!</h3>
          <p className="text-base xl:text-2xl font-medium  mb-4 ">
            I'm Iyanu Henry Famoritiye, a Frontend Software Engineer with
            expertise in building scalable web applications, modern user
            interfaces, and robust frontend architectures. I am committed to
            creating performant, accessible, and maintainable solutions that
            deliver measurable business value and exceptional user experiences.
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
      <CTASection
        title="Companies Worked With"
        className="bg-inherit border-4 border-app-bg-main"
      >
        <div className="w-full">
          <Swiper
            modules={[Navigation, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            spaceBetween={20}
            slidesPerView="auto"
            className="w-[90%] py-2"
          >
            {companies.map((company, index) => (
              <SwiperSlide key={company.name} className="!w-fit">
                <CompanyCard company={company} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </CTASection>
    </div>
  );
};

export default HomeSection1;
