import PostContainerHead from "@/components/ui/post-container-head";
import PostCard from "@/components/PostCard";

const PostContainer = () => {
  return (
    <main className="lg:w-[60%] w-full relative">
      <PostContainerHead />
      <section className="w-full mt-5">
        <PostCard />
      </section>
    </main>
  );
};

export default PostContainer;
