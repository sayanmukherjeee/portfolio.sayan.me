// App.js
import React from "react";
import HeroSection from "./home/HeroSection";
import About from "./home/About";
import Services from "./home/Services";
import StatsSection from "./home/StatsSection";
import Projects from "./home/Projects";
import Blogs from "./home/Blogs";
import HireMe from "./home/HireMe"; // Assuming HireMe is a component that remains unchanged

function App() {
  return (
    <>
      <section id="heroSection">
        <HeroSection />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="stats">
        <StatsSection />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="blogs">
        <Blogs />
      </section>

      <section id="hireMe">
        <HireMe />
      </section>
    </>
  );
}

export default App;
