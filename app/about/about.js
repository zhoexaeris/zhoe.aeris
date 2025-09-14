"use client";
import { useEffect, useState } from "react";

const About = () => {
  const polaroids = [
    "./images/about/1.jpg",
    "./images/about/2.jpg",
    "./images/about/3.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlashing, setIsFlashing] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  const handleClick = () => {
    setCurrentIndex((prev) => (prev + 1) % polaroids.length);

    // Trigger flash animation
    setIsFlashing(true);
    setTimeout(() => {
      setIsFlashing(false);
    }, 200); // Flash duration

    // Trigger shake animation
    setIsShaking(true);
    setTimeout(() => {
      setIsShaking(false);
    }, 500); // Shake duration
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 flex-1 flex flex-col justify-center gap-y-6">
      {/* Profile + Polaroid */}
      <div className="flex">
        <div className="relative w-40 h-40">
          {/* Profile Image */}
          <img
            src="/images/zhoe-aeris.jpg"
            alt="Zhoe Aeris"
            className="object-cover w-full h-full rounded-full"
          />

          {/* Polaroid Overlay */}
          <div
            className={`absolute -bottom-4 -right-2 w-16 h-20 shadow-lg rounded-sm border-2 border-white cursor-pointer z-10 overflow-hidden transition-transform duration-75 ${
              isShaking ? "animate-[shake_0.5s_ease-in-out]" : "rotate-6"
            }`}
          >
            <img
              src={polaroids[currentIndex]}
              alt="Polaroid"
              onClick={handleClick}
              className="w-full h-16 object-cover"
            />
            {/* White overlay at bottom */}
            <div className="w-full h-4 bg-white"></div>

            {/* Flash Overlay */}
            {isFlashing && (
              <div className="absolute inset-0 bg-white opacity-80 z-20 animate-pulse"></div>
            )}
          </div>
        </div>
      </div>

      {/* About Text */}
      <div>
        <div className="text-xl font-bold">Hi, I am Zhoe.</div>
        <div className="mt-2leading-relaxed">
          Lorem ipsum. This is the about me section. I believe that{" "}
          <b>love is at the heart of all meaningful endeavors</b>. With that in
          mind, I am on a mission to <b>continue learning</b> and <b>growing</b>{" "}
          in this field — to serve the people with my <b>passion</b>,{" "}
          <b>creativity</b>, and <b>excellence</b>.
        </div>
      </div>
    </div>
  );
};

export default About;
