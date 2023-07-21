"use client";
import { SignedIn } from "@clerk/nextjs";
import PostContainerHead from "@/components/ui/post-container-head";
import PostCard from "@/components/PostCard";
import CreatePost from "@/components/CreatePost";

const PostContainer = () => {
  return (
    <main className="flex flex-col gap-3 lg:w-[60%] w-full relative">
      <SignedIn>
        <CreatePost />
      </SignedIn>

      <PostContainerHead />
      <section className="flex flex-col gap-3 w-full mt-5">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </section>
    </main>
  );
};

export default PostContainer;
