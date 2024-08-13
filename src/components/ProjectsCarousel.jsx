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
      title: "DefiTracker.eu",
      description: "Description of project ",
      image: "/defitracker.png",
      href: "https://kuba-mrowiec-defi-tracker.netlify.app",
    },
    {
      id: 2,
      title: "Giard Design",
      description: "Description of project 2",
      image: "/giarddesign.png",
      href: "https://giarddesigns.netlify.app",
    },
    {
      id: 3,
      title: "HooBank",
      description: "Description of project 3",
      image: "/hoobank.png",
      href: "https://kuba-mrowiec-hoobank.netlify.app",
    },
    {
      id: 4,
      title: "The Museum",
      description: "Description of project 1",
      image: "/museum.png",
      href: "https://kuba-mrowiec-museum-website.netlify.app",
    },
    { id: 5, title: "Spotify clone", description: "Description of project 2", image: "/zrzut.png", href: "" },
    {
      id: 6,
      title: "Expense Tracker",
      description: "Description of project 3",
      image: "/expense.png",
      href: "https://wydatki2024.netlify.app",
    },
  ];

  return (
    <div>
      <Slider {...settings}>
        {projects.map((project) => (
          <div key={project.id} className="carousel-slide ">
            <div className="m-10 border border-black bg-moss-green hover:bg-olive-green duration-500 hover:text-white cursor-pointer p-4">
              <a href={project.href} target="__blank" className="flex gap-4 flex-col items-center">
                <img src={project.image} alt={project.title} className="w-full h-auto border border-black" />
                <h3 className="text-2xl ">{project.title}</h3>
                <p className="text-md">{project.description}</p>
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectsCarousel;
