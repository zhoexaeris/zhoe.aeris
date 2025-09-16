const Education = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 flex-1 flex flex-col justify-center gap-y-3">
      <div className="text-lg font-bold">Education</div>
      <div className="space-y-4">
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <div className="text-base font-bold text-[#F84B82]">
              De La Salle University - Manila
            </div>
            <div className="bg-gray-200 text-gray-600 px-2 py-1 rounded-md text-xs font-medium">
              2021 - Present
            </div>
          </div>
          <ul className="list-disc list-outside ml-6 space-y-1 text-sm">
            <li>
              4th Year Bachelor of Science in Computer Science major in Software
              Technology{" "}
            </li>
            <li>Cumulative GPA: 3.333</li>
            <li>Department of Science and Technology (DOST) Merit Scholar</li>
            <li>
              Relevant Coursework: Data Structures and Algorithms,
              Object-Oriented Programming, Database Systems, Software
              Engineering, Web Development
            </li>
          </ul>
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <div className="text-base font-bold text-[#F84B82]">
              Paranaque Science High School
            </div>
            <div className="bg-gray-200 text-gray-600 px-2 py-1 rounded-md text-xs font-medium">
              2015 - 2021
            </div>
          </div>
          <ul className="list-disc list-outside ml-6 space-y-1 text-sm">
            <li>Senior High School Graduate with High Honors (STEM)</li>
            <li>Junior High School Graduate with Honors</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education;
