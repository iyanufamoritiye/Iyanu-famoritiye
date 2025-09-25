import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';
import CustomButton from '../button/CustomButton';
import image3 from '/assets/image3.svg';
import { socialMediaLinks, Links } from '../../data/data';
import { Sun, Moon, Zap } from 'lucide-react'; // Theme icons

const themes = ['light', 'dark', 'primary'] as const;
const icons = {
  light: <Sun size={20} />,
  dark: <Moon size={20} />,
  primary: <Zap size={20} />,
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [currentTheme, setCurrentTheme] = React.useState<
    'light' | 'dark' | 'primary'
  >('light');

  const handleThemeSwitch = () => {
    const currentIndex = themes.indexOf(currentTheme);
    const nextTheme = themes[(currentIndex + 1) % themes.length];
    setCurrentTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

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

  const handleClickMobile = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setOpen(false);
  };

  return (
    <div className="flex flex-col sticky top-0 z-10 justify-between w-full">
      <div className=" hidden md:flex justify-between bg-primary-800 items-center py-2 px-4 ">
        <div className="flex gap-4">
          <img src={image3} alt="" className="stroke-2  size-8" />
          <h1 className=" text-xl font-bold text-white ">Iyanu</h1>
        </div>

        <div className="border-2 border-secondary-700 animate-pulse p-1 rounded-md h-fit">
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
        className="md:flex  py-4  sticky  top-0 hidden  items-center justify-between bg-gray-scale-900/90   w-full
          md:px-6 xl:px-20  "
      >
        <div className="flex md:space-x-4 xl:space-x-6 mt-1 ">
          {socialMediaLinks.map((social, index) => {
            const IconOrImage = social.icon;
            return (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center  text-white hover:text-error-700"
              >
                <IconOrImage className=" w-8 stroke-2  h-8 md:w-4 md:h-4 xl:w-6 xl:h-6" />
              </a>
            );
          })}
        </div>

        <div id="navLink" className="flex md:space-x-2 xl:space-x-6 capitalize">
          {Links.map((link, index) => (
            <div key={index} id="border" className="    ">
              <NavLink
                to={link.link}
                className="text-base p-2 font-semibold text-white  transition duration-300"
                onClick={handleClick}
              >
                {link.name}
              </NavLink>
            </div>
          ))}
        </div>

        <div className="border-2  border-error-700 animate-pulse transition duration-300 p-1   rounded-md h-fit">
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
        className=" block md:hidden p-4 px-3 items-center justify-between  bg-primary-900/90  to-transparent     
          w-full  z-50  h-fit  sticky top-0 mb-6  "
      >
        <div className="flex justify-between px-4">
          <div className="flex gap-4 z-30">
            <img
              src={image3}
              alt="soft engineer"
              className=" size-10 stroke-4  "
            />
            <h1 className=" text-2xl font-bold text-white ">Iyanu</h1>
          </div>

          <div
            className="  bg-primary-800 shadow cursor-pointer  z-30 transition-all duration-500 ease-in-out p-2 rounded-md"
            onClick={handleToggle}
          >
            <Menu className="text-white" />
          </div>
        </div>
        {open && (
          <div className=" flex flex-col items-center absolute -top-0 left-0  z-10 w-full  to-transparent bg-primary-900 py-6">
            <div
              id="navLink"
              className=" flex flex-col items-center mt-12 gap-4 mb-6  "
            >
              {Links.map((link, index) => (
                <div key={index} id="border" className="    ">
                  <NavLink
                    to={link.link}
                    className="text-xl p-2 font-bold text-white capitalize transition duration-300"
                    onClick={handleClickMobile}
                  >
                    {link.name}
                  </NavLink>
                </div>
              ))}
            </div>

            <button
              onClick={handleThemeSwitch}
              className="p-2 bg-app-bg rounded-full hover:bg-gray-200"
            >
              {icons[currentTheme]}
            </button>

            <div className="flex justify-between gap-4">
              <div className="border-2  border-secondary-700 animate-pulse  p-1 rounded-md h-fit">
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

              <div className="border-2 w-fit border-error-700 animate-pulse transition duration-300 p-1   rounded-md h-fit">
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
