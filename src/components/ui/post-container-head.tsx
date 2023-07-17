import { Button } from "./button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import {
  FlameIcon,
  ChevronDownIcon,
  TrendingUpIcon,
  MoreHorizontalIcon,
} from "lucide-react";

const PostContainerHead = () => {
  return (
    <div>
      <h2 className="text-sm mb-2">Popular posts</h2>
      <div className="p-3 flex items-center gap-3 bg-white dark:bg-[#1a1a1b] rounded-md">
        <Button className="flex items-center justify-center gap-1 rounded-full bg-[#f6f7f8] dark:hover:bg-[#303132] text-[#0079D3] dark:text-[#d7dadc] dark:bg-[#272729] px-3 h-8 py-1">
          <FlameIcon className="text-[#0079D3] dark:text-white" /> Hot
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button className="flex items-center justify-center gap-1 rounded-full bg-[#f6f7f8] dark:hover:bg-[#303132] text-[#0079D3] dark:text-[#d7dadc] dark:bg-[#272729] px-3 h-8 py-1">
              <span>Everywhere</span>
              <ChevronDownIcon className="text-[#0079D3] dark:text-white" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            side="bottom"
            align="start"
            sideOffset={6}
            className="bg-white dark:bg-[#1a1a1b] text-[#748384] max-h-[300px] overflow-y-scroll"
          >
            <DropdownMenuItem>China</DropdownMenuItem>
            <DropdownMenuItem>United States</DropdownMenuItem>
            <DropdownMenuItem>United Kingdom</DropdownMenuItem>
            <DropdownMenuItem>Nigeria</DropdownMenuItem>
            <DropdownMenuItem>Switzerland</DropdownMenuItem>
            <DropdownMenuItem>Japan</DropdownMenuItem>
            <DropdownMenuItem>Italy</DropdownMenuItem>
            <DropdownMenuItem>India</DropdownMenuItem>
            <DropdownMenuItem>Ireland</DropdownMenuItem>
            <DropdownMenuItem>Iceland</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button className="flex items-center justify-center gap-1 rounded-full bg-[#f6f7f8] dark:hover:bg-[#303132] text-[#0079D3] dark:text-[#d7dadc] dark:bg-[#272729] px-3 h-8 py-1">
          <TrendingUpIcon className="text-[#0079D3] dark:text-white" /> Top
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <MoreHorizontalIcon />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem className="flex gap-3">
              <TrendingUpIcon className="text-[#878A8C] dark:text-[#1a1a1b]" />
              <span>Rising</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default PostContainerHead;
