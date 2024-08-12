import React from "react";

const Tech = () => {
  const techDetails = {
    Frontend: ["JavaScript", "React", "HTML", "CSS", "Tailwind CSS", "Bootstrap"],
    Backend: ["Node.js", "SQL", "MongoDB", "Python", "C++"],
    "UX/UI": ["Figma", "Canva"],
    Tools: ["Git", "Trello", "Jira", "Office365"],
    "Data Analysis": ["MsExcel", "Google Analytics"],
    Infrastructure: ["Firebase", "Netlify", "Heroku"],
  };

  return (
    <div className="h-full  w-full bg-beige p-16">
      <h1 className="text-4xl italic py-10">Tech Stack</h1>
      <table className="w-full border border-black">
        <thead>
          <tr className="bg-olive-green text-left italic text-white">
            <th className="p-4 border border-black">Category</th>
            <th className="p-4 border border-black">Technologies</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(techDetails).map(([category, technologies], index) => (
            <tr key={index} className="bg-moss-green">
              <td className="p-4 font-bold border border-black">{category}</td>
              <td className="p-4 border border-black">{technologies.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tech;
