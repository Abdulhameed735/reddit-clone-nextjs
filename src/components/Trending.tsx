import React from "react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { trending } from "@/data/trending";
import Link from "next/link";

const Trending = () => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-sm text-black dark:text-[#dad4d6]">Trending today</h1>
      <div className="flex flex-1 gap-3 w-full overflow-x-scroll scrollbar-none">
        {trending.map((trend) => (
          <Link key={trend.id} href="/">
            <div className="relative w-[250px] h-[170px] min-w-[210px] max-w-[375px] lg:w-[230px] lg:h-[150px] rounded-lg shadow-xl">
              <Image
                src={trend.image}
                alt="Image"
                className="w-full h-full object-cover rounded-lg brightness-50"
                fill
              />

              <div className="absolute bottom-0 left-0 right-0 p-2 mt-10 text-white">
                <h1 className="text-base font-semibold">{trend.title}</h1>
                <p className="text-sm line-clamp-2">{trend.description}</p>

                <div className="flex items-center gap-2 mt-3">
                  <Avatar className="w-5 h-5">
                    <AvatarImage src={trend.avatar} alt="avatar" />
                  </Avatar>
                  <p className="text-xs">{trend.community}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Trending;
