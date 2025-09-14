import Navbar from "../mainComponents/Navbar.js";
import Experiences from "./experiences.js";
import Education from "./education.js";
import Certifications from "./certifications.js";

export default function Home() {
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
        <Experiences />

        {/* Education */}
        <Education />

        {/* Others*/}
        <Certifications />
      </div>
    </main>
  );
}
