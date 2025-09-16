import Navbar from "../mainComponents/Navbar.js";
import Experiences from "./experiences.js";
import Education from "./education.js";
import Certifications from "./certifications.js";
import About from "./about.js";
import Timeline from "./timeline.js";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F9F6F5] flex flex-col">
      <Navbar color="bg-[#F9F6F5]" />

      <div className="flex flex-col gap-y-12 pt-8">
        {/* About Me */}
        <About />

        {/* Timeline */}
        <Timeline />

        {/* Others*/}
        <Certifications />
      </div>
    </main>
  );
}
