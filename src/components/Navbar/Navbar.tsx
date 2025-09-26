import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';
import CustomButton from '../button/CustomButton';
import { socialMediaLinks, Links } from '../../data/data';
import { Sun, Moon, Zap, Star, CheckCircle, Info } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { programmerImage } from '@/assets/images';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const { theme, toggleTheme } = useTheme();

  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const icons: Record<string, JSX.Element> = {
    light: <Sun size={20} />,
    dark: <Moon size={20} />,
    primary: <Zap size={20} />,
    secondary: <Star size={20} />,
    success: <CheckCircle size={20} />,
    info: <Info size={20} />,
  };

  const handleClickMobile = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setOpen(false);
  };

  return (
    <div className="flex flex-col  sticky top-0 z-10 justify-between w-full">
      <div className=" hidden md:flex justify-between bg-app-bg items-center py-2 px-4 ">
        <div className="flex gap-4 text-app-text">
          <img src={programmerImage} alt="text icon" className="stroke-2  size-8" />
          <h1 className=" text-xl font-bold">Iyanu</h1>
        </div>

        <div className="border-2 border-secondary animate-pulse p-1 rounded-md h-fit">
          <a
            href="https://www.linkedin.com/in/henryfamoritiye/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CustomButton
              type="submit"
              variant="secondaryNav"
              size="sm"
              className=" px-5 rounded-md  animate-pulse"
            >
              Connect
            </CustomButton>
          </a>
        </div>
      </div>

      <div
        className="md:flex py-4 sticky top-0 hidden items-center justify-between bg-app-bg-main  w-full
          md:px-6 xl:px-20 "
      >
        <div className="flex md:space-x-4 lg:space-x-6 mt-1 ">
          {socialMediaLinks.map((social, index) => {
            const IconOrImage = social.icon;
            return (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-app-text hover:text-app-bg"
              >
                <IconOrImage className=" w-8 stroke-2  h-8 md:w-4 md:h-4 xl:w-6 xl:h-6" />
              </a>
            );
          })}
        </div>

        <div id="navLink" className="flex md:space-x-2 xl:space-x-6 capitalize">
          {Links.map((link, index) => (
            <div key={index} id="border">
              <NavLink
                to={link.link}
                className="text-base p-2 font-semibold text-app-text  transition duration-300"
                onClick={handleClick}
              >
                {link.name}
              </NavLink>
            </div>
          ))}
        </div>
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-full 
            ${
              theme === 'light'
                ? 'bg-transparent text-app-text hover:bg-gray-100'
                : 'bg-white text-app-bg hover:bg-gray-200'
            }
          `}
        >
          {icons[theme]}
        </button>

        <div className="border-2  border-error animate-pulse transition duration-300 p-1 rounded-md h-fit">
          <a
            href="mailto:Henry.famoritiye@gmail.com?subject=Hire Me&body=Hello, I'm interested in hiring you for..."
            target="_blank"
            rel="noopener noreferrer"
          >
            <CustomButton
              type="submit"
              variant="errorNav"
              size="sm"
              className=" px-5 rounded-md  animate-pulse"
            >
              Hire Me
            </CustomButton>
          </a>
        </div>
      </div>

      <div
        className=" block md:hidden p-4 px-3 items-center justify-between bg-app-bg/90  to-transparent     
          w-full z-50 h-fit sticky top-0 mb-6  "
      >
        <div className="flex justify-between px-4">
          <div className="flex gap-4 z-30">
            <h1 className=" text-2xl text-app-text font-bold">Iyanu</h1>
          </div>
          <button
            onClick={toggleTheme}
            className={`flex items-center justify-center rounded-full transition-colors size-8
            ${
              theme === 'light'
                ? 'bg-transparent text-app-text hover:bg-gray-100'
                : 'bg-white text-app-bg hover:bg-gray-200'
            }
          `}
          >
            <div className="size-5">{icons[theme]}</div>
          </button>
          <div
            className="bg-app-bg-main shadow cursor-pointer  z-30 transition-all duration-500 ease-in-out p-2 rounded-md"
            onClick={handleToggle}
          >
            <Menu className="text-app-text" />
          </div>
        </div>
        {open && (
          <div className=" flex flex-col items-center absolute -top-0 left-0  z-10 w-full  to-transparent bg-app-bg-main py-6">
            <div
              id="navLink"
              className=" flex flex-col items-center mt-12 gap-4 mb-6  "
            >
              {Links.map((link, index) => (
                <div key={index} id="border" className="    ">
                  <NavLink
                    to={link.link}
                    className="text-xl p-2 font-bold text-app-text capitalize transition duration-300"
                    onClick={handleClickMobile}
                  >
                    {link.name}
                  </NavLink>
                </div>
              ))}
            </div>

            <div className="flex justify-between gap-4">
              <div className="border-2  border-app-bg animate-pulse  p-1 rounded-md h-fit">
                <a
                  href="https://www.linkedin.com/in/henryfamoritiye/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CustomButton
                    type="submit"
                    variant="secondaryNav"
                    size="md"
                    className=" px-5 rounded-md  animate-pulse"
                  >
                    Connect
                  </CustomButton>
                </a>
              </div>

              <div className="border-2 w-fit border-error animate-pulse transition duration-300 p-1   rounded-md h-fit">
                <a
                  href="mailto:Henry.famoritiye@gmail.com?subject=Hire Me&body=Hello, I'm interested in hiring you for..."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                >
                  <CustomButton
                    type="submit"
                    variant="errorNav"
                    size="md"
                    className=" px-5 rounded-md w-fit animate-pulse"
                  >
                    Hire Me
                  </CustomButton>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
