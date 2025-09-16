const Journey = () => {
  const timeline = [
    {
      id: 1,
      type: "experience",
      title: "Serbiz (UI/UX Designer and Web Developer)",
      date: "May 2024 – December 2024",
      details: [
        "Designed and developed the company website using Next.js and Tailwind CSS.",
        "Implemented frontend pages and worked on UI refinements for Serbiz's P2P feature, contributing to its Top 3 Business App ranking in PH (January 2025).",
        "Led in-app UX improvements that supported 20x user growth (1k to 20k) and boosted sign-up conversion by 15% (January 2025).",
      ],
    },
    {
      id: 2,
      type: "experience",
      title: "SeriousMD (UI/UX Intern)",
      date: "May 2024 – August 2024",
      details: [
        "Worked with pediatricians to design and prototype a baby vaccination tracker.",
        "Delivered wireframes and prototypes that went into beta testing with real doctors.",
      ],
    },
    {
      id: 3,
      type: "education",
      title: "De La Salle University - Manila",
      date: "2021 – Present",
      details: [
        "4th Year Bachelor of Science in Computer Science major in Software Technology",
        "Cumulative GPA: 3.333",
        "Department of Science and Technology (DOST) Merit Scholar",
        "Relevant Coursework: Data Structures and Algorithms, Object-Oriented Programming, Database Systems, Software Engineering, Web Development",
      ],
    },
    {
      id: 4,
      type: "education",
      title: "Paranaque Science High School",
      date: "2015 – 2021",
      details: [
        "Senior High School Graduate with High Honors (STEM)",
        "Junior High School Graduate with Honors",
      ],
    },
  ];

  return (
    <section className="w-full max-w-4xl px-4 mx-auto flex flex-col gap-y-4">
      {/* Section Header */}
      <h2 className="text-2xl font-semibold border-b border-gray-200 pb-3">
        My Journey
      </h2>

      <div className="relative border-l-2 border-gray-200 ml-4">
        {timeline.map((item) => (
          <div key={item.id} className="mb-10 ml-6">
            {/* Timeline Marker */}
            <span className="absolute -left-4 flex items-center justify-center w-6 h-6 bg-[#F84B82] rounded-full ring-4 ring-white"></span>

            {/* Content */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <h3 className="text-lg font-bold text-[#F84B82]">
                  {item.title}
                </h3>
                <div className="bg-gray-200 text-gray-600 px-2 py-1 rounded-md text-xs font-medium">
                  {item.date}
                </div>
              </div>

              <ul className="list-disc list-outside space-y-1 text-gray-700 pl-4">
                {item.details.map((detail, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Journey;
