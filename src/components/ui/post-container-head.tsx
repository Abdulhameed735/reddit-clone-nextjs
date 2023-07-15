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
    <>
      <h2 className="text-sm mb-2">Popular posts</h2>
      <div className="p-3 flex items-center gap-3 dark:bg-[#1a1a1b] rounded-md">
        <Button className="flex items-center justify-center gap-1 rounded-full hover:bg-[#303132] dark:text-[#d7dadc] bg-[#272729] px-3 h-8 py-1">
          <FlameIcon className="" /> Hot
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button className="flex items-center justify-center gap-1 rounded-full hover:bg-[#303132] dark:text-[#d7dadc] bg-[#272729] px-3 h-8 py-1">
              <span>Everywhere</span>
              <ChevronDownIcon className="" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
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

        <Button className="flex items-center justify-center gap-1 rounded-full hover:bg-[#303132] dark:text-[#d7dadc] bg-[#272729] px-3 h-8 py-1">
          <TrendingUpIcon className="" /> Top
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <MoreHorizontalIcon />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Button>
                <TrendingUpIcon className="" />
                <span>Rising</span>
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};

export default PostContainerHead;
