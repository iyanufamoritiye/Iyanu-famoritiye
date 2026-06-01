'use client';
import { useTheme } from '@/contexts/ThemeContext';
import { Company } from '@/types/types';
interface CompanyCardProps {
  company: Company;
  index: number;
}

const CompanyCard = ({ company, index }: CompanyCardProps) => {
  const { theme } = useTheme();
  return (
    <div
      key={index}
      className={`flex w-full md:w-[300px] flex-col gap-2`}
    >
      <div
        className={`w-full h-24 flex items-center justify-center p-1 rounded-md shadow ${
          company.light && theme != 'light' ? 'bg-gray-200' : 'bg-gray-600'
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
      <p className="text-base text-app-text font-medium">{company.position}</p>
    </div>
  );
};

export default CompanyCard;
