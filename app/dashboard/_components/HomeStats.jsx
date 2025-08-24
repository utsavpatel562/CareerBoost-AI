import React from "react";

function HomeStats() {
  return (
    <div className="select-none bg-gray-900 p-4 min-h-screen">
      <div className="flex flex-col md:flex-row items-center justify-between md:gap-32 p-4 md:p-10">
        {/* For Side Image */}
        <div className="w-full md:w-fit flex justify-center md:justify-start mb-8 md:mb-0">
          <img
            src="model.png"
            alt="img"
            className="w-3/4 sm:w-2/3 md:w-[640px] max-w-full"
          />
        </div>

        {/* Right Content */}
        <div className="w-full">
          <div
            className="py-6 md:py-10 text-center md:text-right"
            id="howitworks"
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#cbcecc] to-[#828386]">
                HOW IT WORKS
              </span>
            </h2>
            <p className="text-slate-300 py-2 text-sm sm:text-base">
              Practice. Improve. Succeed. The CareerBoost-AI Way.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mx-auto">
            {/* Card 1 */}
            <div className="p-5 rounded-lg backdrop-blur-lg border border-white/10 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-white/20 hover:scale-105 active:scale-95 transition-all duration-300 ease-out cursor-pointer hover:border-white/30 hover:bg-gradient-to-tr hover:from-white/10 hover:to-black/40 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
              <h2 className="text-slate-50 font-medium text-lg">
                <span className="text-blue-300">STEP 1</span> Sign Up & Create
                Your Profile
              </h2>
              <p className="text-slate-100 py-2 text-sm sm:text-base">
                Start by signing up for CareerBoost-AI and creating your profile
                in just a few clicks. Your information helps us tailor the
                questions and feedback to match.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-5 rounded-lg backdrop-blur-lg border border-white/10 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-white/20 hover:scale-105 active:scale-95 transition-all duration-300 ease-out cursor-pointer hover:border-white/30 hover:bg-gradient-to-tr hover:from-white/10 hover:to-black/40 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
              <h2 className="text-slate-50 font-medium text-lg">
                <span className="text-blue-300">STEP 2</span> Choose Your
                Interview Type
              </h2>
              <p className="text-slate-100 py-2 text-sm sm:text-base">
                Select from a wide range of interview types, whether you're
                preparing for a software engineering role or a marketing
                position, we provide customized mock interview scenarios to fit
                your needs.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-5 rounded-lg backdrop-blur-lg border border-white/10 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-white/20 hover:scale-105 active:scale-95 transition-all duration-300 ease-out cursor-pointer hover:border-white/30 hover:bg-gradient-to-tr hover:from-white/10 hover:to-black/40 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
              <h2 className="text-slate-50 font-medium text-lg">
                <span className="text-blue-300">STEP 3</span> AI-Driven Mock
                Interview
              </h2>
              <p className="text-slate-100 py-2 text-sm sm:text-base">
                Experience a real-time, dynamic mock interview powered by AI,
                which adapts to your responses to simulate an actual interview
                setting. Practice as many times as you want to refine your
                skills.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-5 rounded-lg backdrop-blur-lg border border-white/10 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-white/20 hover:scale-105 active:scale-95 transition-all duration-300 ease-out cursor-pointer hover:border-white/30 hover:bg-gradient-to-tr hover:from-white/10 hover:to-black/40 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
              <h2 className="text-slate-50 font-medium text-lg">
                <span className="text-blue-300">STEP 4</span> Get Detailed
                Feedback
              </h2>
              <p className="text-slate-100 py-2 text-sm sm:text-base">
                After completing your interview, receive immediate feedback with
                insights on your strengths and areas for improvement.
                CareerBoost-AI provides in-depth suggestions and tips to enhance
                your answers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeStats;
