const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Serbiz (Web)",
      description: "Lorem ipsum. This is the project description.",
      bgColor: "bg-serbiz-purple",
      textcolor: "text-white",
      hovercolor: "hover:shadow-serbiz-purple/40",
      image: "/images/certifications/sololearn-ruby.jpg",
    },
    {
      id: 2,
      title: "Nurselink",
      description:
        "A specialized job platform connecting healthcare professionals with hospitals and medical facilities.",
      bgColor: "bg-nurselink-teal",
      textcolor: "text-white",
      hovercolor: "hover:shadow-nurselink-teal/40",
      image: "/images/certifications/sololearn-ruby.jpg",
    },
    {
      id: 3,
      title: "SpikeZone",
      description:
        "A gaming community platform with forums, matchmaking, and tournament organization features.",
      bgColor: "bg-spikezone-red",
      textcolor: "text-white",
      hovercolor: "hover:shadow-spikezone-red/40",
      image: "/images/certifications/sololearn-ruby.jpg",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="space-y-1">
        <h2 className="text-xl font-semibold">Website Development Projects</h2>
        <p className="text-gray-600 text-sm">
          Visual designs, UX researches, and anything in between.
        </p>
      </div>

      {/* Project List */}
      <div className="space-y-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`flex flex-col lg:flex-row rounded-2xl overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-[1.01] hover:shadow-lg group ${project.bgColor} ${project.hovercolor}`}
          >
            {/* Left Section - Text */}
            <div
              className={`flex-1 p-6 lg:p-8 flex flex-col justify-between ${project.textcolor}`}
            >
              <div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm leading-snug text-white/80">
                  {project.description}
                </p>
              </div>
              <span className="text-xs text-white/60 mt-4">
                {new Date().getFullYear()}
              </span>
            </div>

            {/* Right Section - Image */}
            <div className="flex-1 flex items-center justify-center bg-white p-6 lg:p-8">
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="w-full max-w-sm rounded-xl shadow-md object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;
