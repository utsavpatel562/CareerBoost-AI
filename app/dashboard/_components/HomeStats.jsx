import React from "react";
import { Tabs } from "../../../components/ui/tabs";

const HomeStats = () => {
  return (
    <>
      <div className="text-center mt-4">
        <h2 className="text-gray-800 font-extrabold text-[30px]">
          What We Provide
        </h2>
      </div>
      <div className="flex justify-center gap-7 p-7">
        <div className="card bg-base-100 w-96 shadow-xl rounded-lg cursor-pointer">
          <figure>
            <img
              className="rounded-tr-lg rounded-tl-lg"
              src="/aiimg.jpg"
              alt="AI Image"
            />
          </figure>
          <div className="card-body p-6">
            <h2 className="card-title text-lg font-bold flex gap-2">
              AI-Driven Mock Interviews
              <div className="badge badge-secondary font-light text-sm bg-cyan-600 text-gray-100 p-1 pr-3 pl-3 rounded-full">
                NEW
              </div>
            </h2>
            <p className="my-2">
              Simulate real interview scenarios with AI to help you practice and
              prepare effectively.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl rounded-lg cursor-pointer">
          <figure>
            <img
              className="rounded-tr-lg rounded-tl-lg"
              src="/feedback1.jpg"
              alt="feedback"
            />
          </figure>
          <div className="card-body p-6">
            <h2 className="card-title text-lg font-bold flex gap-2">
              Personalized Feedback
            </h2>
            <p className="my-2">
              Receive detailed feedback tailored to your performance to improve
              your skills.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl rounded-lg cursor-pointer">
          <figure>
            <img
              className="rounded-tr-lg rounded-tl-lg"
              src="/careergrowth.jpg"
              alt="careerInsights"
            />
          </figure>
          <div className="card-body p-6">
            <h2 className="card-title text-lg font-bold flex gap-2">
              Comprehensive Career Insights
            </h2>
            <p className="my-2">
              Access valuable insights and analytics to understand your areas
              for improvement.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeStats;
