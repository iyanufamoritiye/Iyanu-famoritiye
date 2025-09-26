import React, { ReactNode } from 'react';

interface CustomButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?:
    | 'primary'
    | 'primaryNav'
    | 'secondary'
    | 'secondaryNav'
    | 'error'
    | 'errorNav'
    | 'text'
    | 'white'
    | 'dark';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit';
}
const CustomButton = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  type = 'button',
}: CustomButtonProps) => {
  const baseStyles =
    'font-semibold rounded-md focus:outline-none transition-all duration-200 ease-in-out';

  const variantStyles = {
    primary: `bg-gray-400 text-white hover:bg-primary active:bg-primary-light focus: outline-none   ${
      disabled ? 'opacity-50 cursor-not-allowed' : ''
    }`,
    primaryNav: `bg-primary-light text-white hover:bg-primary active:bg-primary-light focus: outline-none ${
      disabled ? 'opacity-50 cursor-not-allowed' : ''
    }`,
    secondary: `bg-white ring-2 ring-secondary-light text-secondary-light focus:outline-none hover:bg-secondary-dark active:bg-secondary-light ${
      disabled
        ? 'bg-secondary opacity-50 text-gray-900 cursor-not-allowed'
        : ''
    }`,
    secondaryNav: `bg-secondary text-white  focus:outline-none  hover:text-secondary hover:bg-gray-300 active:bg-secondary-light ${
      disabled ? 'bg-gray-400 opacity-50 text-white cursor-not-allowed' : ''
    }`,

    error: `text-white bg-error focus:outline-none focus:bg-error-dark hover:bg-error-light hover:ring-1 hover:ring-white  active:bg-error-dark ${
      disabled ? 'bg-gray-400 opacity-50 text-white cursor-not-allowed' : ''
    }`,
    errorNav: `text-white bg-error focus:outline-none  hover:bg-error-dark active:bg-error-light ${
      disabled ? 'bg-gray-400 opacity-50 text-white cursor-not-allowed' : ''
    }`,
    text: `text-app-text  hover:text-app-text-dark  active:text-app-text-dark focus:outline-none ${
      disabled ? 'text-gray-400 opacity-50 cursor-not-allowed' : ''
    }`,
    white: `bg-white text-gray-50 hover:bg-gray-50 text-gray-800 focus:outline-none active:bg-gray-50 text-gray-800 ${
      disabled ? 'bg-gray-400 opacity-50  text-gray-400 cursor-not-allowed' : ''
    }`,
    dark: `bg-gray-400 text-white hover:bg-gray-800 focus:outline-none active:bg-gray-900 ${
      disabled ? 'bg-gray-100 opacity-50 text-gray-900 cursor-not-allowed' : ''
    }`,
  };

  const sizeStyles = {
    sm: 'px-4  py-1 text-xs  ',
    md: ' px-4 py-2 text-sm   ',
    lg: ' px-4 py-3 text-base  ',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className} cursor-pointer`}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default CustomButton;
