const Certifications = () => {
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
    <div className="w-full max-w-4xl mx-auto px-4 flex-1 flex flex-col justify-center gap-y-3 pb-8">
      <div className="text-xl font-bold">Others</div>

      {/* Certifications */}
      <div className="space-y-4">
        <div className="text-lg font-bold text-[#F84B82]">Certifications</div>
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
  );
};

export default Certifications;
