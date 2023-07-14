import Sidebar from "@/components/Sidebar";
import Trending from "@/components/Trending";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="relative h-full w-full top-[50px]">
        <Sidebar />

        <section className="absolute w-full lg:w-[75%] h-screen right-0 p-3 lg:p-8">
          <Trending />
        </section>
      </div>
    </main>
  );
}
