import React, { useState } from "react";

const Tech = () => {
  const [selectedCategory, setSelectedCategory] = useState("Frontend");
  const [selectedTech, setSelectedTech] = useState(null);

  const categories = ["Frontend", "Backend", "UX/UI", "Tools", "Data Analysis", "Services"];
  const techs = {
    Frontend: ["JavaScript", "React", "HTML", "CSS", "Tailwind CSS"],
    Backend: ["Node.js", "SQL", "MongoDB", "Python", "C++"],
    "UX/UI": ["Figma", "Canva"],
    Tools: ["Git", "Trello", "Jira", "Office365"],
    "Data Analysis": ["MsExcel", "Google Analytics"],
    Services: ["Firebase", "Netlify", "Heroku"],
  };

  const details = {
    HTML: ["Semantic HTML", "Forms", "Canvas", "SVG"],
    CSS: ["Flexbox", "Grid", "Media Queries", "Animations", "Responsive Design"],
    "Tailwind CSS": ["Utility-First", "Responsive Design", "Customization"],
    JavaScript: ["ES6+", "Async/Await", "Promises", "DOM Manipulation", "Basic Syntax"],
    React: ["Hooks", "Context API", "React Router", "Components"],
    "Node.js": ["Event Loop", "Streams", "Buffers", "File System"],
    SQL: ["Joins", "Transactions", "Indexes", "Stored Procedures", "T-SQL", "Window Functions"],
    MongoDB: ["Schemas", "Mongoose", "Aggregation", "Indexes"],
    Python: ["Basic Syntax", "Libraries", "APIs", "Scripting"],
    "C++": ["OOP", "Memory Management", "Concurrency"],
    Figma: ["Prototyping", "Components", "Design Systems", "Collaboration"],
    Canva: ["Templates", "Graphics", "Branding"],
    Git: ["Branches", "Rebase", "Merge Conflicts"],
    Trello: ["Boards", "Cards", "Labels", "Automation"],
    Jira: ["Epics", "User Stories", "Sprints", "Bug Tracking"],
    Office365: ["Word", "Excel", "PowerPoint", "Teams"],
    MsExcel: ["Formulas", "Pivot Tables", "Charts", "Data Analysis"],
    "Google Analytics": ["Traffic Analysis", "Goals", "Events", "Reporting"],
    Firebase: ["Authentication", "Firestore", "Hosting", "Functions"],
    Netlify: ["Deployments", "Forms", "Functions", "DNS Management"],
    Heroku: ["Dynos", "Pipelines", "Add-ons", "Deployments"],
  };

  return (
    <div className="bg-light-beige h-full w-full p-32">
      <h1 className="text-6xl italic pb-16">Tech Stack</h1>

      <div className="flex justify-around border-b text-4xl">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category);
              setSelectedTech(null);
            }}
            className={`w-full border-r py-12 ${
              selectedCategory === category ? "bg-olive-green text-white" : "bg-moss-green"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="flex">
        {techs[selectedCategory].map((tech) => (
          <button
            key={tech}
            onClick={() => setSelectedTech(tech)}
            className={`w-full text-2xl text-center p-8 border-b border-r ${
              selectedTech === tech ? "bg-olive-green text-white" : "bg-moss-green "
            }`}
          >
            {tech}
          </button>
        ))}
      </div>
      <div className="col-span-4">
        {selectedTech && details[selectedTech] ? (
          <ul className="grid grid-cols-4">
            {details[selectedTech].map((detail) => (
              <li key={detail} className="w-full bg-olive-green text-xl text-white text-center p-8 border-b border-r">
                {detail}
              </li>
            ))}
          </ul>
        ) : (
          <p className="p-8 text-xl">Select a technology to see details</p>
        )}
      </div>
    </div>
  );
};

export default Tech;
