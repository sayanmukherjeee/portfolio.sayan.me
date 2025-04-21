import React from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

function StatsSection() {
  const stats = [
    {
      iconPath:
        "M12 2a9 9 0 019 9v4a4 4 0 01-4 4h-3v2H10v-2H7a4 4 0 01-4-4v-4a9 9 0 019-9z",
      label: "Happy Customers",
      end: 10,
    },
    {
      iconPath: "M12 1v22m11-11H1",
      label: "Project Solutions",
      end: 40,
    },
    {
      iconPath: "M2 12l9 6 11-10",
      label: "Total Company",
      end: 2,
    },
    {
      iconPath: "M12 2h4v4h-4zM4 10h4v4H4zM16 10h4v4h-4zM10 18h4v4h-4z",
      label: "Project Completed",
      end: 20,
    },
  ];
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="stats"
      ref={ref}
      className={`bg-black -mt-6 pb-8 md:px-4 lg:px-12 stats-section fade-in-section ${
        inView ? "is-visible" : ""
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ iconPath, label, end }, idx) => (
            <div
              key={idx}
              className="p-6 rounded text-center transition-colors duration-500 hover:bg-green-600"
            >
              <div className="mb-3 flex justify-center">
                <svg
                  className="w-12 h-12 text-white group-hover:text-black"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d={iconPath} />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">{label}</h3>
              <p className="text-2xl font-bold text-white">
                {inView ? (
                  <CountUp start={0} end={end} duration={4} redraw={true} />
                ) : (
                  0
                )}
                +
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
