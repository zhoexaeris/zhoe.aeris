"use client";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const words = ["build", "launch", "iterate"];

const Header = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-extrabold text-[#231F20] mb-6">
        Hi I'm Zhoe, a{" "}
        <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
          UI/UX Designer
        </span>
        , helping startups
        <br />
        <span className="transition-all duration-300 inline-block min-w-[4ch] bg-yellow px-2 py-1 rounded-md">
          {words[currentWordIndex]}
        </span>{" "}
        user-centered digital products.
      </h1>
      <p className="text-lg md:text-xl text-[#231F20] mb-8 max-w-3xl">
        Currently, I'm open to new opportunities as I complete my senior year at
        Computer Science at De La Salle University Manila.
      </p>
      <div className="flex space-x-4 mt-2">
        <a
          href="https://www.linkedin.com/in/zhoeaeris/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md p-1 flex items-center justify-center"
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="w-6 h-6 text-[#231F20]"
          />
        </a>
        <a
          href="mailto:zhoe.aeris@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md p-1 flex items-center justify-center"
          aria-label="Email"
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            className="w-6 h-6 text-[#231F20]"
          />
        </a>
        <a
          href="https://github.com/zhoexaeris"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center"
          aria-label="GitHub"
        >
          <FontAwesomeIcon icon={faGithub} className="w-6 h-6 text-[#231F20]" />
        </a>
      </div>
    </div>
  );
};

export default Header;
