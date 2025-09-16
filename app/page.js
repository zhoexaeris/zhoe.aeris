import Navbar from "./mainComponents/Navbar.js";
import Header from "./mainComponents/Header.js";
import Certifications from "./about/certifications.js";
import Education from "./about/education.js";
import Experiences from "./about/experiences.js";
import Footer from "./mainComponents/Footer.js";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F9F6F5] flex flex-col">
      <Navbar color="bg-[#F9F6F5]" />
      <div className="flex-1 flex">
        <div className="w-full max-w-4xl mx-auto px-4 flex flex-col justify-center gap-y-12">
          <Header />
          {/* Add other main content here */}
        </div>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </main>
  );
}
