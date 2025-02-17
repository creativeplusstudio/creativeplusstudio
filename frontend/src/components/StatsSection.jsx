import React from "react";

export function StatsSection() {
  return (
    <section
      className="py-12 px-6 md:px-20 lg:px-40"
      aria-labelledby="stats-section"
    >
      <h2 id="stats-section" className="sr-only">
        Key statistics about our achievements
      </h2>
      
      <div className="flex flex-col md:flex-row justify-around items-center text-center space-y-8 md:space-y-0">
        
        {/* Stat 1 */}
        <div
          className="transform transition-transform duration-300 hover:scale-105"
          aria-labelledby="clients-served"
        >
          <h3
            id="clients-served"
            className="text-4xl md:text-5xl font-bold text-orange-600"
          >
            300+
          </h3>
          <p className="text-gray-700 text-lg mt-2">Clients We Served</p>
        </div>

        {/* Divider */}
        <div className="hidden md:block h-16 border-l border-gray-300 mx-6"></div>

        {/* Stat 2 */}
        <div
          className="transform transition-transform duration-300 hover:scale-105"
          aria-labelledby="projects-completed"
        >
          <h3
            id="projects-completed"
            className="text-4xl md:text-5xl font-bold text-orange-600"
          >
            800+
          </h3>
          <p className="text-gray-700 text-lg mt-2">Projects Completed</p>
        </div>

        {/* Divider */}
        <div className="hidden md:block h-16 border-l border-gray-300 mx-6"></div>

        {/* Stat 3 */}
        <div
          className="transform transition-transform duration-300 hover:scale-105"
          aria-labelledby="years-of-experience"
        >
          <h3
            id="years-of-experience"
            className="text-4xl md:text-5xl font-bold text-orange-600"
          >
            5+
          </h3>
          <p className="text-gray-700 text-lg mt-2">Years of Experience</p>
        </div>

      </div>
    </section>
  );
}
