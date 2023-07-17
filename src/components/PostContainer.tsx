import PostContainerHead from "@/components/ui/post-container-head";
import PostCard from "@/components/PostCard";

const PostContainer = () => {
  return (
    <main className="lg:w-[60%] w-full relative">
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
