import React from "react";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Trending = () => {
  return (
    <section className="absolute w-full lg:w-[75%] h-screen right-0 p-3 lg:p-8">
      <div className="flex flex-col gap-2">
        <h1>Trending</h1>
        <div className="w-full md:w-[250px] lg:w-[270px]">
          <AspectRatio ratio={16 / 9} className="bg-muted">
            <Image
              src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
              alt="Photo by Drew Beamer"
              fill
              className="rounded-md object-cover"
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  );
};

export default Trending;
