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
      <div
        className="flex p-4 items-center justify-between bg-black shadow-sm text-gray-200"
        style={{
          background: "rgba( 57, 56, 56, 0.25 )",
          backdropFilter: "blur( 8px )",
          border: "1px solid rgba( 255, 255, 255, 0.18 )",
        }}
      >
        <Image
          src="/logo4.png"
          width={35}
          height={35}
          alt="CareerBoost-AI Logo"
        />
        <ul className="hidden md:flex gap-6">
          <li
            className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
              path == "/dashboard" && "text-primary font-bold"
            }`}
          >
            Dashboard
          </li>
          <li
            className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
              path == "/dashboard/resumebuilder" && "text-primary font-bold"
            }`}
          >
            Resume Builder
          </li>
          <li
            className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
              path == "/dashboard/questions" && "text-primary font-bold"
            }`}
          >
            Questions
          </li>
          <li
            className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
              path == "/dashboard/upgrade" && "text-primary font-bold"
            }`}
          >
            Upgrade
          </li>
          <li
            className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
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
