import Navbar from "./mainComponents/navbar";
import Header from "./mainComponents/header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#F9F5F6] ">
      <div className="bg-red w-full">
        <Navbar color="bg-red" />
      </div>
      <div className="body">
        <Header color="red" />
      </div>
      <div className="load color bg-red hidden"> h</div>
    </main>
  );
}
