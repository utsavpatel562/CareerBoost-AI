import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <section className="bg-gray-900">
      <div className="max-w-8xl px-4 sm:px-6 lg:px-20 py-10 m-auto">
        <div className="flex flex-col md:flex-row items-center justify-between border border-slate-950 relative isolate overflow-hidden bg-gray-950 px-6 py-12 md:py-24 shadow-2xl rounded-2xl sm:rounded-3xl sm:px-12 md:sm:px-24 xl:py-3 gap-8 md:gap-0">
          {/* Left - Image */}
          <div className="flex justify-center md:justify-start">
            <img
              src="/model1.png"
              alt="image"
              className="w-48 m-auto sm:w-64 md:w-[400px] object-contain"
            />
          </div>

          {/* Right - Text & Links */}
          <div className="flex flex-col items-center md:items-center text-center md:text-center">
            <h2 className="select-none max-w-2xl text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
              Let's Connect
            </h2>

            <p className="select-none mt-2 max-w-xl text-sm sm:text-base md:text-lg leading-6 sm:leading-8 text-gray-300">
              Your ideas, our conversation. Let’s make it happen. Let’s turn
              connections into opportunities.
            </p>

            {/* Decorative Background Circle */}
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[40rem] sm:h-[50rem] md:h-[64rem] w-[40rem] sm:w-[50rem] md:w-[64rem] -translate-x-1/2"
              aria-hidden="true"
            >
              <circle
                cx="512"
                cy="512"
                r="512"
                fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                fillOpacity="0.7"
              />
              <defs>
                <radialGradient
                  id="759c1415-0410-454c-8f7c-9a820de03641"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(512 512) rotate(90) scale(512)"
                >
                  <stop stopColor="#7775D6" />
                  <stop offset="1" stopColor="#9fc5e8" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>

            {/* Social Links */}
            <div className="w-fit m-auto mt-4 md:mt-5">
              <svg width={0} height={0} style={{ position: "absolute" }}>
                <defs>
                  <clipPath id="squircleClip" clipPathUnits="objectBoundingBox">
                    <path d="M 0,0.5 C 0,0 0,0 0.5,0 S 1,0 1,0.5 1,1 0.5,1 0,1 0,0.5" />
                  </clipPath>
                </defs>
              </svg>
              <div className="relative">
                <div className="absolute inset-0 bg-black/20 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl" />
                <div className="relative flex justify-center flex-wrap items-center gap-3 sm:gap-x-2 p-2">
                  {/* GitHub */}
                  <Link
                    href={"https://github.com/utsavpatel562"}
                    target="_blank"
                  >
                    <div
                      style={{ clipPath: "url(#squircleClip)" }}
                      className="w-12 sm:w-14 h-12 sm:h-14 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center shadow-lg border border-gray-600/50 cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
                    >
                      <FaGithub className="text-slate-50 w-5 sm:w-6 h-5 sm:h-6" />
                    </div>
                  </Link>
                  {/* LinkedIn */}
                  <Link
                    href={"https://www.linkedin.com/in/utsav-patel-coder"}
                    target="_blank"
                  >
                    <div
                      style={{ clipPath: "url(#squircleClip)" }}
                      className="w-12 sm:w-14 h-12 sm:h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg border border-blue-500/50 cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
                    >
                      <FaLinkedinIn className="text-slate-50 w-5 sm:w-6 h-5 sm:h-6" />
                    </div>
                  </Link>

                  {/* Email */}
                  <Link href={"mailto:utsavpatel562@gmail.com"} target="_blank">
                    <div
                      style={{ clipPath: "url(#squircleClip)" }}
                      className="w-12 sm:w-14 h-12 sm:h-14 bg-gradient-to-br from-slate-600 to-slate-800 rounded-xl flex items-center justify-center shadow-lg border border-slate-500/50 cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
                    >
                      <IoMailOutline className="text-slate-50 w-5 sm:w-6 h-5 sm:h-6" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
