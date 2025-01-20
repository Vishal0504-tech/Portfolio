import React from "react";
import bannerImg from "../../assets/photo-C8q0KQHG.webp";
const ProjectCard = ({ title, main, demoLink }) => {
  return (
    <div className=" md:p-6 flex flex-col   w-50 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl  ">
      <img className="p-4" src={bannerImg} alt="" />
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
      <div className="mt-2 p-2 md:p-4 flex gap-6 md:gap-4">
      <button
          onClick={() => window.open(demoLink,"")}
          className="md:mt-10 text-white py-3 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
        >
          Demo 
        </button>
       
      </div>
    </div>
  );
};

export default ProjectCard;
