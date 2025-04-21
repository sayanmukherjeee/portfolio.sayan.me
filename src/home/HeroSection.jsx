// src/herosection.jsx

import React from "react";
import { useInView } from "react-intersection-observer";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LightbulbIcon from "@mui/icons-material/Lightbulb";

const HeroSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <section
      id="hero"
      ref={ref}
      className={`flex flex-col md:flex-row items-center justify-between px-3 md:px-8 lg:px-16 hero-section fade-in-section ${
        inView ? "is-visible" : ""
      }`}
    >
      {/* Left Side: Text Content */}
      <div className="md:w-1/2 mb-8">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 leading-tight">
          HI<span className="text-green-500">,</span> I
          <span className="text-green-500">'</span>M SAYAN
          <span className="text-green-500">.</span>
          <br />A SOFTWARE <span>DEVELOPER BASED IN INDIA</span>
        </h1>
        <p className="text-gray-700 text-lg mb-4 px-1">
          WEBSITE <span className="text-green-500 mx-2">•</span> E-COMMERCE
          <span className="text-green-500 mx-2">•</span> APPLICATION
        </p>
        {/* New Icon Row with Location and Light Bulb Icons */}
        <div className="flex space-x-6 mb-6">
          <div className="flex items-center space-x-2">
            <LocationOnIcon className="text-green-500" fontSize="small" />
            <span className="text-gray-800">Bankura, WB, India</span>
          </div>
          <div className="flex items-center space-x-2">
            <LightbulbIcon className="text-green-500" fontSize="small" />
            <span className="text-gray-800">Creative Solutions</span>
          </div>
        </div>
        <a
          href="#hireMe"
          className="bg-green-500 text-white ml-1 py-3 px-8 rounded hover:bg-green-600 transition-colors duration-200"
        >
          Hire Me
        </a>
      </div>
      {/* Right Side: Hero Image */}
      <div className="md:w-1/3 mt-4 md:mt-0">
        <img
          src="/images/sayan.png"
          alt="Hero Section"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default HeroSection;
