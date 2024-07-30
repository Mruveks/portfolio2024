import React, { useEffect, useRef, useState } from 'react';
import About from "./views/About";
import CTA from "./views/CTA";
import Projects from "./views/Projects";
import Hero from "./views/Hero";
import Tech from "./views/Tech";
import Navigation from "./components/Navigation";
import Footer from './views/Footer';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./App.css";

function App() {
  const sectionsRef = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollTimeoutRef = useRef(null);

  const handleScroll = (event) => {
    event.preventDefault();
    
    if (scrollTimeoutRef.current) return;

    const direction = event.deltaY > 0 ? 1 : -1;
    let nextIndex = currentIndex + direction;
    
    if (nextIndex >= 0 && nextIndex < sectionsRef.current.length) {
      setCurrentIndex(nextIndex);
      sectionsRef.current[nextIndex].scrollIntoView({
        behavior: 'smooth'
      });

      // Set timeout to prevent rapid scrolling
      scrollTimeoutRef.current = setTimeout(() => {
        scrollTimeoutRef.current = null;
      }, 500); // Adjust the timeout duration as needed
    }
  };

  useEffect(() => {
    const mainElement = document.querySelector('.smooth-scroll');
    mainElement.addEventListener('wheel', handleScroll);

    return () => {
      mainElement.removeEventListener('wheel', handleScroll);
    };
  }, [currentIndex]);

  return (
    <div className="app">
      <Navigation />
      <main className="smooth-scroll">
        <section id="hero" ref={el => sectionsRef.current[0] = el} tabIndex="0"><Hero /></section>
        <section id="about" ref={el => sectionsRef.current[1] = el} tabIndex="0"><About /></section>
        <section id="projects" ref={el => sectionsRef.current[2] = el} tabIndex="0"><Projects /></section>
        <section id="tech" ref={el => sectionsRef.current[3] = el} tabIndex="0"><Tech /></section>
        <span id="contact" ref={el => sectionsRef.current[4] = el} tabIndex="0"><CTA /></span>
        <footer ><Footer /></footer>
      </main>
    </div>
  );
}

export default App;
