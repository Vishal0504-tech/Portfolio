import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      id="Contact"
      className="flex justify-around bg-[#0e0f10] text-white   md:p-20 sm:p-20  p-10 items-center"
    >
      <div className="">
        <h1 className="text-2xl md:text-6xl  pr-5 font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl pr-10 font-normal">
          Feel Free To reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl pl-10">
        <li className="flex gap-1 items-center">
          <MdOutlineEmail size={20} />
          vishal0210@gmail.com
        </li>
        <li className="flex gap-1 items-center">
          <CiLinkedin />
          linkdlin.com/vishal VR
        </li>
        <li className="flex gap-1 items-center">
          <FaGithub />
          github.com/Vishal0504
        </li>
      </ul>
    </div>
  );
};

export default  Contact;

