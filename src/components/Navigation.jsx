import React from "react";

const sections = ["hero", "about", "projects", "tech", "contact"];

function Navigation({ activeSection }) {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, null, " "); // Update the URL without the hash
    }
  };

  return (
    <nav className="fixed flex text-xl py-8 px-16 items-center justify-between top-0 left-0 right-0 z-10 bg-soft-brown bg-opacity-80 backdrop-blur-sm">
      <button onClick={() => scrollToSection("hero")} className="cursor-pointer">
        kubamrowiec
      </button>
      <ul className="flex justify-end space-x-16">
        {sections
          .filter((section) => section !== "hero")
          .map((section) => (
            <li key={section}>
              <button
                onClick={() => scrollToSection(section)}
                className={`cursor-pointer ${activeSection === section ? "active" : ""}`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </li>
          ))}
      </ul>
    </nav>
  );
}

export default Navigation;
