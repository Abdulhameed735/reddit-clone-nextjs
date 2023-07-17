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
  return (
    <aside className="w-[40%] mt-8 hidden lg:block">
      <div className="w-full bg-white dark:bg-[#1a1a1b] rounded-md outline outline-1">
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
    </aside>
  );
};
export default PostSidebar;
