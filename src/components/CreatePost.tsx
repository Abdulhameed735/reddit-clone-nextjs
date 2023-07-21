"use client";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { ImageIcon, LinkIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const CreatePost = () => {
  const { user } = useUser();

  return (
    <div className="p-3 flex items-center gap-3 bg-white dark:bg-[#1a1a1b] rounded-md cursor-pointer">
      <Avatar>
        <AvatarImage src={user?.profileImageUrl} />
      </Avatar>

      <Link href="/submit" className="w-full">
        <Input
          type="text"
          placeholder="Create Post"
          className="bg-white dark:bg-[#1a1a1b] rounded-md outline outline-1 outline-[#cccccc] hover:outline-[#1a1a1b]6 dark:outline-[#343536] dark:hover:outline-white"
        />
      </Link>

      <Link href="/submit">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <ImageIcon className="w-6 h-6" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Create media post</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Link>

      <Link href="/submit">
        <LinkIcon className="w-6 h-6" />
      </Link>
    </div>
  );
};

export default CreatePost;
