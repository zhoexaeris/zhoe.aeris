"use client";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = ({ color }) => {
  const emojis = ["🍓", "🎀", "🧸", "☀️", "🍰", "🍒", "🌸"];
  const [currentEmojiIndex, setCurrentEmojiIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEmojiIndex((prevIndex) => (prevIndex + 1) % emojis.length);
    }, 1000); // Change emoji every 1 second

    return () => clearInterval(interval);
  }, [emojis.length]);

  const linkedIn = <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />;
  const email = <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />;
  const github = <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />;

  return (
    <footer className={`w-full ${color}  py-6 `}>
      <div className="w-full max-w-4xl flex items-center justify-between px-4 pt-4 mx-auto border-t border-gray-200">
        {/* Left side - Name and year */}
        <div className="text-sm text-gray-600 flex items-center gap-2">
          <span className="transition-all duration-300 ease-in-out transform hover:scale-110">
            {emojis[currentEmojiIndex]}
          </span>
          <span>Zhoe Aeris — 2025</span>
        </div>

        {/* Right side - Social links */}
        <div className="flex items-center space-x-4">
          <a
            href="https://www.linkedin.com/in/zhoeaeris/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-[#F84B82] transition-colors"
          >
            {linkedIn}
          </a>
          <a
            href="mailto:zhoe.aeris@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-[#F84B82] transition-colors"
          >
            {email}
          </a>
          <a
            href="https://www.github.com/zhoexaeris/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-[#F84B82] transition-colors"
          >
            {github}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
