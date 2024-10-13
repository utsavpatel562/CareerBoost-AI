import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="relative w-full p-10 h-[500px]">
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
        <div className="relative text-center z-10">
          <h2>Empowering Your Career with CareerBoost-AI</h2>
          <h3>Transforming Career Growth with Artificial Intelligence</h3>
          <p>
            The power of AI to transform your career growth with AI-driven mock
            interviews and personalized feedback. Achieve success with
            CareerBoost-AI.
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
