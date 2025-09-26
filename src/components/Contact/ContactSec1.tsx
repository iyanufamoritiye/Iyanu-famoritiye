import React, { ChangeEvent, FormEvent, useState } from "react";
import CustomButton from "../button/CustomButton";
import { Mail, MapPin, Phone } from "lucide-react";
import emailjs from "emailjs-com";

const ContactSec1 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceId = 'service_8lsnap7';
    const templateId = 'template_mqrtgv8';
    const userId = 'u96mwspZ8fUzpjZhi';

    emailjs.send(serviceId, templateId, formData, userId).then(
      (result) => {
        console.log(result.text);
        alert('Message Sent!');
      },
      (error) => {
        console.log(error.text);
        alert('An error occurred, please try again.');
      }
    );
  };

  return (
    <div>
      <div className="flex flex-col  justify-center items-center bg-app-bg-main  p-3 md:p-6 xl:p-12  py-8 rounded-3xl">
        <div className="mb-12">
          <h3 className="text-center text-base font-normal text-app-text mb-8">
            Contact
          </h3>
          <h1 className="text-app-text text-center text-2xl md:text-4xl  xl:text-6xl font-bold ">
            Get in Touch with Me!
          </h1>
        </div>

        <div className="w-full flex flex-col lg:flex-row justify-between lg:p-8">
          <div
            className=" w-full lg:w-[35%] h-auto border py-12 bg-app-bg md:py-24 flex flex-col justify-between
           border-app-text-dark p-8 rounded-3xl mb-6 lg:mb-0"
          >
            <div className="flex flex-col   items-start mb-4">
              <Phone className="text-error size-8 mb-3 " />
              <span className="font-semibold text-app-text text-lg">
                Contact number:
              </span>
              <a
                href="tel:+2348166673325"
                target="_blank"
                rel="noopener noreferrer"
                className="  text-app-text-dark text-lg font-medium  "
              >
                +2348166673325
              </a>
            </div>

            <div className="flex flex-col items-start mb-4">
              <Mail className="text-error size-8 mb-3  " />
              <span className="font-semibold text-app-text text-lg">
                Email us:
              </span>
              <a
                href={`mailto:${import.meta.env.VITE_MY_EMAIL}?subject=Hire Me&body=Hello, I'm interested in hiring you for...`}
                target="_blank"
                rel="noopener noreferrer"
                className="   text-app-text-dark text-lg font-medium     "
              >
                {import.meta.env.VITE_MY_EMAIL}
              </a>
            </div>

            <div className="flex flex-col items-start">
              <MapPin className="text-error  size-8 mb-3 " />
              <span className="font-semibold text-app-text text-lg  ">
                Our office:
              </span>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="   text-app-text-dark text-lg  font-medium    "
              >
                Lagos, Nigeria
              </a>
            </div>
          </div>

          <div
            className="w-full lg:w-[60%] bg-app-bg flex flex-col gap-12 border rounded-3xl border-app-text-dark p-4
            md:p-8 xl:p-12"
          >
            <form
              action=""
              onSubmit={sendEmail}
              className="flex flex-col  gap-4 md:gap-12 "
            >
              <div className=" xl:flex w-full justify-between items-center mb">
                <div className=" w-full xl:w-[47%] flex flex-col md:gap-4 gap-2 mb-6 xl:mb-0 mt-2 md:mt-0  ">
                  <label
                    htmlFor="name"
                    className="text-app-text font-semibold text-base xl:text-xl"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-2 border-app-text-dark bg-white focus:bg-white text-gray-900 w-full py-2 px-4  xl:p-4 rounded-2xl   focus:outline-none"
                  />
                </div>
                <div className=" w-full xl:w-[47%] flex flex-col  md:gap-4 gap-2 mb-6 md:mb-0">
                  <label
                    htmlFor="Email Address"
                    className="text-app-text font-semibold text-base xl:text-xl "
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-2 border-app-text-dark bg-white focus:bg-white text-gray-900 w-full py-2 px-4  xl:p-4 rounded-2xl  focus:outline-none  "
                  />
                </div>
              </div>
              <div className="h-48 w-full mb-12 ">
                <label
                  htmlFor="Your Message"
                  className="text-app-text font-semibold text-base md:text-xl"
                >
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your Message"
                  className="border-2 border-app-text-dark focus:bg-white bg-white text-gray-900 h-full rounded-2xl py-2 px-4  md:p-4 w-full focus:outline-none mb-4 mt-2  md:mt-4"
                ></textarea>
              </div>
              <div className="h-fit mb-4 md:mb-0">
                <CustomButton
                  type="submit"
                  variant="error"
                  size="lg"
                  className="flex gap-4 px-5 rounded-2xl"
                >
                  Send Me a Message
                  <Mail className="size-5 stroke-2" />
                </CustomButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSec1;
