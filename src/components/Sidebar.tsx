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
    <aside className="fixed left-0 top-[50px] hidden lg:block w-[25%] bg-white dark:bg-[#1a1a1b] p-5 h-full">
      <div className="mb-4 flex flex-col gap-3">
        <p className="text-sm text-gray-400">FEEDS</p>

        <div className="flex gap-2">
          <HomeIcon size={20} />
          <span>Home</span>
        </div>

        <div className="flex gap-2">
          <MoveUpRightIcon size={20} />
          <span>Popular</span>
        </div>
      </div>

      <div>
        <p className="text-sm text-gray-400 mb-3">TOPICS</p>
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
                  {topic.AccordionTriggerName}
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="flex flex-col gap-4 pl-4">
                  {topic.AccordionContent.map((content) => (
                    <li key={content.id}>{content.name}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>

      <div className="sticky bottom-0 py-5 border-t border-t-gray-400">
        <p className="mb-4 w-[80%] text-black dark:text-white">
          Create an account to follow your favorite communities and start taking
          part in conversations.
        </p>
        <Button className="rounded-full w-full py-2 dark:bg-[#ff4500] dark:text-white font-bold">
          Join reddit
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;
