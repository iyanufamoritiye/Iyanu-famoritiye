import { Github, Linkedin } from "lucide-react";
import React from "react";

const Footer = () => {
  const socialMediaLinks = [
    {
      url: " https://www.linkedin.com/in/henryfamoritiye/",
      icon: Linkedin,
      alt: "Linkedin",
    },
    {
      url: " https://github.com/iyanufamoritiye",
      icon: Github,
      alt: "Github",
    },
  ];

  return (
    <div>
      <div className="text-gray-400  flex flex-col items-center justify-center gap-4 xl:gap-0  xl:justify-between xl:flex-row p-3 xl:p-16">
        <div className="flex justify-between items-center  gap-4">
          <div>
            <p className=" text-sm text-center  md:text-base">
              &copy; {new Date().getFullYear()}
              <a
                href="mailto:Henry.famoritiye@gmail.com?subject=Hire Me&body=Hello, I'm interested in hiring you for..."
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-error-600 text-sm  md:text-base"
              >
                Iyanu Famoritie
              </a>
              . All rights reserved.
            </p>
          </div>
          <div className="flex  gap-2 ">
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
                  <IconOrImage className="      w-4  h-4  " />
                </a>
              );
            })}
          </div>
        </div>
        <div>
          <p className="text-sm text-center  md:text-base ">
            Developed By
            <a
              href="https://www.linkedin.com/in/henryfamoritiye/"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 text-secondary-700 font-semibold text-sm  md:text-base capitalize "
            >
              I f
            </a>
            Inspired by
            <a
              href="https://preview.themeforest.net/item/bentos-personal-portfolio-react-template/full_screen_preview/53917243?_ga=2.150210814.934736169.1724331990-616607837.1724331990&_gac=1.250074612.1724331990.Cj0KCQjww5u2BhDeARIsALBuLnPZNtxV9kCaZ5RXhPwgUOA0Vf7rWW0HKHW99MwiZyopnsjX5GMuOt8aAu0bEALw_wcB"
              className="ml-2 font-semibold text-primary-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              themforest.net
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
