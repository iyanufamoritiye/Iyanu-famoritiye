import React from 'react';
import ProjectCard from '../ProjectCard';
import { ArrowDownToLine } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../button/CustomButton';
import { projects } from '../../data/data';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
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
    <div>
      <div className="flex flex-col justify-center items-center bg-primary-800 p-4 xl:p-16  pt-8   rounded-3xl mb-24">
        <div className="flex  flex-col items-center mb-8  xl:mb-24">
          <h1 className=" text-2xl text-center  xl:text-4xl font-semibold text-gray-100 mb-4 md:mb-6 ">
            Works and Projects completed
          </h1>

          <p className="text-lg text-center font-semibold text-gray-500 xl:w-4/5">
            Check out some of my awesome projects, meticulously crafted with
            love and dedication, each one reflecting the passion and soul I
            poured into every detail.
          </p>
        </div>
        <div className="w-fullrounded-3xl max-w-6xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={40}
            loop={true}
            centeredSlides={true}
            navigation={{
              nextEl: '.custom-next',
              prevEl: '.custom-prev',
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
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
      </div>

      <div className="flex flex-col  justify-center items-center bg-primary-800 p-4 xl:p-12  py-8 rounded-3xl">
        <h1 className="text-2xl xl:text-4xl text-center font-semibold text-gray-text-gray--100 mb-6  xl:w-3/4">
          Are You Ready to kickstart your project with a touch of magic?
        </h1>

        <p className="text-lg text-center font-semibold text-gray-text-gray--500 mb-6 xl:w-3/4  ">
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
