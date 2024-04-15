import Navbar from "./mainComponents/Navbar.js";
import Header from "./mainComponents/Header.js";
import Footer from "./mainComponents/Footer.js";

export default function Home() {
  return (
    <main className="flex flex-col bg-[#E7CBCB] ">
      <div className="bg-red w-full">
        <Navbar color="bg-[#E7CBCB]" />
      </div>
      <div className="body ">
        <Header color="bg-[#E7CBCB]" className ="h-screen"/>
      </div>
      <div>
        <Footer color="bg-[#E7CBCB]" />
      </div>
      <div className="load color bg-red hidden"> h</div>
    </main>
  );
}
