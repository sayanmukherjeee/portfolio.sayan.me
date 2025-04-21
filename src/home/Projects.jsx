import React, { useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { ProjectsData } from "../data/ProjectsData";

const categories = Object.keys(ProjectsData);

const ProjectDetails = ({ project, onBack }) => {
  const sliderRef = useRef();

  const scrollByWidth = (direction = 1) => {
    if (!sliderRef.current) return;
    const { clientWidth } = sliderRef.current;
    sliderRef.current.scrollBy({
      left: direction * clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="text-center py-12 px-4">
      <button
        onClick={onBack}
        className="mb-6 px-5 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
      >
        ← Back
      </button>
      <h2 className="text-3xl font-bold mb-6">{project.name}</h2>

      <div className="relative max-w-3xl mx-auto">
        {/* ← Prev (desktop only) */}
        <button
          onClick={() => scrollByWidth(-1)}
          className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/70 z-10"
        >
          ‹
        </button>

        {/* Scroll‑snap container */}
        <div
          ref={sliderRef}
          className="overflow-x-auto scroll-smooth snap-x snap-mandatory flex gap-4 px-4 py-6"
        >
          {project.images.map((src, i) => (
            <div
              key={i}
              className="
                snap-center
                flex-shrink-0
                w-full
                h-[340px] sm:h-[500px] md:h-[340px]
                rounded-lg
                overflow-hidden
                shadow-lg
              "
            >
              <img
                src={src}
                alt={`${project.name} screenshot ${i + 1}`}
                className="object-cover rounded-lg"
                style={{
                  width: "800px",
                  height: "340px",
                  maxWidth: "100%",
                  margin: "0 auto",
                }}
              />
            </div>
          ))}
        </div>

        {/* → Next (desktop only) */}
        <button
          onClick={() => scrollByWidth(1)}
          className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/70 z-10"
        >
          ›
        </button>
      </div>

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
        >
          Visit Project
        </a>
      )}
    </div>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [selectedProject, setSelectedProject] = useState(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  if (selectedProject) {
    return (
      <ProjectDetails
        project={selectedProject}
        onBack={() => setSelectedProject(null)}
      />
    );
  }

  return (
    <section
      id="projects"
      ref={ref}
      className={`text-center py-12 px-3 lg:px-4 projects-section fade-in-section ${
        inView ? "is-visible" : ""
      }`}
    >
      <h2 className="text-4xl font-bold mb-2 text-gray-800">My Projects</h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-8 text-lg">
        Explore my creative works across various categories. Click to filter
        and discover more.
      </p>

      {/* Category Buttons */}
      <div className="flex justify-center flex-wrap gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2.5 border-2 text-sm font-semibold transition-all duration-300 rounded-md ${
              activeCategory === cat
                ? "bg-green-600 text-white border-green-600"
                : "text-gray-600 border-gray-300 hover:bg-green-50 hover:border-green-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-12 mx-auto">
        {ProjectsData[activeCategory].map((project, index) => (
          <div
            key={index}
            className="relative group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 rounded-md border-8 border-green-500"
          >
            <div className="relative h-72 overflow-hidden rounded-md">
              <img
                src={project.images[0]}
                alt={project.name}
                className="w-full h-full object-cover transform transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] scale-100 group-hover:scale-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
              <h3 className="text-white text-xl font-bold mb-3">
                {project.name}
              </h3>
              <div className="flex gap-4">
                <button
                  className="bg-white/10 backdrop-blur-lg text-white px-5 py-2.5 text-sm hover:bg-white/20 transition"
                  onClick={() => setSelectedProject(project)}
                >
                  View Demo
                </button>
                {project.link ? (
                  <button
                    className="bg-green-600/90 backdrop-blur-lg text-white px-5 py-2.5 text-sm hover:bg-green-700 transition"
                    onClick={() =>
                      window.open(project.link, "_blank", "noopener,noreferrer")
                    }
                  >
                    Details
                  </button>
                ) : (
                  <button
                    disabled
                    className="bg-gray-500/40 text-white px-5 py-2.5 text-sm cursor-not-allowed"
                  >
                    Details
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
