import React from 'react';
import ProjectCard from '../ProjectCard';
import { ArrowDownToLine } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../button/CustomButton';
import { languages, projects } from '../../data/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import IconWithLabel from '../IconWithLabel';
import CTASection from '../CTASection';

const WockSection1 = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    navigate('/contact');
  };

  return (
    <div className="text-app-text">
      <CTASection
        title="  Works and Projects completed"
        subtitle={` Check out some of my awesome projects, meticulously crafted with
            love and dedication, each one reflecting the passion and soul I
            poured into every detail.`}
      >
        <div className="w-full rounded-3xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            navigation={{
              nextEl: '.custom-next',
              prevEl: '.custom-prev',
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2.5 },
              1280: { slidesPerView: 3 },
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            className="w-full"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex justify-center mt-4">
            <div className="swiper-pagination !static"></div>
          </div>
        </div>
      </CTASection>
      <CTASection
        title="Tools & Technologies I Use to Build Scalable Products"
        className="bg-inherit border-4 border-app-bg-main"
      >
        <Swiper
          modules={[Navigation, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          spaceBetween={8}
          slidesPerView="auto"
          className="w-full mt-6"
        >
          {languages.map((language) => (
            <SwiperSlide
              key={language.alt}
              className="!w-fit flex justify-center items-center"
            >
              <div className="flex flex-col items-center justify-center">
                <IconWithLabel
                  size="lg"
                  icon={language.icon}
                  label={language.alt}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </CTASection>
      <CTASection
        title="Are You Ready to kickstart your project with a touch of magic?"
        subtitle="Reach out and let's make it happen ✨. I'm also available for full-time or Part-time opportunities to push the boundaries of collaboration and deliver exceptional work."
      >
        <div className="w-full flex items-center justify-center">
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
      </CTASection>
    </div>
  );
};

export default WockSection1;
