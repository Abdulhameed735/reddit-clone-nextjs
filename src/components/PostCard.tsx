import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { ArrowBigUpIcon, ArrowBigDownIcon } from "lucide-react";

const PostCard = () => {
  return (
    <div className="flex flex-row bg-white dark:bg-[#1a1a1b] rounded-lg">
      <div className="flex-col gap-3 hidden lg:flex w-[8%] p-2 lg:items-center bg-[#f6f7f8] dark:bg-[#161617] lg:rounded-tl-lg lg:rounded-bl-md">
        <ArrowBigUpIcon
          strokeWidth={1}
          size={30}
          className="hover:text-red-500 cursor-pointer"
        />
        <span className="text-sm">53.8k</span>
        <ArrowBigDownIcon
          strokeWidth={1}
          size={30}
          className="hover:text-blue-500 cursor-pointer"
        />
      </div>
      <div className="flex w-full lg:w-[92%] p-2 rounded-lg">
        <div className="w-full flex justify-between">
          <div className="flex gap-3">
            <HoverCard>
              <HoverCardTrigger className="flex gap-1 cursor-pointer">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://styles.redditmedia.com/t5_2r5rp/styles/communityIcon_qzjxzx1g08z91.jpg?format=pjpg&s=22310418e8c8bf37bc5ee9f71be3ef609f7d01e5" />
                </Avatar>
                <span>r/facepalm</span>
              </HoverCardTrigger>
              <HoverCardContent className="bg-white dark:bg-[#1a1a1b]">
                <div className="flex flex-col gap-2">
                  <Link href="/" className="flex gap-2 items-center">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src="https://styles.redditmedia.com/t5_2r5rp/styles/communityIcon_qzjxzx1g08z91.jpg?format=pjpg&s=22310418e8c8bf37bc5ee9f71be3ef609f7d01e5" />
                    </Avatar>
                    <h2 className="text-sm">r/facepalm</h2>
                  </Link>

                  <div className="flex justify-between ">
                    <div>
                      <h2 className="text-base font-medium">7.5m</h2>
                      <p className="text-xs text-gray-300 mt-[2px]">Members</p>
                    </div>
                    <Separator className="h-6" orientation="vertical" />
                    <div>
                      <h2 className="text-base font-medium">64.0k</h2>
                      <p className="text-xs text-gray-300 mt-[2px]">Online</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <p className="text-sm">
                      /r/facepalm has gone private in protest of the planned API
                      changes. For more information please read these links:
                      https://www.reddit.com/r…
                    </p>
                    <Button className="w-full bg-[#1483D6] text-white dark:bg-white dark:text-black rounded-full">
                      View Community
                    </Button>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
          <Button className="bg-[#f6f7f8] dark:bg-white rounded-full h-7">
            Join
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
