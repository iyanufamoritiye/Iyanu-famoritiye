import React from "react";

const CustomButton = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  type = "button",
}) => {
  const baseStyles =
    "font-semibold rounded-md focus:outline-none transition-all duration-200 ease-in-out";

  const variantStyles = {
    primary: `bg-gray-scale-400 text-white font-lato hover:bg-primary-700 active:bg-primary-500 focus: outline-none   ${
      disabled ? "bg-primary-300 opacity-50 cursor-not-allowed" : ""
    }`,
    primaryNav: `bg-primary-500 text-white font-lato hover:bg-primary-700 active:bg-primary-500 focus: outline-none ${
      disabled ? "bg-gray-scale-400 opacity-50 cursor-not-allowed" : ""
    }`,
    secondary: `bg-white ring-2 ring-secondary-500 font-lato text-secondary-500 focus: outline-none  hover:bg-secondary-800 active:bg-secondary-500 ${
      disabled
        ? "bg-secondary-700 opacity-50 text-gray-scale-900    cursor-not-allowed"
        : ""
    }`,
    secondaryNav: `bg-secondary-700    font-lato text-white  focus: outline-none  hover:text-secondary-700 hover:bg-gray-scale-300 active:bg-secondary-500 ${
      disabled
        ? "bg-gray-scale-400 opacity-50 text-white     cursor-not-allowed"
        : ""
    }`,

    error: `     font-lato text-white bg-error-500 focus: outline-none  hover:bg-inherit hover:ring-1 hover:ring-white  active:bg-error-500 ${
      disabled
        ? "bg-gray-scale-400 opacity-50 text-white     cursor-not-allowed"
        : ""
    }`,
    errorNav: `     font-lato text-white  bg-error-700 focus: outline-none  hover:bg-error-800 active:bg-error-500 ${
      disabled
        ? "bg-gray-scale-400 opacity-50 text-white     cursor-not-allowed"
        : ""
    }`,
    text: ` text-white font-lato  hover:text-error-500   active:text-error-500 focus: outline-none ${
      disabled ? "text-gray-scale-400 opacity-50 cursor-not-allowed" : ""
    }`,
    white: `bg-white text-gray-scale-50 font-lato hover:bg-gray-scale-50 text-gray-scale-800 focus: outline-none  active:bg-gray-scale-50 text-gray-scale-800 ${
      disabled
        ? "bg-gray-scale-400 opacity-50  text-gray-scale-400 cursor-not-allowed"
        : ""
    }`,
    dark: `bg-gray-scale-400 text-white font-lato hover:bg-gray-scale-800 focus: outline-none  active:bg-gray-scale-900 ${
      disabled
        ? "bg-gray-scale-100 opacity-50 text-gray-scale-900 cursor-not-allowed"
        : ""
    }`,
  };

  const sizeStyles = {
    sm: "px-4  py-1 text-xs  ",
    md: " px-4 py-2 text-sm   ",
    lg: " px-4 py-3 text-base  ",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default CustomButton;
