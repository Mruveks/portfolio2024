import React from 'react';
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
  return (
    <div className="app">
      <Navigation />
      <main className="smooth-scroll">
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="tech"><Tech /></section>
        <span id="contact"><CTA /></span>
        <footer><Footer /></footer>
      </main>
    </div>
  );
}

export default App;