import React, { useState } from "react";

const Tech = () => {
  const [selectedCategory, setSelectedCategory] = useState("Frontend");
  const [selectedTech, setSelectedTech] = useState(null);

  const categories = ["Frontend", "Backend", "Programs", "Other"];
  const techs = {
    Frontend: ["JavaScript", "HTML", "CSS", "React"],
    Backend: ["Node.js", "Express", "MongoDB", "SQL"],
    Programs: ["VS Code", "Git", "Docker", "Postman"],
    Other: ["GraphQL", "REST APIs", "OAuth", "JWT"],
  };

  const details = {
    JavaScript: ["ES6+", "Async/Await", "Promises", "DOM Manipulation"],
    HTML: ["Semantic HTML", "Forms", "Canvas", "SVG", "judasz"],
    CSS: ["Flexbox", "Grid", "Animations", "Responsive Design"],
    React: ["Hooks", "Context API", "React Router", "Redux"],
    "Node.js": ["Event Loop", "Streams", "Buffers", "File System"],
    Express: ["Middleware", "Routing", "Error Handling", "Validation"],
    MongoDB: ["Schemas", "Mongoose", "Aggregation", "Indexes"],
    SQL: ["Joins", "Transactions", "Indexes", "Stored Procedures"],
    "VS Code": ["Extensions", "Shortcuts", "Debugging", "Themes"],
    Git: ["Branches", "Rebase", "Merge Conflicts", "Stashing"],
    Docker: ["Containers", "Volumes", "Networking", "Compose"],
    Postman: ["Collections", "Environment Variables", "Tests", "Mocks"],
    GraphQL: ["Queries", "Mutations", "Subscriptions", "Resolvers"],
    "REST APIs": ["Endpoints", "Status Codes", "Headers", "Pagination"],
    OAuth: ["Flows", "Tokens", "Scopes", "Client Credentials"],
    JWT: ["Signing", "Verification", "Claims", "Expiration"],
  };

  return (
    <div className="bg-light-beige h-full w-full flex justify-center flex-col p-32">
      <h1 className="text-6xl italic pb-16">Tech Stack</h1>

      <div className="flex justify-around border-b text-2xl">
        <p className="w-full bg-moss-green border-r"></p>
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
      <div className="grid grid-cols-5 ">
        <div>
          {techs[selectedCategory].map((tech) => (
            <button
              key={tech}
              onClick={() => setSelectedTech(tech)}
              className={`w-full text-xl text-left p-8 border-b border-r ${
                selectedTech === tech ? "bg-olive-green text-white" : "bg-moss-green"
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
                <li key={detail} className="w-full bg-olive-green text-xl text-white text-left p-8 border-b">
                  {detail}
                </li>
              ))}
            </ul>
          ) : (
            <p className="p-8 text-xl">Select a technology to see details</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tech;
