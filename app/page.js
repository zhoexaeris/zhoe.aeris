import Navbar from "./mainComponents/navbar";
import Header from "./mainComponents/header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#E7CBCB] ">
      <div className="bg-red w-full">
        <Navbar color="bg-[#E7CBCB]" />
      </div>
      <div className="body">
        <Header color="bg-[#E7CBCB]" />
      </div>
      <div className="load color bg-red hidden"> h</div>
    </main>
  );
}
