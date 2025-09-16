const MobileProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Daily",
      role: "Designer & Mobile Developer",
      description:
        "An AI-powered timeblocking app built with Flutter, Firebase, Gemini, and Google Calendar.",
      date: "2024",
      link: "https://www.canva.com/design/DAGYB3L7i0I/hXAdEDjGIJ1G_s09G1_RnA/view?utm_content=DAGYB3L7i0I&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hc5175fd2b9",
      linkLabel: "Pitch Deck",
      image: "./images/mobile-projects/daily.png",
      bgcolor: "bg-[#AEB77A]",
    },
    {
      id: 2,
      title: "Serbiz",
      role: "Founding Product & Tech Lead",
      description:
        "A superapp for side hustles. Led end-to-end from concept to launch, reaching #3 in PH Business Apps.",
      date: "2024",
      link: "https://www.figma.com/proto/8QHUKf5n0actZc0NLIlEX2/Serbiz-V1?page-id=6124%3A1645&node-id=6124-2896&p=f&viewport=3385%2C1320%2C0.09&t=bOtWjOC1NIPYhN5D-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=6124%3A2896&show-proto-sidebar=1",
      linkLabel: "Pitch Deck",
      image: "./images/mobile-projects/serbiz_app.png",
      bgcolor: "bg-[#D265D8]",
    },
    {
      id: 3,
      title: "DeclutterPH",
      role: "UX Designer",
      description:
        "Turning clutter into cash with just a photo. A resale platform recognized as a Maya Big 3 Top 20 finalist.",
      date: "2025",
      link: "https://www.figma.com/proto/Swp8fXUMECvmJxE6V4ec2L/INNOV8---Declutter-PH--Copy-?page-id=189%3A174&node-id=189-209&p=f&viewport=423%2C227%2C0.2&t=Udpl7heE6zJNJiPt-1&scaling=scale-down&content-scaling=fixed",
      linkLabel: "Pitch Deck",
      image: "./images/mobile-projects/declutterph.png",
      bgcolor: "bg-[#EDBE2C]",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-1">
        <h2 className="text-lg font-semibold text-[#F84B82]">
          Mobile Development Projects
        </h2>
        <p className="text-gray-600 text-sm">
          End-to-end mobile projects, from UX research to development and
          launch.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group rounded-2xl overflow-hidden ${project.bgcolor} text-white transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg hover:brightness-[1.05] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70`}
            aria-label={`${project.title} — open external link`}
          >
            <div className="p-6 flex flex-col h-full">
              {/* Top: Text */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                {project.role && (
                  <p className="text-white/90 text-sm mt-1">{project.role}</p>
                )}
                {project.date && (
                  <p className="text-white/80 text-xs mt-1">{project.date}</p>
                )}
                <p className="text-white/90 text-sm mt-2 leading-snug">
                  {project.description}
                </p>
              </div>

              {/* Bottom: Image */}
              <div className="-mb-32 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="max-w-none w-[400px] object-contain transform scale-110 translate-y-8 drop-shadow-md"
                />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default MobileProjects;
