import React from "react";
import { Button } from "../../../components/ui/button";

const HeroSection = () => {
  return (
    <>
      <div className="bg-gray-950 p-12 flex flex-col md:flex-row gap-7">
        <img
          src="/interviewImg1.jpg"
          alt="myInterviewImage"
          className="w-full md:w-[300px] rounded-xl"
          style={{
            boxShadow: "0px 0px 43px -12px rgba(216, 216, 221, 1)",
          }}
        />
        <div className="w-full rounded-xl p-8">
          <h2 className="text-gray-300 text-[25px] md:text-[35px] font-extrabold">
            Empowering Your Career with CareerBoost-AI
          </h2>
          <label className="text-gray-400 font-bold">
            Transforming Career Growth with Artificial Intelligence
          </label>
          <div>
            <Button className="">Get Started</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
