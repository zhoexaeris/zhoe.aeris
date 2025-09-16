"use client";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const words = ["fast", "responsive", "impactful"];

const Header = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-extrabold text-[#231F20] mb-6">
        Zhoe is a{" "}
        <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
          Frontend Developer
        </span>
        , who bridges design and code to
        <span className="transition-all duration-300 inline-block min-w-[2ch] bg-[#F84B82] text-white px-2 py-1 rounded-md text-center ml-2">
          {words[currentWordIndex]}
        </span>{" "}
        digital experiences.
      </h1>
      <p className="text-lg  text-[#231F20] mb-8 max-w-3xl">
        Currently, I&apos;m open to new opportunities as I complete my senior
        year at Computer Science at De La Salle University Manila.
      </p>
      <a
        href="mailto:zhoe.aeris@gmail.com"
        className="inline-block bg-[#F84B82] text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg hover:brightness-[1.05] hover:scale-[1.01] transition-all duration-100 transform"
      >
        <p className="text-sm">Let's Work Together</p>
      </a>
    </div>
  );
};

export default Header;
