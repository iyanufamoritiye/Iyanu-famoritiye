import React from 'react';

type Size = 'sm' | 'md' | 'lg';

interface SkillIconProps {
  icon: string;
  label: string;
  size?: Size;
}

const sizeStyles: Record<Size, string> = {
  sm: 'p-1 size-6',
  md: 'p-1 size-8',
  lg: 'p-1 size-10',
};

const textSize: Record<Size, string> = {
  sm: 'text-[10px]',
  md: 'text-[11px]',
  lg: 'text-xs',
};

const IconWithLabel = ({ icon, label, size = 'md' }: SkillIconProps) => {
  return (
    <div className="group flex flex-col items-center justify-center gap-2">
      <div className="rounded-full border-2 border-gray-scale-500 p-2 transition-transform hover:scale-110">
        <img src={icon} alt={label} className={`${sizeStyles[size]}`} />
      </div>

      <span
        className={`
          font-medium text-app-text tracking-wide capitalize
          ${textSize[size]}
        `}
      >
        {label}
      </span>
    </div>
  );
};

export default IconWithLabel;
