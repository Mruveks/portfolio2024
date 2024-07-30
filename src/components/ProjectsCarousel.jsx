import React from "react";
import Slider from "react-slick";
import "./carousel.css";

const ProjectsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "Description of project ",
      image: "/zrzut.png",
    },
    { id: 2, title: "Project 2", description: "Description of project 2", image: "/zrzut.png" },
    { id: 3, title: "Project 3", description: "Description of project 3", image: "/zrzut.png" },
    { id: 4, title: "Project 1", description: "Description of project 1", image: "/zrzut.png" },
    { id: 5, title: "Project 2", description: "Description of project 2", image: "/zrzut.png" },
    { id: 6, title: "Project 3", description: "Description of project 3", image: "/zrzut.png" },
  ];

  return (
    <div className="carousel-container relative p-16">
      <Slider {...settings}>
        {projects.map((project) => (
          <div key={project.id} className="carousel-slide">
            <div className="carousel-content">
              <img src={project.image} alt={project.title} className="carousel-image" />
              <h3 className="carousel-title">{project.title}</h3>
              <p className="carousel-description">{project.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectsCarousel;
