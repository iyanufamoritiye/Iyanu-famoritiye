import React from 'react';
import ProjectCard from '../ProjectCard';
import CustomButton from '../button/CustomButton';
import { ArrowDownToLine } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { projects } from '../../data/data';
import CTASection from '../CTASection';

const HomeSection2 = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    navigate('/contact');
  };

  const handleViewAll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    navigate('/works');
  };

  return (
    <div>
      <CTASection
        title="Works and Projects completed"
        subtitle={`Check out some of my awesome projects, meticulously crafted with
          love and dedication, each one reflecting the passion and soul I
          poured into every detail.
        `}
        className="mt-24"
      >
        <div className="flex flex-wrap justify-center gap-4 w-full">
          {projects.slice(0, 5).map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        <div className="flex justify-center items-center">
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
      </CTASection>
      <CTASection
        title="Are You Ready to kickstart your project with a touch of magic?"
        subtitle={` Reach out and let's make it happen ✨. I'm also available for
          full-time or Part-time opportunities to push the boundaries of
          collaboration and deliver exceptional work
        `}
      >
        <div className="flex justify-center items-center">
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

export default HomeSection2;
