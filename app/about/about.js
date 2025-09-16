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
    <section className="w-full max-w-4xl mx-auto px-4">
      {/* Hero card */}
      <div className="relative overflow-hidden rounded-2xl ">
        {/* 2-col layout */}
        <div className="grid grid-cols-[100px,1fr] sm:grid-cols-[140px,1fr] items-center gap-5 md:gap-8">
          {/* Avatar + Polaroid */}
          <div className="relative">
            {/* Gradient ring around avatar */}
            <div className="p-[3px] rounded-full">
              <img
                src="/images/zhoe-aeris.jpg"
                alt="Zhoe Aeris"
                className="object-cover w-24 h-24 sm:w-32 sm:h-32 rounded-full "
              />
            </div>

            {/* Polaroid overlay */}
            <div
              title="Click to change photo"
              className={`absolute -bottom-3 -right-3 w-16 h-20 shadow-lg rounded-sm border-2 border-white cursor-pointer z-10 overflow-hidden transition-transform duration-75 ${
                isShaking ? "animate-[shake_0.5s_ease-in-out]" : "rotate-6"
              }`}
            >
              <img
                src={polaroids[currentIndex]}
                alt="Polaroid"
                onClick={handleClick}
                className="w-full h-16 object-cover"
              />
              <div className="w-full h-4 bg-white" />
              {isFlashing && (
                <div className="absolute inset-0 bg-white opacity-80 z-20 animate-pulse" />
              )}
            </div>
          </div>

          {/* Text */}
          <div className="ml-4">
            <h1 className="text-xl font-semibold text-[#F84B82]">
              Hi, I am Zhoe.
            </h1>
            {/* optional tiny tagline */}
            {/* <p className="text-xs text-gray-500 mt-1">Designer • Web Developer</p> */}
            <p className="mt-2 leading-relaxed text-gray-700">
              Lorem ipsum. This is the about me section. I believe that{" "}
              <b>love is at the heart of all meaningful endeavors</b>. With that
              in mind, I am on a mission to <b>continue learning</b> and{" "}
              <b>growing</b> in this field — to serve the people with my{" "}
              <b>passion</b>, <b>creativity</b>, and <b>excellence</b>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
