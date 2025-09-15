const WebdevProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Serbiz (Web)",
      role: "Founding Team – Product & Technology Lead",
      date: "2024",
      summary:
        "Created Serbiz PH’s official marketing site to build brand presence before launch, including a launch waitlist system and V1–V2 redesigns.",
      techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Firebase"],
      contributions: [
        "Built and deployed the marketing website (V1 and V2).",
        "Implemented launch waitlist functionality.",
        "Optimized SEO and visibility using Google sitemaps.",
      ],
      links: [{ label: "Showcase", href: "#" }],
      bgColor: "bg-serbiz-purple",
      textcolor: "text-white",
      hovercolor: "hover:shadow-serbiz-purple/40",
      image: "/images/certifications/sololearn-ruby.jpg",
    },
    {
      id: 2,
      title: "Nurselink",
      role: "Co-Designer & Frontend Developer",
      date: "2023",
      summary:
        "A A centralized platform for Filipino nurses to search jobs and showcase resumes, built in collaboration with an external client for CSSWENG.",
      techStack: [
        "React + TypeScript",
        "Vite",
        "Tailwind CSS",
        "Node.js + Express",
        "MongoDB + Mongoose",
      ],
      contributions: [
        "Frontend: Developed Register/Login pages, Profile page, resume display, and verification progress bar using React components.",
        "Backend: Extended nurse model & schema to support recommendations, created modal UI for peer recommendations, and updated routes/controllers.",
      ],
      links: [
        { label: "Live Demo", href: "https://nurse-link-one.vercel.app/" },
      ],
      bgColor: "bg-nurselink-teal",
      textcolor: "text-white",
      hovercolor: "hover:shadow-nurselink-teal/40",
      image: "/images/certifications/sololearn-ruby.jpg",
    },
    {
      id: 3,
      title: "SpikeZone",
      role: "Lead Frontend Developer",
      date: "2023",
      summary:
        "A full-stack forum web app inspired by Valorant Forums, created for CCAPDEV course. Implemented CRUD operations, authentication, and deployment.",
      techStack: [
        "HTML",
        "CSS",
        "JavaScript",
        "Node.js",
        "Express",
        "MongoDB",
        "Handlebars",
        "Mongoose",
      ],
      contributions: [
        "Developed frontend features: navbar, homepage, posts, profile updates, login system.",
        "Implemented user authentication & password hashing.",
        "Set up MongoDB cloud database and deployed the application (locally).",
      ],
      links: [
        { label: "Github", href: "https://github.com/axsulit/ccapdev_mco" },
      ],
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
          From UI to code, projects that blend design and development.
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
                {project.role && (
                  <div className="mb-3">
                    <p className="text-white text-sm italic">
                      Role: {project.role}
                    </p>
                    {project.date && (
                      <p className="text-white/90 text-xs mt-1">
                        {project.date}
                      </p>
                    )}
                  </div>
                )}
                {project.summary && (
                  <p className="text-sm leading-snug text-white mb-4">
                    {project.summary}
                  </p>
                )}

                {project.techStack && project.techStack.length > 0 && (
                  <div className="mb-4">
                    <div className="text-sm font-medium text-white">
                      Tech Stack:
                    </div>
                    <div className="text-sm text-white">
                      {project.techStack.join(", ")}
                    </div>
                  </div>
                )}

                {project.contributions && project.contributions.length > 0 && (
                  <div className="mb-4">
                    <div className="text-sm font-medium text-white">
                      My Contributions:
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-sm text-white mt-1">
                      {project.contributions.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.links && project.links.length > 0 && (
                  <div className="text-sm text-white flex flex-wrap gap-x-2 gap-y-1">
                    {project.links.map((l, idx) => (
                      <a
                        key={idx}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-white/70 hover:decoration-white"
                      >
                        {l.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              {!project.date && (
                <span className="text-xs text-white/60 mt-4">
                  {new Date().getFullYear()}
                </span>
              )}
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

export default WebdevProjects;
