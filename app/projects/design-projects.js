"use client";
import React, { useState, useRef, useEffect } from "react";

const DesignProjects = () => {
  const originalProjects = [
    {
      id: 1,
      title: "BloomPH",
      description: "Short description",
      image: "./images/design-projects/bloomph.png",
      link: "https://working.dev",
    },
    {
      id: 2,
      title: "The OFW Blog",
      description: "Short description",
      image: "./images/design-projects/theofwblog.png",
      link: "https://example.com",
    },
    {
      id: 3,
      title: "PasaHero",
      description: "Short description",
      image: "./images/design-projects/pasahero.png",
      link: "",
    },
    {
      id: 4,
      title: "PediPlan",
      description: "Short description",
      image: "./images/design-projects/pediplan.png",
      link: "https://www.canva.com/design/DAGH-z03DXQ/OLAcbkhuVHyzyMjTEi31TQ/view?utm_content=DAGH-z03DXQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h9f438c01f6",
    },
    {
      id: 5,
      title: "Pamana",
      description: "Short description",
      image: "./images/design-projects/pamana.png",
      link: "",
    },
  ];

  // Create infinite array by duplicating the original projects
  const projects = [
    ...originalProjects,
    ...originalProjects,
    ...originalProjects,
  ];
  const originalLength = originalProjects.length;

  const [activeIndex, setActiveIndex] = useState(originalLength); // Start in the middle set
  const [isResetting, setIsResetting] = useState(false);
  const containerRef = useRef(null);

  const handleClick = (e) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const clickX = e.clientX;

    if (clickX < rect.left + rect.width / 2) {
      // Move to previous - always go left
      setActiveIndex((prev) => {
        const newIndex = prev - 1;
        // If we're going below the first set, wrap to the last set
        if (newIndex < originalLength) {
          // Let the animation complete first, then reset
          setTimeout(() => {
            setIsResetting(true);
            setActiveIndex(newIndex + originalLength);
            setTimeout(() => setIsResetting(false), 50);
          }, 700); // Wait for animation to complete
          return newIndex;
        }
        return newIndex;
      });
    } else {
      // Move to next - always go right
      setActiveIndex((prev) => {
        const newIndex = prev + 1;
        // If we're going above the last set, wrap to the first set
        if (newIndex >= originalLength * 2) {
          // Let the animation complete first, then reset
          setTimeout(() => {
            setIsResetting(true);
            setActiveIndex(newIndex - originalLength);
            setTimeout(() => setIsResetting(false), 50);
          }, 700); // Wait for animation to complete
          return newIndex;
        }
        return newIndex;
      });
    }
  };

  return (
    <div className="">
      {/* Header */}
      <div className="space-y-1">
        <h2 className="text-xl font-semibold">Design Projects</h2>
        <p className="text-gray-600 text-sm">
          Visual designs, UX researches, and anything in between.
        </p>
      </div>

      {/* Coverflow Carousel */}
      <div
        ref={containerRef}
        className="relative flex items-center justify-center w-full h-[380px] cursor-pointer"
        onClick={handleClick}
        style={{ perspective: "1200px" }}
      >
        {projects.map((project, index) => {
          const offset = index - activeIndex;
          const absOffset = Math.abs(offset);

          return (
            <div
              key={project.id}
              className={`absolute w-96 h-[340px] rounded-xl shadow-xl overflow-hidden ${
                isResetting ? "" : "transition-all duration-700 ease-in-out"
              }`}
              style={{
                transform: `
                  translateX(${offset * 140}px)
                  scale(${1 - absOffset * 0.1})
                  rotateY(${offset * -25}deg)
                `,
                transformStyle: "preserve-3d",
                zIndex: 10 - absOffset,
                opacity: absOffset > 2 ? 0 : 1,
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
      </div>

      {/* Active Project Info */}
      <div className="text-center w-96 mx-auto flex">
        <div className="text-base font-medium truncate w-full text-left">
          {originalProjects[activeIndex % originalLength].description}
        </div>
        <div className="text-base font-medium truncate w-full text-right">
          <a
            href={originalProjects[activeIndex % originalLength].link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {originalProjects[activeIndex % originalLength].title}
          </a>
        </div>
      </div>
    </div>
  );
};

export default DesignProjects;
