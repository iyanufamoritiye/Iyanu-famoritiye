import React from 'react';

interface CTASectionProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
}

const CTASection = ({
  title,
  subtitle,
  children,
  className = '',
}: CTASectionProps) => {
  return (
    <div
      className={`
        flex flex-col items-center justify-center
        bg-app-bg-main text-app-text
        p-4 xl:p-12 mb-24 py-8 rounded-3xl
        ${className}
      `}
    >
      <h1 className="text-2xl xl:text-4xl text-center font-semibold mb-6 xl:w-3/4">
        {title}
      </h1>

      {subtitle && (
        <p className="text-lg text-center font-semibold mb-6 xl:w-3/4">
          {subtitle}
        </p>
      )}

      {children && <div className="w-full">{children}</div>}
    </div>
  );
};

export default CTASection;
