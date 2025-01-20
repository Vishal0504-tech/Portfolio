import React from "react";
import AboutImg from "../../assets/image1.png";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-25 bg-opacity-30 rounded-lg p-10"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-row md:flex-row items-center">
          <img className="md:h-80 pr-10" src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-3  ">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96 ">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                Frontend development focuses on creating the user-facing parts of a website or application—essentially what users see and interact with in their browser. It involves a combination of design, coding, and problem-solving to ensure a seamless and visually appealing experience.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                   HTML,CSS,JS
                </h1>
                <p className="text-sm md:text-md leading-tight">
                HTML, CSS, and JavaScript are the core technologies of the web. HTML (HyperText Markup Language) provides the structure of a webpage, defining elements like headings, paragraphs, images, and links. CSS (Cascading Style Sheets) is used to style these elements, controlling their layout, colors, fonts, and overall appearance. JavaScript adds interactivity and dynamic behavior, enabling features like animations, form validation, and real-time content updates. Together, they create engaging, responsive, and functional web experiences.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                   REACT JS
                </h1>
                <p className="text-sm md:text-md leading-tight">
                React.js is a popular JavaScript library for building user interfaces, especially for single-page applications. It allows developers to create reusable components, making code easier to manage and maintain. React uses a virtual DOM to efficiently update and render changes, ensuring high performance. With its focus on flexibility and simplicity, React is widely used to build dynamic and responsive web applications.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
