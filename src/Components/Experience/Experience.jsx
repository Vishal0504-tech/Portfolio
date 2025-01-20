import React from "react";
import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
        {/* HTML */}
        <div className="p-6 bg-zinc-950 flex flex-col items-center rounded-2xl">
          <FaHtml5 color="#E34F26" size={50} />
          <h2 className="text-white text-lg font-semibold mt-4">HTML</h2>
          <p className="text-gray-400 text-sm text-center">
            The backbone of web structure, used to create semantic and accessible web pages.
          </p>
        </div>

        {/* CSS */}
        <div className="p-6 bg-zinc-950 flex flex-col items-center rounded-2xl">
          <FaCss3 color="#1572B6" size={50} />
          <h2 className="text-white text-lg font-semibold mt-4">CSS</h2>
          <p className="text-gray-400 text-sm text-center">
            Styles your web pages with colors, layouts, and responsive design.
          </p>
        </div>

        {/* React */}
        <div className="p-6 bg-zinc-950 flex flex-col items-center rounded-2xl">
          <FaReact color="#61DAFB" size={50} />
          <h2 className="text-white text-lg font-semibold mt-4">React</h2>
          <p className="text-gray-400 text-sm text-center">
            A JavaScript library for building dynamic and interactive user interfaces.
          </p>
        </div>

        {/* JavaScript */}
        <div className="p-6 bg-zinc-950 flex flex-col items-center rounded-2xl">
          <FaJs color="#F7DF1E" size={50} />
          <h2 className="text-white text-lg font-semibold mt-4">JavaScript</h2>
          <p className="text-gray-400 text-sm text-center">
            The programming language of the web, used to make pages interactive.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
