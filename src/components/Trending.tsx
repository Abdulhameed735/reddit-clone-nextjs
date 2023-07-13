import React from "react";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { trending } from "@/data/trending";

const Trending = () => {
  return (
    <section className="absolute w-full lg:w-[75%] h-screen right-0 p-3 lg:p-8">
      <div className="flex flex-col gap-2">
        <h1>Trending now</h1>
        <div className="flex gap-2 relative">
          {trending.map((trend) => (
            <div key={trend.id} className="w-full md:w-[250px] lg:w-[270px]">
              <AspectRatio
                ratio={16 / 9}
                className="bg-muted shadow-lg relative"
              >
                <Image
                  src={trend.image}
                  alt="Photo by Drew Beamer"
                  fill
                  className="rounded-md object-cover"
                />
              </AspectRatio>
              <div className="absolute bottom-0 p-1 bg-black bg-opacity-50 text-white">
                <h2 className="text-[18px] font-bold">{trend.title}</h2>
                <p className="text-sm">{trend.description}</p>
                <div className="flex items-center gap-1">
                  <Avatar className="w-5 h-5">
                    <AvatarImage src={trend.avatar} alt="avatar" />
                    <AvatarFallback>{trend.initials}</AvatarFallback>
                  </Avatar>
                  <span className="text-xs font-semibold">
                    {trend.community}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trending;
