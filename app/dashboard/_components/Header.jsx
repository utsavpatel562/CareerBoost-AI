"use client";
import { Button } from "@/components/ui/button";
import { FaUser } from "react-icons/fa";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

function Header() {
  const path = usePathname();
  useEffect(() => {
    console.log(path);
  });
  const router = useRouter();
  const { isSignedIn } = useUser();
  const NaivgateToDashboard = () => {
    router.push("/dashboard/");
  };
  const NaivgateToHome = () => {
    router.push("/");
  };
  const NaivgateToaboutdeveloper = () => {
    router.push("/aboutdeveloper/");
  };
  const NaivgateTohowitworks = () => {
    router.push("/#howitworks");
  };

  return (
    <>
      <div className="relative flex p-4 justify-between items-center shadow-sm text-gray-600">
        {/* Background image with opacity */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-45 z-[-1]"
          style={{
            backgroundImage: "url('/bgnew1.jpg')",
          }}
        ></div>

        {/* Content */}
        <div className="flex gap-10">
          <Image
            src="/logo4.png"
            width={35}
            height={35}
            alt="CareerBoost-AI Logo"
          />
          <ul className="hidden md:flex gap-6 font-semibold">
            <li
              className={`font-extrabold hover:bg-slate-800 hover:rounded-md hover:text-slate-200 pr-4 pl-4 text-center transition-all cursor-pointer p-2 ${
                path == "/"
              }`}
              onClick={NaivgateToHome}
            >
              Home
            </li>
            <li
              className={`font-extrabold pr-4 pl-4 hover:bg-slate-800 hover:rounded-md hover:text-slate-200 transition-all cursor-pointer p-2 ${
                path == "/dashboard"
              }`}
              onClick={NaivgateToDashboard}
            >
              Dashboard
            </li>
            <li
              className={`font-extrabold pr-4 pl-4 hover:bg-slate-800 hover:rounded-md hover:text-slate-200 transition-all cursor-pointer p-2 ${
                path == "/#howitworks" && "text-cyan-700 font-bold"
              }`}
              onClick={NaivgateTohowitworks}
            >
              How it works
            </li>
            <li
              className={`font-extrabold pr-4 pl-4 hover:bg-slate-800 hover:rounded-md hover:text-slate-200 transition-all cursor-pointer p-2 ${
                path == "/aboutdeveloper" && "text-cyan-700 font-bold"
              }`}
              onClick={NaivgateToaboutdeveloper}
            >
              About Developer
            </li>
          </ul>
        </div>
        {isSignedIn ? (
          <UserButton />
        ) : (
          <Button className="flex gap-2 justify-center bg-transparent font-bold text-black hover:bg-slate-800 hover:text-slate-300 w-[100px]">
            <SignInButton>Login</SignInButton>
            <FaUser />
          </Button>
        )}
      </div>
    </>
  );
}

export default Header;
