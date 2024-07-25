import React from "react";
import { Button } from "../../../components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <>
      <div className="bg-gray-950 p-6 md:p-12 flex flex-col md:flex-row gap-7">
        <img
          src="/interviewImg2.jpg"
          alt="myInterviewImage"
          className="w-full md:w-[400px] rounded-xl"
          style={{
            boxShadow: "0px 0px 43px -12px rgba(216, 216, 221, 1)",
          }}
        />
        <div className="w-full rounded-xl p-4 md:p-8">
          <h2 className="text-gray-300 text-[20px] md:text-[35px] font-extrabold">
            Empowering Your Career with CareerBoost-AI
          </h2>
          <label className="text-gray-400 font-bold">
            Transforming Career Growth with Artificial Intelligence
          </label>
          <p className="text-cyan-100 w-full md:w-[700px] mt-6">
            The power of AI to transform your career growth with AI-driven mock
            interviews and personalized feedback. Achieve success with
            CareerBoost-AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 my-7">
            <Link href="/dashboard">
              <Button className="rounded-full bg-cyan-600 hover:bg-cyan-700 flex items-center justify-center">
                Get Started
                <img
                  src="/rightarrow.svg"
                  alt="rightarrow"
                  width={25}
                  className="ml-2"
                />
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button className="bg-gray-700 rounded-full hover:bg-gray-500 flex items-center justify-center">
                Dashboard
                <img
                  src="/dashboard.svg"
                  alt="home"
                  width={20}
                  className="ml-2"
                />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
