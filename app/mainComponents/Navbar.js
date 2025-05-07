import React from "react";

const Navbar = ({ color }) => {
  return (
    <nav className={`w-full ${color} flex items-center justify-center py-8`}>
      <div className="w-full max-w-4xl flex items-center justify-between px-4 mx-auto">
        <div
          className=" font-bold text-[#231F20]"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Zhoe Aeris
        </div>
        <div
          className="text-base text-[#231F20] font-semibold"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          <a
            href="https://drive.google.com/file/d/1J60ZguzLY0pJHCPzgJjatSVbvxgU9pGG/view?usp=sharing"
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
