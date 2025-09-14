import Navbar from "../mainComponents/Navbar.js";
import Footer from "../mainComponents/Footer.js";

export default function Home() {
  const experiences = [
    {
      id: 1,
      name: "Serbiz (UI/UX Designer and Web Developer)",
      date: "May 2024 to December 2024",
      description: [
        "Designed and developed the company website using Next.js and Tailwind CSS",
        "Implemented frontend pages and worked on UI refinements for Serbiz's P2P feature, contributing to its Top 3 Business App ranking in PH (January 2025) ",
        "Led in-app UX improvements that supported 20x user growth (1k to 20k) and boosted sign-up conversion by 15% (January 2025)",
      ],
    },
    {
      id: 2,
      name: "SeriousMD (UI/UX Intern)",
      date: "May 2024 to August 2024",
      description: [
        "Worked with pediatricians to design and prototype a baby vaccination tracker",
        "Delivered wireframes and prototypes that went into beta testing with real doctors",
      ],
    },
  ];
  const technologies = [
    { name: "HTML", logo: "/images/technologies/html5.png" },
    { name: "CSS", logo: "/images/technologies/css3.png" },
    { name: "JavaScript", logo: "/images/technologies/javascript.png" },
    { name: "MongoDB", logo: "/images/technologies/mongodb.png" },

    { name: "Python", logo: "/images/technologies/python.png" },
    { name: "Java", logo: "/images/technologies/java.png" },
    { name: "Next.js", logo: "/images/logos/nextjs-logo.png" },
    { name: "Tailwind", logo: "/images/logos/tailwind-logo.png" },
  ];

  const tools = [
    { name: "Figma", logo: "/images/tools/figma.png" },
    { name: "Photoshop", logo: "/images/tools/photoshop.png" },
    { name: "Canva", logo: "/images/tools/canva.png" },
    { name: "GitHub", logo: "/images/tools/github.png" },
  ];

  const certifications = [
    {
      title: "Introduction to HTML",
      provider: "Sololearn",
      year: "2024",
      link: "#",
    },
    {
      title: "Introduction to CSS",
      provider: "Sololearn",
      year: "2024",
      link: "#",
    },
    {
      title: "Introduction to JavaScript",
      provider: "Sololearn",
      year: "2024",
      link: "#",
    },
    {
      title: "Ruby",
      provider: "Sololearn",
      year: "2023",
      link: "#",
    },
    {
      title: "Go",
      provider: "Sololearn",
      year: "2023",
      link: "#",
    },
    {
      title: "Kotlin",
      provider: "Sololearn",
      year: "2023",
      link: "#",
    },
    {
      title: "R",
      provider: "Sololearn",
      year: "2023",
      link: "#",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F9F6F5] flex flex-col">
      <Navbar color="bg-[#F9F6F5]" />

      <div className="flex flex-col gap-y-12">
        {/* About Me */}
        <div className="w-full max-w-4xl mx-auto px-4 flex-1 flex flex-col justify-center gap-y-4">
          <div>
            <img
              src="/images/zhoe-aeris.jpg"
              alt="Zhoe Aeris"
              className="w-1/4 object-cover"
            />
          </div>
          <div className="text-xl font-bold">Hi, I am Zhoe.</div>
          <div>
            Lorem ipsum. This is the about me section. I believe that{" "}
            <b>love is at the heart of all meaningful endeavors</b>. With that
            in mind, I am on a mission to <b>continue learning</b> and{" "}
            <b>growing</b> in this field - to serve the people with my{" "}
            <b>passion</b>, <b>creativity</b>, and <b>excellence</b>.{" "}
          </div>
        </div>

        {/* Experiences */}
        <div className="w-full max-w-4xl mx-auto px-4 flex-1 flex flex-col justify-center gap-y-3">
          <div className="text-xl font-bold">Experiences</div>
          {experiences.map((experience) => (
            <div key={experience.id} className="space-y-2">
              <div className="text-lg font-bold text-[#F84B82]">
                {experience.name}
              </div>
              <ul className="list-disc list-outside ml-6 space-y-1">
                <li className="text-left pl-2 font-bold">{experience.date}</li>
                {experience.description.map((item, index) => (
                  <li key={index} className="text-left pl-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="w-full max-w-4xl mx-auto px-4 flex-1 flex flex-col justify-center gap-y-3">
          <div className="text-xl font-bold">Education</div>
          <div className="space-y-4">
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <div className="text-lg font-bold text-[#F84B82]">
                  De La Salle University - Manila
                </div>
                <div className="bg-gray-200 text-gray-600 px-2 py-1 rounded-md text-xs font-medium">
                  2021 - Present
                </div>
              </div>
              <ul className="list-disc list-outside ml-6 space-y-1">
                <li>
                  4th Year Bachelor of Science in Computer Science major in
                  Software Technology{" "}
                </li>
                <li>Cumulative GPA: 3.333</li>
                <li>
                  Department of Science and Technology (DOST) Merit Scholar
                </li>
                <li>
                  Relevant Coursework: Data Structures and Algorithms,
                  Object-Oriented Programming, Database Systems, Software
                  Engineering, Web Development
                </li>
              </ul>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <div className="text-lg font-bold text-[#F84B82]">
                  Paranaque Science High School
                </div>
                <div className="bg-gray-200 text-gray-600 px-2 py-1 rounded-md text-xs font-medium">
                  2015 - 2021
                </div>
              </div>
              <ul className="list-disc list-outside ml-6 space-y-1">
                <li>Senior High School Graduate with High Honors (STEM)</li>
                <li>Junior High School Graduate with Honors</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Others*/}
        <div className="w-full max-w-4xl mx-auto px-4 flex-1 flex flex-col justify-center gap-y-3 pb-8">
          <div className="text-xl font-bold">Others</div>

          {/* Certifications */}
          <div className="space-y-4">
            <div className="text-lg font-bold text-[#F84B82]">
              Certifications
            </div>
            <div className="">
              <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent hover:scrollbar-thumb-gray-400">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-64 h-64 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 group relative overflow-hidden"
                  >
                    {/* Certificate Image */}
                    <div className="w-full h-full relative">
                      <img
                        src="/images/certifications/sololearn-ruby.jpg"
                        alt={cert.title}
                        className="w-full h-full object-cover rounded-xl"
                      />

                      {/* Overlay with description */}
                      <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-[#F84B82] bg-opacity-0 group-hover:bg-opacity-90 transition-all duration-300 rounded-b-xl flex">
                        <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                          <div className="text-xs font-bold">{cert.title}</div>
                          <div className="text-xs">
                            {cert.provider} | {cert.year}
                          </div>
                        </div>
                      </div>

                      {/* Certificate badge */}
                      <div className="absolute top-3 right-3 w-8 h-8 bg-[#F84B82] rounded-full flex items-center justify-center shadow-lg">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
