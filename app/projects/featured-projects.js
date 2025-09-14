const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Serbiz (Web)",
      description: "Lorem ipsum. This is the project description.",
      technologies: "React, Node.js, MongoDB, Stripe API",
      color: "bg-serbiz-purple",

      image: "/images/serbiz/card-mockup.png",
    },
    {
      id: 2,
      title: "Nurselink",
      description:
        "A specialized job platform connecting healthcare professionals with hospitals and medical facilities.",
      technologies: "React, Express.js, MySQL, JWT Auth",
      color: "bg-nurselink-teal",
      image: "/images/nurselink/card-mockup.png",
    },
    {
      id: 3,
      title: "SpikeZone",
      description:
        "A gaming community platform with forums, matchmaking, and tournament organization features.",
      technologies: "Vue.js, Laravel, PostgreSQL, Socket.io",
      color: "bg-spikezone-red",
      image: "/images/spikezone/card-mockup.png",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Header Section */}
      <div className="text-xl md:text-2xl font-bold text-gray-900">
        Featured Projects
      </div>
      <div className="text-lgmax-w-2xl">
        A selection of my best works that turned ideas into measurable
        successes.
      </div>

      {/* Project Cards */}
      <div className="space-y-8 my-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`${project.color} rounded-2xl overflow-hidden shadow-2xl`}
          >
            <div className="flex flex-col lg:flex-row min-h-[400px]">
              {/* Left Section - Text Content */}
              <div className="flex-1 p-8 lg:p-12 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-lg text-white/90 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="text-sm text-white/80">
                  <span className="font-medium">Technologies:</span>{" "}
                  {project.technologies}
                </div>
              </div>

              {/* Right Section - Visual Content */}
              <div className="flex-1 p-8 lg:p-12 flex flex-col justify-between relative">
                {/* Project Screenshot */}
                <div className="flex justify-center items-center flex-1">
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      className="max-w-full h-auto rounded-lg shadow-lg"
                      style={{ maxHeight: "300px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;
