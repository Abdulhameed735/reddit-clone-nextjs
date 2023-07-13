import {
  HomeIcon,
  ChevronDown,
  MoveUpRightIcon,
  Gamepad2Icon,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { topics } from "@/data/topics";

const Sidebar = () => {
  return (
    <aside className="fixed left-0 hidden lg:block w-[25%] bg-white dark:bg-[#1a1a1b] p-5 h-full">
      <div className="mb-4 flex flex-col gap-3">
        <p className="text-xs text-gray-400">FEEDS</p>

        <div className="flex gap-2 text-sm">
          <HomeIcon size={20} />
          <span>Home</span>
        </div>

        <div className="flex gap-2 text-sm">
          <MoveUpRightIcon size={20} />
          <span>Popular</span>
        </div>
      </div>

      <div className="h-3/6 overflow-y-auto scrollbar-thin  scrollbar-rounded-md">
        <p className="text-xs text-gray-400 mb-1">TOPICS</p>
        {topics.map((topic) => (
          <Accordion
            type="single"
            key={topic.id}
            collapsible
            className="border-none w-full"
          >
            <AccordionItem value={topic.AccordionItemValue}>
              <AccordionTrigger className="hover:no-underline">
                <div className="flex gap-3">
                  {topic.AccordionTriggerIcon}
                  <p className="text-left text-sm overflow-x-hidden text-ellipsis">
                    {topic.AccordionTriggerName}
                  </p>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="flex flex-col gap-4 pl-4 text-left">
                  {topic.AccordionContent.map((content) => (
                    <li key={content.id}>{content.name}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>

      <div className="h-[20%] sticky bottom-0 border-t py-3 border-t-[#151516]">
        <p className="mb-4 text-sm w-[80%] text-black dark:text-white">
          Create an account to follow your favorite communities and start taking
          part in conversations.
        </p>
        <Button className="rounded-full w-full py-2 bg-[#ff4500] hover:bg-none dark:text-white font-bold">
          Join reddit
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;
