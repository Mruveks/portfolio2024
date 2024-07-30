import React from 'react';

const sections = ['hero', 'about', 'projects', 'tech', 'contact'];

function Navigation() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-soft-brown bg-opacity-90 backdrop-blur-sm">
      <ul className="flex justify-end space-x-16 py-4 px-16">
        {sections.map((section) => (
          <li key={section}>
            <button 
              onClick={() => scrollToSection(section)} 
              className="cursor-pointer"
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