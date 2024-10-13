"use client";
import { SignIn, SignInButton, UserButton, useUser } from "@clerk/nextjs";
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
      <div className="flex p-4 items-center justify-between bg-white shadow-sm text-gray-600">
        <Image
          src="/logo4.png"
          width={35}
          height={35}
          alt="CareerBoost-AI Logo"
        />
        <ul className="hidden md:flex gap-6">
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
        {isSignedIn ? <UserButton /> : <SignInButton />}
      </div>
    </>
  );
}

export default Header;
