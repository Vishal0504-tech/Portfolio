import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
   <div
      id="Contact"
      className="flex justify-around  bg-[#0e0f10] text-white  md:p-20 sm:p-20  p-20 items-center"
    >
      <div className="mr-10">
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl pr-2 font-normal">
          Feel Free To reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl pl-5">
        <li className="flex gap-1 items-center">
          <MdOutlineEmail size={20} />
          myemail@gmail.com
        </li>
        <li className="flex gap-1 items-center">
          <CiLinkedin />
          linkdlin.com/username
        </li>
        <li className="flex gap-1 items-center">
          <FaGithub />
          github.com/username
        </li>
      </ul>
    </div>
  );
};

export default  Contact;
