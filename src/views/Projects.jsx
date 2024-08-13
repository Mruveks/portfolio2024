import React from "react";
import ProjectsCarousel from "../components/ProjectsCarousel";
const Projects = () => {
  return (
    <div className="h-full  w-full bg-beige p-16 border-b border-black">
      <h1 className="text-4xl italic py-10">My Projects</h1>
      <article className="h-full flex flex-col">
        <ProjectsCarousel />
      </article>
    </div>
  );
};

export default Projects;
