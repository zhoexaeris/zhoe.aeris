const Experiences = () => {
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

  return (
    <div className="w-full max-w-4xl px-4 mx-auto flex-1 flex flex-col justify-center gap-y-3">
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
  );
};

export default Experiences;
