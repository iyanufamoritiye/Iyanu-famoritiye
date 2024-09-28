import React, { useState } from "react";
import CustomButton from "../button/CustomButton";
import { ArrowDownToLine, Mail, MapPin, Phone } from "lucide-react";
import emailjs from "emailjs-com";

const ContactSec1 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = "service_8lsnap7";
    const templateId = "template_mqrtgv8";
    const userId = "u96mwspZ8fUzpjZhi";

    emailjs.send(serviceId, templateId, formData, userId).then(
      (result) => {
        console.log(result.text);
        alert("Message Sent!");
      },
      (error) => {
        console.log(error.text);
        alert("An error occurred, please try again.");
      }
    );
  };

  return (
    <div>
      <div className="lex flex-col  justify-center items-center    bg-primary-800  p-3 md:p-6 xl:p-12  py-8 rounded-3xl">
        <div className="mb-12">
          <h3 className="text-center text-base font-normal text-gray-400  mb-8">
            Contact
          </h3>
          <h1 className="text-gray-50 text-center text-2xl md:text-4xl  xl:text-6xl font-bold ">
            Get in Touch with Me!
          </h1>
        </div>

        <div className="w-full flex flex-col  md:flex-row justify-between md:p-8">
          <div
            className=" w-full md:w-[35%] h-auto border py-12 md:py-24 flex flex-col justify-between
           border-gray-500 p-8 rounded-3xl mb-6 md:mb-0"
          >
            <div className="flex flex-col   items-start mb-4">
              <Phone className="text-error-500 size-8 mb-3 " />
              <span className="font-semibold text-white text-lg">
                Contact number:
              </span>
              <a
                href="tel:+2348166673325"
                target="_blank"
                rel="noopener noreferrer"
                className="  text-gray-400 text-lg font-medium  "
              >
                +2348166673325
              </a>
            </div>

            <div className="flex flex-col items-start mb-4">
              <Mail className="text-error-500 size-8 mb-3  " />
              <span className="font-semibold text-white text-lg">
                Email us:
              </span>
              <a
                href="mailto:Henry.famoritiye@gmail.com?subject=Hire Me&body=Hello, I'm interested in hiring you for..."
                target="_blank"
                rel="noopener noreferrer"
                className="   text-gray-400 text-lg font-medium     "
              >
                info@example.com
              </a>
            </div>

            <div className="flex flex-col items-start">
              <MapPin className="text-error-500  size-8 mb-3 " />
              <span className="font-semibold text-white text-lg  ">
                Our office:
              </span>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="   text-gray-400 text-lg  font-medium    "
              >
                Lagos, Nigeria
              </a>
            </div>
          </div>

          <div
            className="w-full md:w-[60%] flex flex-col gap-12  border  rounded-3xl border-gray-500 p-4
            md:p-8 xl:p-12"
          >
            <form
              action=""
              onSubmit={sendEmail}
              className="flex flex-col  gap-4 md:gap-12 "
            >
              <div className=" xl:flex   w-full justify-between items-center mb">
                <div className=" w-full xl:w-[47%] flex flex-col md:gap-4 gap-2 mb-6 xl:mb-0 mt-2 md:mt-0  ">
                  <label
                    htmlFor="name"
                    className="text-gray-300 font-semibold text-base xl:text-xl font-lato"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-2 border-gray-300 w-full py-2 px-4  xl:p-4 rounded-2xl   focus:outline-none"
                  />
                </div>
                <div className=" w-full xl:w-[47%] flex flex-col  md:gap-4 gap-2 mb-6 md:mb-0">
                  <label
                    htmlFor="Email Address"
                    className="text-gray-300 font-semibold text-base xl:text-xl  font-lato"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-2 border-gray-300 w-full py-2 px-4  xl:p-4 rounded-2xl  focus:outline-none  "
                  />
                </div>
              </div>
              <div className="h-48 w-full mb-12 ">
                <label
                  htmlFor="Your Message"
                  className="text-gray-300 font-semibold text-base md:text-xl font-lato"
                >
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your Message"
                  className="border-2 border-gray-50 h-full  rounded-2xl py-2 px-4  md:p-4 w-full focus:outline-none mb-4 mt-2  md:mt-4"
                ></textarea>
              </div>
              <div className="h-fit mb-4 md:mb-0">
                <CustomButton
                  type="submit"
                  variant="error"
                  size="lg"
                  className="flex gap-4  px-5 rounded-2xl  "
                >
                  Send Me a Message
                  <Mail className="size-5 stroke-2    " />
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
