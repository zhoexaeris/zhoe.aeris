"use client";
import React, { useState, useRef, useEffect } from "react";

const DesignProjects = () => {
  const originalProjects = [
    {
      id: 1,
      title: "BloomPH",
      description: "Social Media Campaign",
      image: "./images/design-projects/bloomph.png",
      link: "https://www.canva.com/design/DAE3QQkbtWI/pat5PusqE-kYUpLQfZ5hUg/view?utm_content=DAE3QQkbtWI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h30cfe319ca",
    },
    {
      id: 2,
      title: "The OFW Blog",
      description: "Full Website Prototype",
      image: "./images/design-projects/theofwblog.png",
      link: "https://www.figma.com/proto/trqip2hrybpu5R9L7QqUjL/GEWORLD-Case-Analysis?page-id=10%3A1103&node-id=204-212&p=f&viewport=412%2C54%2C0.02&t=GxT73PlA0oiTDOry-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=204%3A212",
    },
    {
      id: 3,
      title: "PasaHero",
      description: "UX Research",
      image: "./images/design-projects/pasahero.png",
      link: "https://www.figma.com/proto/aWjgyUScRvZJFJVpY8sRyq/PasaHERO?page-id=597%3A17170&node-id=597-21908&p=f&viewport=581%2C257%2C0.05&t=ybEhiL9HjjBXVbwf-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=597%3A21908&show-proto-sidebar=1",
    },
    {
      id: 4,
      title: "PediPlan",
      description: "UX Internship Project",
      image: "./images/design-projects/pediplan.png",
      link: "https://www.canva.com/design/DAGH-z03DXQ/OLAcbkhuVHyzyMjTEi31TQ/view?utm_content=DAGH-z03DXQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h9f438c01f6",
    },
    {
      id: 5,
      title: "Pamana",
      description: "Hackathon Project",
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
        <h2 className="text-lg font-semibold text-[#F84B82]">
          Design Projects
        </h2>
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
      <div className="mt-4 w-96 mx-auto">
        <div className="rounded-xl  px-4 flex items-center justify-between">
          {/* Description */}
          <span className="text-sm text-gray-600">
            {originalProjects[activeIndex % originalLength].description}
          </span>

          {/* Title Link */}
          <a
            href={originalProjects[activeIndex % originalLength].link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-[#F84B82] hover:underline flex items-center gap-1"
          >
            {originalProjects[activeIndex % originalLength].title} →
          </a>
        </div>
      </div>
    </div>
  );
};

export default DesignProjects;
