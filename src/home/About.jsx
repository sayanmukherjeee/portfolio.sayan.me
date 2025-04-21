import React from "react";
import { useInView } from "react-intersection-observer";

const AboutSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <section
      id="about"
      ref={ref}
      className={`px-4 md:px-8 lg:px-16 py-20 about-section fade-in-section ${
        inView ? "is-visible" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold mb-16 text-center">WHO I AM</h2>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Column */}
          <div>
            {/* Paragraph */}
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              Hi there! I’m Sayan, a software engineer passionate about building
              impactful digital solutions. With hands-on experience in
              full-stack development and a strong foundation in MERN stack and
              Python, I create web applications that are not just efficient but
              also intuitive and user-centric.
            </p>

            {/* Skill Bars */}
            <div className="space-y-6">
              {/* HTML */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-800">HTML</span>
                  <span className="text-base text-gray-600">80%</span>
                </div>
                <div className="w-full bg-gray-200 h-3 rounded-full">
                  <div
                    className="bg-green-500 h-3 rounded-full"
                    style={{ width: "80%" }}
                  />
                </div>
              </div>

              {/* CSS */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-800">CSS</span>
                  <span className="text-base text-gray-600">70%</span>
                </div>
                <div className="w-full bg-gray-200 h-3 rounded-full">
                  <div
                    className="bg-green-500 h-3 rounded-full"
                    style={{ width: "70%" }}
                  />
                </div>
              </div>

              {/* BOOTSTRAP */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-800">BOOTSTRAP</span>
                  <span className="text-base text-gray-600">82%</span>
                </div>
                <div className="w-full bg-gray-200 h-3 rounded-full">
                  <div
                    className="bg-green-500 h-3 rounded-full"
                    style={{ width: "82%" }}
                  />
                </div>
              </div>

              {/* TAILWIND */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-800">TAILWIND</span>
                  <span className="text-base text-gray-600">80%</span>
                </div>
                <div className="w-full bg-gray-200 h-3 rounded-full">
                  <div
                    className="bg-green-500 h-3 rounded-full"
                    style={{ width: "80%" }}
                  />
                </div>
              </div>

              {/* MUI */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-800">MUI</span>
                  <span className="text-base text-gray-600">75%</span>
                </div>
                <div className="w-full bg-gray-200 h-3 rounded-full">
                  <div
                    className="bg-green-500 h-3 rounded-full"
                    style={{ width: "75%" }}
                  />
                </div>
              </div>

              {/* TYPESCRIPT */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-800">
                    TYPESCRIPT
                  </span>
                  <span className="text-base text-gray-600">55%</span>
                </div>
                <div className="w-full bg-gray-200 h-3 rounded-full">
                  <div
                    className="bg-green-500 h-3 rounded-full"
                    style={{ width: "55%" }}
                  />
                </div>
              </div>

              {/* EXPRESS */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-800">EXPRESS</span>
                  <span className="text-base text-gray-600">65%</span>
                </div>
                <div className="w-full bg-gray-200 h-3 rounded-full">
                  <div
                    className="bg-green-500 h-3 rounded-full"
                    style={{ width: "65%" }}
                  />
                </div>
              </div>

              {/* MONGODB */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-800">MONGODB</span>
                  <span className="text-base text-gray-600">65%</span>
                </div>
                <div className="w-full bg-gray-200 h-3 rounded-full">
                  <div
                    className="bg-green-500 h-3 rounded-full"
                    style={{ width: "65%" }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Paragraph */}
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              I focus on crafting dynamic web applications using modern
              technologies and frameworks, including JavaScript, React, Next.js,
              and backend tools like Node.js and Django, ensuring each project
              is both scalable and user-friendly.
            </p>

            {/* Skill Bars */}
            <div className="space-y-6">
              {/* JAVASCRIPT */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-800">
                    JAVASCRIPT
                  </span>
                  <span className="text-base text-gray-600">68%</span>
                </div>
                <div className="w-full bg-gray-200 h-3 rounded-full">
                  <div
                    className="bg-green-500 h-3 rounded-full"
                    style={{ width: "68%" }}
                  />
                </div>
              </div>

              {/* NEXT.JS */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-800">NEXT.JS</span>
                  <span className="text-base text-gray-600">75%</span>
                </div>
                <div className="w-full bg-gray-200 h-3 rounded-full">
                  <div
                    className="bg-green-500 h-3 rounded-full"
                    style={{ width: "75%" }}
                  />
                </div>
              </div>

              {/* REACT */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-800">REACT</span>
                  <span className="text-base text-gray-600">85%</span>
                </div>
                <div className="w-full bg-gray-200 h-3 rounded-full">
                  <div
                    className="bg-green-500 h-3 rounded-full"
                    style={{ width: "85%" }}
                  />
                </div>
              </div>

              {/* NODE */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-800">NODE</span>
                  <span className="text-base text-gray-600">65%</span>
                </div>
                <div className="w-full bg-gray-200 h-3 rounded-full">
                  <div
                    className="bg-green-500 h-3 rounded-full"
                    style={{ width: "65%" }}
                  />
                </div>
              </div>

              {/* PYTHON */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-800">PYTHON</span>
                  <span className="text-base text-gray-600">80%</span>
                </div>
                <div className="w-full bg-gray-200 h-3 rounded-full">
                  <div
                    className="bg-green-500 h-3 rounded-full"
                    style={{ width: "80%" }}
                  />
                </div>
              </div>

              {/* DJANGO */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-800">DJANGO</span>
                  <span className="text-base text-gray-600">55%</span>
                </div>
                <div className="w-full bg-gray-200 h-3 rounded-full">
                  <div
                    className="bg-green-500 h-3 rounded-full"
                    style={{ width: "55%" }}
                  />
                </div>
              </div>

              {/* SQL */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-800">SQL</span>
                  <span className="text-base text-gray-600">70%</span>
                </div>
                <div className="w-full bg-gray-200 h-3 rounded-full">
                  <div
                    className="bg-green-500 h-3 rounded-full"
                    style={{ width: "70%" }}
                  />
                </div>
              </div>

              {/* TKINTER */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-800">TKINTER</span>
                  <span className="text-base text-gray-600">60%</span>
                </div>
                <div className="w-full bg-gray-200 h-3 rounded-full">
                  <div
                    className="bg-green-500 h-3 rounded-full"
                    style={{ width: "60%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
