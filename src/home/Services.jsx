"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import services from "../data/servicesData.json";

const Services = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <section
      id="services"
      ref={ref}
      className={`bg-black text-white py-20 px-4 md:px-8 lg:px-16 services-section fade-in-section ${
        inView ? "is-visible" : ""
      }`}
    >
      <h2 className="text-5xl font-bold text-center mb-16">WHAT I DO</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-screen-xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-green-600 p-12 rounded-md shadow-xl flex flex-col lg:flex-row justify-between gap-12 min-h-[200px] w-full"
          >
            <h3 className="text-4xl font-bold uppercase mb-6">
              {service.title}
            </h3>
            <p className="text-white text-xl flex-grow">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
