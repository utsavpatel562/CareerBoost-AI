import { Button } from "@/components/ui/button";
import React from "react";

const AIpower = () => {
  return (
    <section className="min-h-screen w-full px-4 sm:px-6 md:px-8 xl:px-20 text-white bg-gray-900 flex items-center">
      <div className="flex container flex-col md:flex-row items-center md:items-start gap-5 sm:gap-12 md:gap-16 w-full">
        {/* Left Side */}
        <div className="w-full md:w-1/2 relative sm:px-10 md:p-0">
          <div className="text-white sm:p-6 sm:pl-10 md:pr-20">
            {/* Vertical Text */}
            <div className="absolute hidden -left-2 sm:left-8 md:-left-12 xl:-left-16 top-14 sm:top-20 md:top-16 xl:top-24 rotate-[-90deg] text-xs sm:text-sm tracking-widest md:flex flex-row gap-2">
              <div className="w-6 sm:w-8 md:w-10 xl:w-16 h-[2px] bg-white mt-2 mx-auto"></div>
              <p className="select-none">TECH STACK</p>
            </div>

            {/* Main Heading */}
            <h2 className="select-none text-xl md:text-left text-center sm:text-3xl md:text-3xl xl:text-6xl font-bold leading-tight">
              <span className="text-blue-400">AI Insights</span> The Tech Behind
              CareerBoost-AI
            </h2>
          </div>

          <p className="select-none md:mt-0 mt-5 text-center sm:p-3 text-gray-400 text-md sm:text-sm leading-relaxed md:text-justify">
            At CareerBoost-AI, we utilize a combination of cutting-edge tools
            and technologies to provide an immersive, AI-powered mock interview
            experience. Here's a deep dive into the core components that make
            CareerBoost-AI work
          </p>
        </div>

        {/* Right Side (Static Icons Grid) */}
        <div className="select-none w-full md:w-1/2 flex justify-center items-center">
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
            {/* Static Icons */}
            {[
              { src: "/nextjs.png", name: "NextJS" },
              { src: "/gemini.png", name: "Gemini AI" },
              { src: "/React.png", name: "ReactJS" },
              { src: "/js.png", name: "JavaScript" },
              { src: "/drizzle.png", name: "Drizzle ORM" },
              { src: "/nodejs.png", name: "NodeJS" },
              { src: "/tailwind.png", name: "Tailwind CSS" },
              { src: "/git.png", name: "Git" },
            ].map((tech, idx) => (
              <div className="text-center" key={idx}>
                <div className="p-3 sm:p-4 bg-gray-50 rounded-lg flex flex-col justify-center items-center">
                  <img
                    src={tech.src}
                    className="w-8 sm:w-10 md:w-[50px]"
                    alt={tech.name}
                  />
                  <p className="text-[10px] sm:text-xs mt-2 text-slate-800 font-semibold">
                    {tech.name}
                  </p>
                </div>
              </div>
            ))}

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 items-center col-span-3 md:mt-0 mt-2 md:col-span-4 justify-center">
              <Button className="rounded-full bg-slate-700 hover:bg-blue-400 border border-slate-700 w-full sm:w-auto">
                GitHub
              </Button>
              <Button className="rounded-full bg-slate-700 hover:bg-blue-400 border border-slate-700 w-full sm:w-auto">
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIpower;
