"use client";
import { useUser } from "@clerk/nextjs";
import { SignedOut } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import NavBar from "@/components/Navbar";
import PostContainer from "@/components/PostContainer";
import PostSidebar from "@/components/PostSidebar";
import Sidebar from "@/components/Sidebar";
import Trending from "@/components/Trending";

export default function Home() {
  const { isSignedIn } = useUser();
  return (
    <>
      <NavBar />
      <main className="h-full w-full">
        <div className="relative h-full w-full top-[50px]">
          <SignedOut>
            <Sidebar />
          </SignedOut>

          <section
            className={cn(
              "absolute w-full lg:w-[75%] h-screen right-0 p-3 lg:p-8"
            )}
          >
            <SignedOut>
              <Trending />
            </SignedOut>

            <section className="w-full flex gap-4 mt-5 lg:mt-7">
              <PostContainer />
              <SignedOut>
                <PostSidebar />
              </SignedOut>
            </section>
          </section>
        </div>
      </main>
    </>
  );
}
