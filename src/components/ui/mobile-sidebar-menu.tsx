import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./dropdown-menu";

import { HomeIcon, ChevronDown, MoveUpRightIcon } from "lucide-react";

const MobileSidebarMenu = () => {
  return (
    <div className="ml-1 lg:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex gap-[2px] rounded-full">
            <MoveUpRightIcon size={19} />
            <ChevronDown size={19} />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel className="text-[10px] text-gray-200 font-normal">
            FEEDS
          </DropdownMenuLabel>
          <DropdownMenuItem>
            <div className="flex gap-2">
              <HomeIcon size={18} />
              <span>Home</span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div className="flex gap-2">
              <MoveUpRightIcon size={18} />
              <span>Popular</span>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MobileSidebarMenu;
