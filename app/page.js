import Navbar from "./mainComponents/navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#F9F5F6] ">
      <div className="bg-red w-full">
        <Navbar color="bg-red" />
      </div>
      <div className="quicksand">this is quicksand</div>
      <div className="source-sans-3">this is source sans</div>
      <div className="load color bg-red "> h</div>
    </main>
  );
}
