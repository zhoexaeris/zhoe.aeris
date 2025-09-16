import React from "react";

const Journey = () => {
  const timeline = [
    {
      id: 1,
      type: "experience",
      title: "Serbiz (Founding Product & Tech Lead)",
      date: "May 2024 – December 2024",
      details: [
        <React.Fragment key="1">
          {/* 1 */}
          Defined <strong>product strategy</strong> and led the migration from{" "}
          <strong>Serbiz Web</strong> to <strong>Serbiz App</strong>.
        </React.Fragment>,
        <React.Fragment key="2">
          {/* 2 */}
          Led the <strong>end-to-end UI/UX</strong> process — conducting
          competitive analyses, creating user flows, and delivering a complete{" "}
          <strong>Figma</strong> prototype.
        </React.Fragment>,
        <React.Fragment key="3">
          {/* 3 */}
          Managed the <strong>Agile</strong> workflow, coordinating closely with
          developers through <strong>daily scrums</strong>.
        </React.Fragment>,
        <React.Fragment key="4">
          {/* 4 */}
          Oversaw <strong>App Store</strong> launch: <strong>TestFlight</strong>{" "}
          betatesting, <strong>Apple</strong> guideline compliance, and creation
          of marketing assets.
        </React.Fragment>,
        <React.Fragment key="5">
          {/* 5 */}
          Built V1 & V2 marketing websites with <strong>
            Next.js
          </strong> and <strong>Tailwind CSS</strong>.
        </React.Fragment>,
      ],
    },
    {
      id: 2,
      type: "experience",
      title: "SeriousMD (UI/UX Intern)",
      date: "May 2024 – August 2024",
      details: [
        <React.Fragment key="1">
          {/* 1 */}
          Conducted <strong>user research</strong> and workflow studies with{" "}
          <strong>5 pediatricians</strong> to understand real-world vaccination
          tracking needs.
        </React.Fragment>,
        <React.Fragment key="2">
          {/* 2 */}
          Designed low-fidelity <strong>wireframes</strong> and interactive
          prototypes in <strong>Figma</strong>, iterating based on direct
          physician feedback.
        </React.Fragment>,
        <React.Fragment key="3">
          {/* 3 */}
          Presented research findings and design proposals to{" "}
          <strong>C-level executives</strong>, ensuring alignment with company
          goals and clinical workflows.
        </React.Fragment>,
        <React.Fragment key="4">
          {/* 4 */}
          Delivered <strong>foundational research and prototypes</strong> that
          progressed into <strong>beta testing</strong> with selected
          pediatricians.
        </React.Fragment>,
      ],
    },
    {
      id: 3,
      type: "education",
      title: "De La Salle University - Manila",
      date: "2021 – Present",
      details: [
        <strong key="1">
          4th Year Bachelor of Science in Computer Science, major in Software
          Technology
        </strong>,
        <React.Fragment key="2">
          {/* 2 */}
          Cumulative GPA: <strong>3.333</strong>
        </React.Fragment>,
        <strong key="3">DOST Merit Scholar</strong>,
        <React.Fragment key="4">
          {/* 4 */}
          <strong>La Salle Computer Society (LSCS)</strong>
          <ul className="list-disc list-outside space-y-1 pl-4">
            <li>
              <em>
                <strong>
                  Associate Vice President, Training & Development
                </strong>
              </em>
              <ul className="list-disc list-outside space-y-1 pl-4">
                <li>
                  Organized recruitment for junior officers to support
                  organizational goals
                </li>
                <li>Led officer team buildings and development events</li>
                <li>
                  Trained and mentored 11 junior officers, enabling them to
                  independently run events
                </li>
              </ul>
            </li>
            <li>
              <em>
                <strong>
                  Executive, Programs Committee – Clash of the Brains (COTB)
                </strong>
              </em>
              <ul className="list-disc list-outside space-y-1 pl-4">
                <li>Built contestant registration systems</li>
                <li>Supported event planning and program flow execution</li>
              </ul>
            </li>
          </ul>
        </React.Fragment>,
        <React.Fragment key="5">
          {/* 5 */}
          <strong>Relevant Coursework:</strong> Data Structures and Algorithms,
          Object-Oriented Programming, Database Systems, Software Engineering,
          Web Development, Human-Computer Interaction
        </React.Fragment>,
      ],
    },
    {
      id: 4,
      type: "education",
      title: "Parañaque Science High School",
      date: "2015 – 2021",
      details: [
        <React.Fragment key="1">
          {/* 1 */}
          Graduated with <strong>High Honors (STEM Strand)</strong>
        </React.Fragment>,
        <strong key="2">
          2018 Division ITCUP Champion (Multimedia – Webpage Design)
        </strong>,
        <strong key="3">
          2018 CAL ICT Regional Champion (Webpage Design)
        </strong>,
      ],
    },
  ];

  return (
    <section className="w-full max-w-4xl px-4 mx-auto flex flex-col gap-y-4">
      {/* Section Header */}
      <h2 className="text-lg font-semibold ">My Journey</h2>

      <div className="relative ml-0 sm:ml-4 sm:border-l-2 sm:border-gray-200">
        {timeline.map((item) => (
          <div key={item.id} className="mb-8 sm:mb-10 sm:ml-6">
            {/* Timeline Marker */}
            <span className="hidden sm:flex absolute -left-4 items-center justify-center w-6 h-6 bg-[#F84B82] rounded-full ring-4 ring-white"></span>

            {/* Content */}
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                <h3 className="text-sm sm:text-base font-bold text-[#F84B82]">
                  {item.title}
                </h3>
                <div className="self-start sm:self-auto bg-gray-200 text-gray-600 px-2 py-1 rounded-md text-[10px] sm:text-xs font-medium">
                  {item.date}
                </div>
              </div>

              <ul className="list-disc list-outside space-y-1 text-sm text-gray-700 pl-4">
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
