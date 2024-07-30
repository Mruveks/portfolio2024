import React from 'react';
import About from "./views/About";
import CTA from "./views/CTA";
import Projects from "./views/Projects";
import Hero from "./views/Hero";
import Tech from "./views/Tech";
import Navigation from "./components/Navigation";
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
        <section id="contact"><CTA /></section>
      </main>
    </div>
  );
}

export default App;