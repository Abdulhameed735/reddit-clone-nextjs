import Sidebar from "@/components/Sidebar";
import Trending from "@/components/Trending";

export default function Home() {
  return (
    <main className="relative">
      <div className="relative h-full w-full top-[50px]">
        <Sidebar />
        <Trending />
      </div>
    </main>
  );
}
