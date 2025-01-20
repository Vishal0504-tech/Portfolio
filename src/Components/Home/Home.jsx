import React from "react";
import avatarImg from "../../assets/image.png";
import TextChange from "../TextChange";


const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-10">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange/>
        </h1>
        <p className="text md:text-2xl tracking-tight pr-20 ">
        I am a frontend developer. I specialize in creating visually appealing and user-friendly web interfaces using technologies like HTML, CSS, JavaScript, and frameworks such as React.  

        </p>
        <button className="mt-5 md:md-10 text-white py03 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#323f70]">
          Contact Me
        </button>
      </div>
      <div>
       <img
          className="w-screen h-60  sm:w-60 sm:h-60 md:w-80 md:h-80  rounded-full object-cover "
          src={avatarImg}
          alt="Avatar img"
        />
      </div>
    </div>
  );
};

export default Home;
