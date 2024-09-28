import { GraduationCap } from "lucide-react";
import React from "react";

const EducationCard = ({ date, title, school }) => {
  return (
    <div className="border-b border-gray-500 flex py-8 gap-6 ">
      <div className="bg-warning-100 size-10 md:size-12 p-2 xl:p-0 xl:size-16 rounded-lg flex justify-center items-center">
        <GraduationCap className="size-10 text-error-700" />
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="text-gray-400 font-medium text-base capitalize">
          {date}
        </h4>
        <h2 className="text-gray-50 font-medium text-lg md:text-xl leading-6 capitalize">
          {title}
        </h2>
        <h4 className="text-gray-400 font-medium text-base capitalize">
          {school}
        </h4>
      </div>
    </div>
  );
};

export default EducationCard;
