"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

function Header() {
  const path = usePathname();
  useEffect(() => {
    console.log(path);
  });
  return (
    <>
      <div className="flex p-4 items-center justify-between bg-gray-900 shadow-sm text-gray-200">
        <Image
          src="/logo4.png"
          width={35}
          height={35}
          alt="CareerBoost-AI Logo"
        />
        <ul className="hidden md:flex gap-6">
          <li
            className={`hover:text-gray-100 hover:bg-primary hover:rounded-sm hover:font-bold transition-all cursor-pointer p-2 ${
              path == "/dashboard"
            }`}
          >
            Dashboard
          </li>
          <li
            className={`hover:text-gray-100 hover:bg-primary hover:rounded-sm hover:font-bold transition-all cursor-pointer p-2 ${
              path == "/dashboard/resumebuilder" && "text-primary font-bold"
            }`}
          >
            Resume Builder
          </li>
          <li
            className={`hover:text-gray-100 hover:bg-primary hover:rounded-sm hover:font-bold transition-all cursor-pointer p-2 ${
              path == "/dashboard/questions" && "text-primary font-bold"
            }`}
          >
            Questions
          </li>
          <li
            className={`hover:text-gray-100 hover:bg-primary hover:rounded-sm hover:font-bold transition-all cursor-pointer p-2 ${
              path == "/dashboard/upgrade" && "text-primary font-bold"
            }`}
          >
            Upgrade
          </li>
          <li
            className={`hover:text-gray-100 hover:bg-primary hover:rounded-sm hover:font-bold transition-all cursor-pointer p-2 ${
              path == "/dashboard/how" && "text-primary font-bold"
            }`}
          >
            How it works
          </li>
        </ul>
        <UserButton />
      </div>
    </>
  );
}

export default Header;
