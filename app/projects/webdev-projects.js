import Image from "next/image";

const WebdevProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Serbiz (Web)",
      role: "Founding Product & Technology Lead",
      date: "2024",
      summary:
        "Created Serbiz PH's official marketing site to build brand presence before launch, including a launch waitlist system and V1–V2 redesigns.",
      techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Firebase"],
      contributions: [
        "Built and deployed the marketing website (V1 and V2).",
        "Implemented launch waitlist functionality for V0.",
      ],
      links: [{ label: "Showcase", href: "#" }],
      bgColor: "bg-serbiz-purple",
      borderColor: "border-serbiz-purple/20",
      hoverColor: "hover:shadow-serbiz-purple/40",
      image: "./images/webdev-projects/serbiz_web.png",
    },
    {
      id: 2,
      title: "Nurselink",
      role: "Co-Designer & Frontend Developer",
      date: "2023",
      summary:
        "A centralized platform for Filipino nurses to search jobs and showcase resumes, built in collaboration with an external client for CSSWENG.",
      techStack: [
        "React + TypeScript",
        "Vite",
        "Tailwind CSS",
        "Node.js + Express",
        "MongoDB + Mongoose",
      ],
      contributions: [
        "Frontend: Developed Register/Login pages, Profile page, Resume Display, and Verification Progress Bar using React components.",
        "Backend: Extended Nurse Model & Schema to support Recommendations, created modal UI for peer Recommendations, and updated routes/controllers.",
      ],
      links: [
        { label: "Live Demo", href: "https://nurse-link-one.vercel.app/" },
      ],
      bgColor: "bg-nurselink-teal",
      borderColor: "border-nurselink-teal/20",
      hoverColor: "hover:shadow-nurselink-teal/40",
      image: "./images/webdev-projects/nurselink.png",
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
        "Developed frontend features: Navbar, Homepage, Posts, Profile Updates, Login System.",
        "Implemented User Authentication & Password Hashing.",
        "Set up MongoDB cloud database and deployed the application (locally).",
      ],
      links: [
        { label: "Github", href: "https://github.com/axsulit/ccapdev_mco" },
      ],
      bgColor: "bg-spikezone-red",
      borderColor: "border-spikezone-red/20",
      hoverColor: "hover:shadow-spikezone-red/40",
      image: "./images/webdev-projects/spikezone.png",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="space-y-1">
        <h2 className="text-lg font-semibold text-[#F84B82]">
          Website Development Projects
        </h2>
        <p className="text-gray-600 text-sm">
          From UI to code, projects that blend design and development.
        </p>
      </div>

      {/* Project List */}
      <div className="space-y-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`flex flex-col lg:flex-row rounded-2xl overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-[1.01] hover:shadow-lg group border ${project.hoverColor} hover:brightness-[1.05]`}
          >
            {/* Left Section - Text */}
            <div
              className={`flex-1 p-4 sm:p-6 lg:p-10 max-w-full lg:max-w-md bg-gradient-to-b from-white to-gray-50 border-l-4 ${project.borderColor}`}
            >
              <h3 className="text-lg font-bold mb-2">{project.title}</h3>
              {project.role && (
                <p className="text-xs sm:text-sm text-gray-500 italic ">
                  {project.role} • {project.date}
                </p>
              )}

              {project.summary && (
                <p className="mt-3 sm:mt-4 text-gray-700 text-xs sm:text-sm leading-relaxed">
                  {project.summary}
                </p>
              )}

              {/* Tech Stack */}
              {project.techStack?.length > 0 && (
                <div className="mt-4 sm:mt-6">
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-800 uppercase ">
                    Tech Stack
                  </div>
                  <div className="mt-1 text-xs sm:text-sm text-gray-700">
                    {project.techStack.join(", ")}
                  </div>
                </div>
              )}

              {/* Contributions */}
              {project.contributions?.length > 0 && (
                <div className="mt-4 sm:mt-6 pt-3 sm:pt-4">
                  <div className="text-xs sm:text-sm font-semibold text-gray-800 uppercase mb-2 ">
                    My Contributions
                  </div>
                  <ul className="space-y-1 text-xs sm:text-sm text-gray-700">
                    {project.contributions.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-1.5 sm:gap-2"
                      >
                        <span className="text-green-500 mt-0.5">✔</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Links */}
              {project.links?.length > 0 && (
                <div className="mt-4 sm:mt-6">
                  {project.links.map((l, idx) => (
                    <a
                      key={idx}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block sm:inline-block w-full sm:w-auto px-4 py-2 text-xs sm:text-sm font-medium rounded-full shadow text-white text-center transition-colors ${project.bgColor} hover:opacity-90`}
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Right Section - Image */}
            <div
              className={`flex-1 flex items-center justify-center ${project.bgColor}`}
            >
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                width={640}
                height={360}
                className="w-full  object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebdevProjects;
