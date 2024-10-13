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

  return (
    <>
      <div className="relative flex p-4 justify-between items-center shadow-sm text-gray-600">
        {/* Background image with opacity */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50 z-[-1]"
          style={{
            backgroundImage: "url('/bgnew1.png')",
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
              className={`hover:font-extrabold transition-all cursor-pointer p-2 ${
                path == "/dashboard"
              }`}
              onClick={NaivgateToDashboard}
            >
              Home
            </li>
            <li
              className={`hover:font-extrabold transition-all cursor-pointer p-2 ${
                path == "/dashboard"
              }`}
              onClick={NaivgateToDashboard}
            >
              Dashboard
            </li>
            <li
              className={`hover:font-extrabold transition-all cursor-pointer p-2 ${
                path == "/dashboard/how" && "text-cyan-700 font-bold"
              }`}
            >
              How it works
            </li>
            <li
              className={`hover:font-extrabold transition-all cursor-pointer p-2 ${
                path == "/dashboard.aboutdeveloper" && "text-cyan-700 font-bold"
              }`}
            >
              About Developer
            </li>
          </ul>
        </div>
        {isSignedIn ? (
          <UserButton />
        ) : (
          <Button className="flex gap-2 justify-center bg-green-500 hover:bg-green-600 w-[100px]">
            <SignInButton>Login</SignInButton>
            <FaUser />
          </Button>
        )}
      </div>
    </>
  );
}

export default Header;
