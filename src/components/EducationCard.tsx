import { EduType } from "@/types/types";
import { GraduationCap } from "lucide-react";
import { SiKnowledgebase } from "react-icons/si";
import React from "react";

interface EducationCardProps {
  edu: EduType;
  type: 'experience' | 'education';
}
const EducationCard = ({ edu, type }: EducationCardProps) => {
  const Icon = type === 'experience' ? SiKnowledgebase : GraduationCap;
  return (
    <div className="border-b border-gray-500 flex py-8 gap-6 ">
      <div className="bg-warning-100 size-10 md:size-12 p-2 xl:p-0 xl:size-16 rounded-lg flex justify-center items-center">
        <Icon className="size-10 text-error" />
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="text-app-text font-medium text-base capitalize">
          {edu.date}
        </h4>
        <h2 className="text-app-text font-medium text-lg md:text-xl leading-6 capitalize">
          {edu.title}
        </h2>
        <h4 className="text-app-text font-medium text-base capitalize">
          {edu.school}
        </h4>
      </div>
    </div>
  );
};

export default EducationCard;
