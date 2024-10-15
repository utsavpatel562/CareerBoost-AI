import React from "react";
const HomeStats = () => {
  return (
    <>
      <div className="text-center mt-10" id="howitworks">
        <h2 className="text-gray-800 font-extrabold text-[30px] md:text-[40px]">
          HOW IT WORKS
        </h2>
      </div>
      <div className="p-14 grid md:grid-cols-2 gap-5">
        <div className="rounded-lg border-4 border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6">
          <div className="text-lg my-4 font-semibold">
            <label className="bg-green-600 pl-3 pr-3 p-2 rounded-full text-white">
              Step - 1
            </label>
          </div>
          <div className="md:p-1 lg:p-1 sm:p-0">
            <a href="#">
              <h3 className="text-lg font-semibold text-green-700">
                Sign Up & Create Your Profile
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 md:text-justify sm:text-center">
              Start by signing up for CareerBoost-AI and creating your profile
              in just a few clicks. Fill in your details like industry, role,
              and career goals to get the most accurate mock interview
              experiences. Your information helps us tailor the questions and
              feedback to match your career needs.
            </p>

            <a
              href="#"
              className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-green-600"
            >
              Find out more
              <span
                aria-hidden="true"
                className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
              >
                &rarr;
              </span>
            </a>
          </div>
        </div>
        <div className="rounded-lg border-4 border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6">
          <div className="text-lg my-4 font-semibold">
            <label className="bg-green-600 pl-3 pr-3 p-2 rounded-full text-white">
              Step - 2
            </label>
          </div>
          <div className="md:p-1 lg:p-1 sm:p-0">
            <a href="#">
              <h3 className="text-lg text-green-700 font-semibold">
                Choose Your Interview Type
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 text-justify">
              Select from a wide range of interview types, such as technical,
              behavioral, or case-based interviews. Whether you're preparing for
              a software engineering role or a marketing position,
              CareerBoost-AI provides customized mock interview scenarios to fit
              your needs.
            </p>

            <a
              href="#"
              className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-green-600"
            >
              Find out more
              <span
                aria-hidden="true"
                className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
              >
                &rarr;
              </span>
            </a>
          </div>
        </div>
        <div className="rounded-lg border-4 border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6">
          <div className="text-lg my-4 font-semibold">
            <label className="bg-green-600 pl-3 pr-3 p-2 rounded-full text-white">
              Step - 3
            </label>
          </div>
          <div className="md:p-1 lg:p-1 sm:p-0">
            <a href="#">
              <h3 className="mt-0.5 text-lg font-semibold text-green-700">
                AI-Driven Mock Interview
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 text-justify">
              Experience a real-time, dynamic mock interview powered by
              cutting-edge AI. Answer questions based on the job role you
              selected, while the AI adapts to your responses to simulate an
              actual interview setting. Practice as many times as you want to
              refine your skills.
            </p>

            <a
              href="#"
              className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-green-600"
            >
              Find out more
              <span
                aria-hidden="true"
                className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
              >
                &rarr;
              </span>
            </a>
          </div>
        </div>
        <div className="rounded-lg border-4 border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6">
          <div className="text-lg my-4 font-semibold">
            <label className="bg-green-600 pl-3 pr-3 p-2 rounded-full text-white">
              Step - 4
            </label>
          </div>
          <div className="md:p-1 lg:p-1 sm:p-0">
            <a href="#">
              <h3 className="mt-0.5 text-lg font-semibold text-green-700">
                Get Detailed Feedback
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 text-justify">
              After completing your interview, receive immediate feedback with
              insights on your strengths and areas for improvement.
              CareerBoost-AI provides in-depth suggestions and tips to enhance
              your answers, helping you get interview-ready. Use this feedback
              to continuously improve and ace real interviews.
            </p>

            <a
              href="#"
              className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-green-600"
            >
              Find out more
              <span
                aria-hidden="true"
                className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
              >
                &rarr;
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeStats;
