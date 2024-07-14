// Code by UTSAV PATEL

import React from "react";
import Header from "./_components/Header";

function DashboardLayout({ children }) {
  return (
    <>
      <div
        style={{
          backgroundImage: "url('/gradient7.jpg')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
        }}
      >
        <Header />
        <div className="mx-5 md:mx-20 lg:mx-36">{children}</div>
      </div>
    </>
  );
}

export default DashboardLayout;
