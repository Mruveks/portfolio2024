import React from "react";

const About = () => {
  return (
    <div className="grid grid-cols-2 h-full w-full overflow-hidden border-b border-black">
      <article className="p-16 text-lg bg-moss-green border-r border-black">
        <header className="text-4xl py-10 italic">About me</header>
        <p>
          I'm a 24-year-old with a passion for technology, finance, and sports. My journey in programming began in 2016
          during high school IT classes, where I learned to create simple web pages using HTML/CSS and got my first
          taste of C++, mastering loops and basic syntax. At Warsaw University of Information Technology, I pursued
          Computer Science, delving deeper into C++ with advanced concepts like OOP, scripting, and algorithms. Since
          2021, I've focused on Web Development, starting with JavaScript and later incorporating the React framework.
          My most significant project to date is DefiTracker, a site where people can look up and analyze various DeFi
          (Decentralized Finance) projects. Beyond tech, I'm heavily invested in financial markets, particularly in
          areas of investments, funds, and the cryptocurrency market. I enjoy staying active through gym workouts,
          running, and swimming. I'm also a lover of extreme sports, always seeking new thrills. My career goal is to
          become a professional Web Developer, constantly learning and creating innovative solutions in this
          ever-evolving field.
        </p>
      </article>
      <div className="relative">
        <img src="/about-photo.avif" className="h-full w-full object-cover" />
        <div className="absolute top-0 left-0 w-full h-full bg-moss-green bg-opacity-50"></div>
      </div>{" "}
    </div>
  );
};

export default About;
