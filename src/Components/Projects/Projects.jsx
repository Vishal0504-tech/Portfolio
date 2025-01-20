import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="grid grid-cols-1 pl-10 sm:grid-cols-2 lg:grid-cols-4 gap-20 mt-8 pl-5">
        <ProjectCard
          title="HTML Webpage"
          main="this is a bloggin webpage created in  HTML and used some component library used some component library"
         demoLink="https://vishal13.neocities.org/poster/poster"
          
        />
        
        <ProjectCard
          title="CSS Webpage"
          main="this is a bloggin webpage created in Css and used some component library used some component library"
          demoLink="https://vishal13.neocities.org/perfume/"
        />
        <ProjectCard
          title="JS Project"
          main="this is a blogging Project created this java script and used some component library used some component library"
           demoLink="https://vishal13.neocities.org/calculator/"
        />
        <ProjectCard
          title="REACT project"
          main="this is a blogging  project created this React JS and used some component library used some component library"
           demoLink="https://virtual-r-6fgx.vercel.app/"
        />
      </div>
    </div>
  );
};

export default Projects;
