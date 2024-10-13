import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineWidgets } from "react-icons/md";

const HeroSection = () => {
  return (
    <>
      <div className="relative w-full h-[400px] md:h-[500px] flex justify-center items-center p-6 md:p-10">
        {/* Background image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/bgnew2.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.5, // Adjust the opacity as needed
            zIndex: -1, // Make sure the background stays behind the content
          }}
        ></div>

        {/* Content */}
        <div className="relative text-center z-10 max-w-4xl">
          <h2 className="text-2xl md:text-4xl font-extrabold text-green-900">
            Empowering Your Career with CareerBoost-AI
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mt-2 text-green-800">
            Transforming Career Growth with Artificial Intelligence
          </h3>
          <p className="text-lg md:text-xl mt-2 text-center">
            The power of AI to transform your career growth with AI-driven mock
            interviews and personalized feedback. Achieve success with
            CareerBoost-AI.
          </p>
          <div className="flex flex-col md:flex-row gap-2 justify-center mt-6 md:mt-10">
            <Link href={"/sign-up"}>
              <Button className="flex justify-center gap-2 bg-slate-800 p-4 md:p-6 text-base md:text-md hover:bg-slate-700 rounded-lg">
                Register Now
                <AiOutlineUser />
              </Button>
            </Link>
            <Link href={"/sign-up"}>
              <Button className="flex justify-center gap-2 bg-green-900 p-4 md:p-6 hover:bg-green-700 text-base md:text-md rounded-lg">
                Know More
                <MdOutlineWidgets />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
