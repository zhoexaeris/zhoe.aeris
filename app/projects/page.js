import Navbar from "../mainComponents/Navbar.js";
import FeaturedProjects from "./featured-projects.js";
import OtherProjects from "./other-projects.js";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F9F6F5] flex flex-col">
      <Navbar color="bg-[#F9F6F5]" />
      <div className="w-full max-w-4xl mx-auto px-4 flex-1 flex flex-col pt-8 gap-y-12">
        <FeaturedProjects />
        <OtherProjects />
      </div>
    </main>
  );
}
