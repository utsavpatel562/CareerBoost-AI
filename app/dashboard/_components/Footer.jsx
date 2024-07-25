import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-gray-900 text-primary-content p-10 text-center">
      <img src="/logo3.png" alt="logo" width={200} className="m-auto my-4" />
      <p className="font-bold text-gray-300">NEXT.JS ❤️ - THE POWERFULL TECH</p>
      <p className="text-gray-500">
        Copyright © {new Date().getFullYear()} - All right reserved
      </p>
    </footer>
  );
};

export default Footer;
