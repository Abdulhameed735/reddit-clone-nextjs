"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { communities } from "@/data/communities";
import { Separator } from "@/components/ui/separator";
import { Button } from "./ui/button";

const PostSidebar = () => {
  const [showButton, setShowButton] = useState<boolean>(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const threshold: number = 250;

    if (scrollY > threshold) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <aside className="w-[40%] mt-8 hidden lg:flex flex-col items-center mx-auto relative">
      <div className="w-full bg-white dark:bg-[#1a1a1b] rounded-md cursor-pointer outline outline-1 outline-[#cccccc] dark:outline-[#343536]">
        <Accordion type="single" collapsible className="w-full">
          {communities.map((community) => (
            <div className="border-b" key={community.id}>
              <AccordionItem
                key={community.id}
                className="p-0 border-b-0"
                value={"item" + community.id}
              >
                <AccordionTrigger className="py-2 px-2 text-[10px] hover:no-underline uppercase">
                  {community.name}
                </AccordionTrigger>

                <AccordionContent className="flex flex-col px-2">
                  <div className="flex flex-wrap gap-2">
                    {community.communities.map((c) => (
                      <HoverCard key={c.id}>
                        <HoverCardTrigger className="hover:underline text-xs cursor-pointer">
                          {c.name}
                        </HoverCardTrigger>
                        <HoverCardContent className="bg-white dark:bg-[#1a1a1b]">
                          <div className="flex flex-col gap-2">
                            <Link href="/" className="flex gap-2 items-center">
                              <Avatar className="h-6 w-6">
                                <AvatarImage src={c.avatar} />
                              </Avatar>
                              <h2 className="text-sm">r/{community.name}</h2>
                            </Link>

                            <div className="flex justify-between ">
                              <div>
                                <h2 className="text-base font-medium">
                                  {c.members}
                                </h2>
                                <p className="text-xs text-gray-300 mt-[2px]">
                                  Members
                                </p>
                              </div>
                              <Separator
                                className="h-6"
                                orientation="vertical"
                              />
                              <div>
                                <h2 className="text-base font-medium">
                                  {c.online}
                                </h2>
                                <p className="text-xs text-gray-300 mt-[2px]">
                                  Online
                                </p>
                              </div>
                            </div>

                            <div className="flex flex-col gap-2">
                              <p className="text-sm">{c.description}</p>
                              <Button className="w-full bg-[#1483D6] text-white dark:bg-white dark:text-black rounded-full">
                                View Community
                              </Button>
                            </div>
                          </div>
                        </HoverCardContent>
                      </HoverCard>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </div>
          ))}
        </Accordion>
      </div>

      {showButton && (
        <Button
          className="bg-white h-8 rounded-full fixed bottom-0 my-4"
          onClick={scrollToTop}
        >
          Back to top
        </Button>
      )}
    </aside>
  );
};
export default PostSidebar;
