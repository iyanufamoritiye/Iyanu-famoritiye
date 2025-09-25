import { ArrowUpRight } from 'lucide-react';
import React from 'react';
import { ProjectType } from '@/types/types';

interface ProjectCardProps {
  project: ProjectType;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="flex flex-col bg-white w-[350px] md:w-[400px] h-[500px] rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
      {/* Image on top */}
      <div className="w-full p-4 rounded-2xl h-[250px] bg-gray-100 flex-shrink-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      {/* Text + CTA at bottom */}
      <div className="flex flex-col justify-between flex-1 p-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-1">
            {project.title}
          </h2>
          <div className="text-sm text-gray-500 mb-3">
            <span className="text-red-500">{project.company}</span> •{' '}
            <span className="text-blue-500">{project.projectName}</span>
          </div>
          <p className="text-gray-600 text-sm line-clamp-4">
            {project.description}
          </p>
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center justify-start gap-1 text-primary-600 font-medium hover:underline"
        >
          View Project <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
