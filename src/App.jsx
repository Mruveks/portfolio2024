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
  const [activeSection, setActiveSection] = useState('hero');
  const scrollTimeoutRef = useRef(null);

  const handleScroll = (event) => {
    event.preventDefault();

    if (scrollTimeoutRef.current) return;

    const direction = event.deltaY > 0 ? 1 : -1;
    const currentIndex = sectionsRef.current.findIndex(section => section.id === activeSection);
    const nextIndex = currentIndex + direction;

    if (nextIndex >= 0 && nextIndex < sectionsRef.current.length) {
      setActiveSection(sectionsRef.current[nextIndex].id);
      sectionsRef.current[nextIndex].scrollIntoView({
        behavior: 'smooth'
      });

      scrollTimeoutRef.current = setTimeout(() => {
        scrollTimeoutRef.current = null;
      }, 1000);
    }
  };

  useEffect(() => {
    const mainElement = document.querySelector('.smooth-scroll');
    mainElement.addEventListener('wheel', handleScroll);

    return () => {
      mainElement.removeEventListener('wheel', handleScroll);
    };
  }, [activeSection]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionsRef.current.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="app">
      <Navigation activeSection={activeSection} />
      <main className="smooth-scroll">
        <section id="hero" ref={el => sectionsRef.current[0] = el}><Hero /></section>
        <section id="about" ref={el => sectionsRef.current[1] = el}><About /></section>
        <section id="projects" ref={el => sectionsRef.current[2] = el}><Projects /></section>
        <section id="tech" ref={el => sectionsRef.current[3] = el}><Tech /></section>
        <span id="contact" ref={el => sectionsRef.current[4] = el}><CTA /></span>
        <span><Footer /></span>
      </main>
    </div>
  );
}

export default App;
