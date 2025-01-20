import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-6 sm:p-10 md:p-16 lg:p-24 text-white">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-6">
        <ProjectCard
          title="HTML Webpage"
          main="This is a HTML webpage created with HTML and a components."
          demoLink="https://vishal13.neocities.org/poster/poster"
        />
        <ProjectCard
          title="CSS Webpage"
          main="This is a CSS webpage created with CSS and a components."
          demoLink="https://vishal13.neocities.org/perfume/"
        />
        <ProjectCard
          title="JS Project"
          main="This is a Calculator project created with JavaScript and a components."
          demoLink="https://vishal13.neocities.org/calculator/"
        />
        <ProjectCard
          title="React Project"
          main="This is a Virtual reality website created with React JS and a components."
          demoLink="https://virtual-r-6fgx.vercel.app/"
        />
      </div>
    </div>
  );
};

export default Projects;
