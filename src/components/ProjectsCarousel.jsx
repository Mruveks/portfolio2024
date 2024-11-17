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
      title: "DefiTracker",
      description: "Decentralized Finance dashboard",
      image: "/defitracker.png",
      href: "https://kuba-mrowiec-defi-tracker.netlify.app",
    },
    {
      id: 2,
      title: "Giard Design",
      description: "Garden design company website",
      image: "/giarddesign.png",
      href: "https://giarddesigns.netlify.app",
    },
    {
      id: 3,
      title: "HooBank",
      description: "Bank website",
      image: "/hoobank.png",
      href: "https://kuba-mrowiec-hoobank.netlify.app",
    },
    {
      id: 4,
      title: "The Museum",
      description: "'The Museum' website",
      image: "/museum.png",
      href: "https://kuba-mrowiec-museum-website.netlify.app",
    },
    {
      id: 5,
      title: "Expense Tracker",
      description: "WebApp to track and analyze Your expenses",
      image: "/expense.png",
      href: "https://wydatki2024.netlify.app",
    },
    {
      id: 5,
      title: "CarsSpot",
      description: "Car dealership website",
      image: "/carsspot.png",
      href: "https://carsspot-kubamrowiec.netlify.app",
    },
  ];

  return (
    <div>
      <Slider {...settings}>
        {projects.map((project) => (
          <div key={project.id} className="carousel-slide ">
            <div className="m-10 border h-fit border-black bg-moss-green hover:bg-olive-green duration-500 hover:text-white cursor-pointer p-4">
              <a href={project.href} target="__blank" className="flex gap-2 flex-col items-center justify-between">
                <img src={project.image} alt={project.title} className="w-full h40 border border-black " />
                <h3 className="text-2xl">{project.title}</h3>
                <p className="text-md capitalize">{project.description}</p>
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectsCarousel;
