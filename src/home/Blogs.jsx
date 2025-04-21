// src/components/Blogs.jsx

import React from "react";
import { useInView } from "react-intersection-observer";
import { FaRegComment } from "react-icons/fa";
import blogData from "../data/blogData.json";

const Blogs = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <section
      id="blogs"
      ref={ref}
      className={`bg-black py-16 px-4 md:px-8 lg:px-16 blogs-section fade-in-section ${
        inView ? "is-visible" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          MY BLOG
        </h2>

        {/* Grid of blog cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogData.map((blog) => (
            <div
              key={blog.id}
              className="flex flex-col md:flex-row w-full overflow-hidden bg-white"
              style={{ minHeight: "280px" }}
            >
              {/* Left Side: Image with date box */}
              <div className="relative w-full md:w-1/2 h-48 md:h-auto">
                <img
                  src={blog.imageUrl}
                  alt={blog.title}
                  className="w-full h-full object-cover filter grayscale"
                />
                {/* Date box in top-left corner */}
                <div className="absolute top-2 left-2 bg-black text-white px-3 py-2 flex flex-col items-center">
                  <span className="text-2xl font-bold leading-none">
                    {blog.dateDay}
                  </span>
                  <span className="text-sm">{blog.dateMonth}</span>
                </div>
              </div>

              {/* Right Side: green background with title & comments */}
              <div className="w-full md:w-1/2 bg-green-600 text-white p-6 flex flex-col justify-between">
                {/* Title (clickable) */}
                <a
                  href="#!"
                  className="text-xl md:text-2xl font-bold hover:underline mb-4 block"
                >
                  {blog.title}
                </a>

                {/* Comments row at bottom */}
                <div className="flex items-center text-white text-sm">
                  <FaRegComment className="mr-1" />
                  <span>{blog.comments} Comments</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
