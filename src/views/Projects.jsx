import React from "react";
import ProjectsCarousel from "../components/ProjectsCarousel";
const Projects = () => {
  return (
    <div className="h-full flex flex-col justify-evenly w-full bg-beige px-32">
      <h1 className="text-6xl italic">My Projects</h1>
      <ProjectsCarousel />
    </div>
  );
};

export default Projects;
