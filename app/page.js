import Navbar from "./mainComponents/Navbar.js";
import Header from "./mainComponents/Header.js";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F9F6F5] flex flex-col">
      <Navbar color="bg-[#F9F6F5]" />
      <div className="w-full max-w-4xl mx-auto px-4 flex-1 flex flex-col justify-center">
        <Header />
        {/* Add other main content here */}
      </div>
    </main>
  );
}
