"use client";
import { useState } from "react";
import { useUser, UserButton, SignInButton } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const [state, setState] = useState(false);
  const { isSignedIn } = useUser();
  const router = useRouter();
  const path = usePathname();

  const navigation = [
    { title: "Home", path: "/" },
    { title: "How it works", path: "/#howitworks" },
    { title: "About Developer", path: "/aboutdeveloper" },
  ];

  const Brand = () => (
    <a href="/" className="flex items-center">
      <Image
        src="/logo.png"
        width={200}
        height={200}
        alt="CareerBoost-AI Logo"
      />
    </a>
  );

  return (
    <div className="bg-gray-900">
      <div className="flex items-center justify-between py-2 md:block px-4">
        {/* Mobile Menu Button */}
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

      {/* Mobile Brand when opened */}
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
                {navigation.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-gray-300 hover:bg-slate-800 font-medium rounded-full hover:text-slate-50 p-2 text-md md:px-4"
                  >
                    <a href={item.path} className="block">
                      {item.title}
                    </a>
                  </li>
                ))}

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
                {isSignedIn && (
                  <li className="md:ml-2">
                    <UserButton />
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
