import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,

} from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <hr className="hidden dark:block" />
      <div className=" w-full flex flex-col md:flex-row py-20 px-8 md:px-10 gap-7 lg:gap-17">
        <p className=" text-lg text-white font-semibold">
          Nairobi,Kenya
        </p>
        <p className=" flex flex-col text-lg text-white font-semibold">
        wesimmah2@gmail.com
        </p>
        <p className=" flex flex-col text-lg text-white font-semibold">
        +254794 208313
        </p>
        <div className=" flex flex-col justify-center items-center md:flex-row text-md gap-4 md:gap-17 text-white">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contactme">Contact Me</a>
        </div>
      </div>
      <div className="flex flex-col gap-10 items-center justify-center pb-20">
        <p className="text-white font-semibold tracking-wider">Social Media</p>
        <div className=" flex gap-10 text-white text-2xl mb-10">
          <BsFacebook className="hover:scale-125" />
          <BsInstagram className="hover:scale-125" />
          <BsLinkedin className="hover:scale-110" />
          <BsGithub className="hover:scale-110" />
          <AiFillTwitterCircle className="hover:scale-125" />
        </div>
        <p className=" text-gray-400 text-md tracking-wider">@2023 All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
