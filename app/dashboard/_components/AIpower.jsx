import React from "react";
import { SiGooglegemini } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiDrizzle } from "react-icons/si";
const AIpower = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-14 justify-between w-full p-14">
        <div className="md:text-4xl text-3xl font-extrabold text-gray-700 md:mt-10">
          <span className="text-green-600">AI Insights:</span> The Technology
          Behind CareerBoost-AI
          <p className="text-xl font-medium md:text-justify my-5">
            At CareerBoost-AI, we utilize a combination of cutting-edge tools
            and technologies to provide an immersive, AI-powered mock interview
            experience. Here's a deep dive into the core components that make
            CareerBoost-AI work
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-3 p-5">
          <div className="bg-zinc-800 p-4 text-slate-200 md:h-[200px] rounded-xl shadow-md">
            <span className="flex gap-2 text-xl font-semibold">
              <SiGooglegemini className="bg-slate-200 w-6 h-6 p-1 rounded-full text-blue-700" />
              Gemini AI
            </span>
            <p className="text-md my-2">
              CareerBoost-AI is the Gemini AI, a powerful engine responsible for
              generating intelligent, role-specific interview questions.
            </p>
          </div>
          <div className="bg-zinc-800 p-4 text-slate-200 md:h-[200px] rounded-xl shadow-md">
            <span className="flex gap-2 text-xl font-semibold">
              <RiNextjsFill className="bg-slate-200 w-6 h-6 p-1 rounded-full text-zinc-800" />
              Next.js
            </span>
            <p className="text-md my-2">
              CareerBoost-AI using Next.js, a powerful React framework that
              allows for server-side rendering (SSR).
            </p>
          </div>
          <div className="bg-zinc-800 p-4 text-slate-200 md:h-[200px] rounded-xl shadow-md">
            <span className="flex gap-2 text-xl font-semibold">
              <FaReact className="bg-slate-200 w-6 h-6 p-1 rounded-full text-sky-500" />
              React
            </span>
            <p className="text-md my-2">
              The user interface is built using React, one of the most popular
              libraries for building dynamic web applications.
            </p>
          </div>
          <div className="bg-zinc-800 p-4 text-slate-200 md:h-[200px] rounded-xl shadow-md">
            <span className="flex gap-2 text-xl font-semibold">
              <SiDrizzle className="bg-slate-200 w-6 h-6 p-1 rounded-full text-green-600" />
              Drizzle ORM
            </span>
            <p className="text-md my-2">
              For managing all database operations, we use Drizzle ORM, a modern
              and type-safe ORM. Drizzle ORM helps us maintain reliability
              across our database layer.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIpower;
