import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex p-4 items-center justify-between bg-secondary shadow-sm">
        <Image
          src="/logo4.png"
          width={40}
          height={40}
          alt="CareerBoost-AI Logo"
        />
        <ul className="flex gap-6">
          <li className="hover: text-primary hover: font-bold transition-all">
            Dashboard
          </li>
          <li>Resume Builder</li>
          <li>Questions</li>
          <li>Upgrade</li>
          <li>How it works</li>
        </ul>
        <UserButton />
      </div>
    </>
  );
};

export default Header;
