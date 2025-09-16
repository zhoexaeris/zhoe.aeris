const Experiences = () => {
  const experiences = [
    {
      id: 1,
      name: "Serbiz (UI/UX Designer and Web Developer)",
      date: "May 2024 – December 2024",
      description: [
        "Designed and developed the company website using Next.js and Tailwind CSS.",
        "Implemented frontend pages and worked on UI refinements for Serbiz's P2P feature, contributing to its Top 3 Business App ranking in PH (January 2025).",
        "Led in-app UX improvements that supported 20x user growth (1k to 20k) and boosted sign-up conversion by 15% (January 2025).",
      ],
    },
    {
      id: 2,
      name: "SeriousMD (UI/UX Intern)",
      date: "May 2024 – August 2024",
      description: [
        "Worked with pediatricians to design and prototype a baby vaccination tracker.",
        "Delivered wireframes and prototypes that went into beta testing with real doctors.",
      ],
    },
  ];

  return (
    <section className="w-full max-w-4xl px-4 mx-auto flex flex-col gap-y-3">
      {/* Section Header */}
      <h2 className="text-lg font-semibold border-b border-gray-200 pb-3">
        Experiences
      </h2>

      <div className="relative border-l-2 border-gray-200 ml-4">
        {experiences.map((experience, index) => (
          <div key={experience.id} className="mb-6 ml-6">
            {/* Timeline Marker */}
            <span className="absolute -left-4 flex items-center justify-center w-6 h-6 bg-[#F84B82] rounded-full ring-4 ring-white"></span>

            {/* Experience Content */}
            <div className="space-y-2">
              <h3 className="text-base font-bold text-[#F84B82]">
                {experience.name}
              </h3>
              <p className="text-sm text-gray-600 italic">{experience.date}</p>
              <ul className="list-disc space-y-1 text-sm text-gray-700 list-outside pl-4">
                {experience.description.map((item, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {item}
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

export default Experiences;
