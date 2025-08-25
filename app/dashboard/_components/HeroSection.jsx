"use client";
import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
export default () => {
  const [state, setState] = useState(false);
  const { isSignedIn } = useUser();
  const navigation = [
    { title: "Home", path: "/" },
    { title: "Dashboard", path: "/dashboard/" },
    { title: "How it works", path: "/#howitworks" },
    { title: "About Developer", path: "/aboutdeveloper/" },
  ];

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest(".menu-btn")) setState(false);
    };
  }, []);

  const Brand = () => (
    <div className="flex items-center justify-between py-5 md:block">
      <a href="javascript:void(0)">
        <img src="/logo.png" width={200} height={200} alt="Float UI logo" />
      </a>
      <div className="md:hidden">
        <button
          className="menu-btn text-gray-400 hover:text-gray-300"
          onClick={() => setState(!state)}
        >
          {state ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-900">
      <header>
        <div className={`md:hidden ${state ? "mx-2 pb-5" : "hidden"}`}>
          <Brand />
        </div>
        <nav
          className={`pb-5 md:text-sm ${
            state
              ? "absolute z-20 top-0 inset-x-0 bg-gray-800 rounded-xl mx-2 mt-2 md:mx-0 md:mt-0 md:relative md:bg-transparent"
              : ""
          }`}
        >
          <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
            <Brand />
            <div
              className={`flex-1 items-center mt-8 md:mt-0 md:flex ${
                state ? "block" : "hidden"
              } `}
            >
              <ul className="flex-1 justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                {navigation.map((item, idx) => {
                  return (
                    <li
                      key={idx}
                      className="text-gray-300 hover:bg-slate-800 font-medium rounded-full hover:text-slate-50 hover:font-medium p-2 text-md md:pr-4 md:pl-4"
                    >
                      <a href={item.path} className="block">
                        {item.title}
                      </a>
                    </li>
                  );
                })}
                <li>
                  {isSignedIn ? (
                    <a
                      href="/dashboard"
                      className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-sky-500 hover:bg-sky-400 active:bg-sky-600 duration-150 rounded-full md:inline-flex"
                    >
                      Dashboard
                    </a>
                  ) : (
                    <a
                      href="/sign-in"
                      className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-sky-500 hover:bg-sky-400 active:bg-sky-600 duration-150 rounded-full md:inline-flex"
                    >
                      Login
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <section className="relative">
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
          <div className="select-none space-y-5 max-w-4xl mx-auto text-center">
            <h2 className="text-4xl text-white font-extrabold mx-auto md:text-5xl">
              Empowering Your Career with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7ddd9f] to-[#6a8df7]">
                CareerBoost-AI
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-400">
              The power of AI to transform your career growth with AI-driven
              mock interviews and personalized feedback. Achieve success with
              CareerBoost-AI.
            </p>
            <div className="justify-center items-center gap-x-3 sm:flex">
              <a href="/#insights">
                <button className="w-full px-3 py-2.5 text-gray-400 bg-gray-900 duration-150 outline-none rounded-lg shadow sm:max-w-sm sm:w-auto">
                  Know More
                </button>
              </a>
              <a href="/sign-up">
                <button className="flex items-center justify-center gap-x-2 py-2.5 px-4 mt-3 w-full text-sm text-white font-medium bg-sky-500 hover:bg-sky-400 active:bg-sky-600 duration-150 rounded-lg sm:mt-0 sm:w-auto">
                  Get started
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </a>
            </div>
            <div className="flex justify-center items-center gap-x-4 text-gray-400 text-sm">
              <p>
                <span className="text-gray-100">500+</span> registered members
              </p>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"
          style={{
            background:
              "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
          }}
        ></div>
      </section>
    </div>
  );
};
