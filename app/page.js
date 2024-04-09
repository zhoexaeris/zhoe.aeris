import Navbar from "./mainComponents/navbar.js";
import Header from "./mainComponents/header.js";
import Footer from "./mainComponents/Footer.js";
import Projects from "./mainComponents/projects.js";

export default function Home() {
  return (
    <main className="flex flex-col bg-[#E7CBCB] ">
      <div className="bg-red w-full">
        <Navbar color="bg-[#E7CBCB]" />
      </div>
      <div className="body">
        <Header color="bg-[#E7CBCB]" className ="h-screen"/>
        <Projects />
      </div>
      <div>
        <Footer />
      </div>
      <div className="load color bg-red hidden"> h</div>
    </main>
  );
}
