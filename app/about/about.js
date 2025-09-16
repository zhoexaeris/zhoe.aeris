"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const About = () => {
  const polaroids = [
    "/images/about/aizu-1.jpg",
    "/images/about/aizu-2.jpg",
    "/images/about/aizu-3.jpg",
    "/images/about/aizu-4.jpg",
    "/images/about/aizu-5.jpg",
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
        {/* Responsive layout: stack on mobile, 2-cols on sm+ */}
        <div className="grid grid-cols-1 sm:grid-cols-[140px,1fr] items-center gap-4 sm:gap-6 md:gap-8">
          {/* Avatar + Polaroid */}
          <div className="relative mx-auto sm:mx-0">
            {/* Gradient ring around avatar */}
            <div className="p-[3px] rounded-full">
              <Image
                src="/images/zhoe-aeris.jpg"
                alt="Zhoe Aeris"
                width={128}
                height={128}
                className="object-cover w-32 h-32 sm:w-32 sm:h-32 rounded-full "
                priority
              />
            </div>

            {/* Polaroid overlay */}
            <div
              title="Click to change photo"
              className={`absolute bottom-0 -right-2 sm:-right-2 w-14 h-16 shadow-lg rounded-sm border-2 border-b-8 border-white cursor-pointer z-10 overflow-hidden transition-transform duration-75 ${
                isShaking ? "animate-[shake_0.5s_ease-in-out]" : "rotate-6"
              }`}
            >
              <Image
                src={polaroids[currentIndex]}
                alt="Aizu"
                width={56}
                height={64}
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
          <div className="sm:ml-4 mt-2 sm:mt-0">
            <h1 className="text-base sm:text-lg font-semibold text-[#F84B82]">
              Hi, I am Zhoe.
            </h1>
            {/* optional tiny tagline */}
            {/* <p className="text-xs text-gray-500 mt-1">Designer • Web Developer</p> */}
            <p className="mt-2 leading-relaxed text-sm sm:text-base text-gray-700">
              I thrive at the intersection of design and code — turning vision
              into interaction and prototypes into products. With expertise
              across UI/UX research, design, and development, I lead the
              end-to-end process of creating intuitive, impactful digital
              experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
