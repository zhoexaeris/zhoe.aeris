import React from "react";

const Navbar = ({ color }) => {
  return (
    <nav className={`w-full ${color} flex items-start justify-center py-8`}>
      <div className="w-full max-w-4xl flex items-start px-4 mx-auto gap-8">
        <div
          className=" font-bold text-[#231F20] hover:text-[#F84B82] transition-colors"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          <a href="/">Home</a>
        </div>
        <div
          className=" font-bold text-[#231F20] hover:text-[#F84B82] transition-colors"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          <a href="/projects">Projects</a>
        </div>
        <div
          className=" font-bold text-[#231F20] hover:text-[#F84B82] transition-colors"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          <a href="/about">About</a>
        </div>
        <div
          className=" font-bold text-[#231F20] hover:text-[#F84B82] transition-colors"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          <a
            href="https://drive.google.com/file/d/1NRSEc_9mXr4_PfvCstiCWY9uIbmDrQ-A/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
