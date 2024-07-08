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
      <div className="flex p-4 items-center justify-between bg-secondary shadow-sm">
        <Image
          src="/logo4.png"
          width={35}
          height={35}
          alt="CareerBoost-AI Logo"
        />
        <ul className="flex gap-6">
          <li
            className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
              path == "/dashboard" && "text-primary font-bold"
            }`}
          >
            Dashboard
          </li>
          <li className="hover:text-primary hover:font-bold transition-all cursor-pointer">
            Resume Builder
          </li>
          <li className="hover:text-primary hover:font-bold transition-all cursor-pointer">
            Questions
          </li>
          <li className="hover:text-primary hover:font-bold transition-all cursor-pointer">
            Upgrade
          </li>
          <li className="hover:text-primary hover:font-bold transition-all cursor-pointer">
            How it works
          </li>
        </ul>
        <UserButton />
      </div>
    </>
  );
}

export default Header;
