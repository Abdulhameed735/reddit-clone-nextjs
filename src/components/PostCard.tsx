"use client";
import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
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
import Image from "next/image";
import { cn } from "@/lib/utils";

const PostCard = () => {
  const [isUpvoted, setIsUpvoted] = useState<boolean>(false);
  const [isDownvoted, setIsDownvoted] = useState<boolean>(false);

  const { isSignedIn } = useUser();
  const router = useRouter();

  const handleUpVoteClick = () => {
    if (!isSignedIn) {
      router.push("/login");
    } else {
      setIsUpvoted((prevState) => !isUpvoted);
      setIsDownvoted(false);
    }
  };

  const handleDownVoteClick = () => {
    if (!isSignedIn) {
      router.push("/login");
    } else {
      setIsDownvoted((prevState) => !isDownvoted);
      setIsUpvoted(false);
    }
  };

  return (
    <div className="flex flex-row bg-white dark:bg-[#1a1a1b] rounded-lg outline outline-1 outline-[#cccccc] hover:outline-[#1a1a1b] dark:outline-[#343536] dark:hover:outline-white cursor-pointer">
      <div className="flex-col gap-3 hidden lg:flex w-[8%] p-2 lg:items-center bg-[#f6f7f8] dark:bg-[#161617] lg:rounded-tl-lg lg:rounded-bl-md">
        <ArrowBigUpIcon
          strokeWidth={1}
          size={30}
          fill={isUpvoted ? "#EF4444" : "none"}
          className={cn(
            "hover:text-red-500 cursor-pointer",
            isUpvoted ? "text-red-500" : ""
          )}
          onClick={handleUpVoteClick}
        />
        <span className="text-sm">53.8k</span>
        <ArrowBigDownIcon
          strokeWidth={1}
          size={30}
          fill={isDownvoted ? "#3B82F6" : "none"}
          className={cn(
            "hover:text-blue-500 cursor-pointer",
            isDownvoted ? "text-blue-500" : ""
          )}
          onClick={handleDownVoteClick}
        />
      </div>
      <div className="flex flex-col gap-4 w-full lg:w-[92%] p-2 rounded-lg">
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

        <div className="flex flex-col gap-3">
          <h1>
            Classmate I have not spoken to in 5 years messages me out of the
            blue to delete a picture I posted of myself - because her boyfriend
            say it. (More in comments)
          </h1>

          <div className="w-full">
            <Image
              src="https://preview.redd.it/92zm5ua6cccb1.jpg?width=640&crop=smart&auto=webp&s=2583b2de828bbc40288d8ac45012d64f0bb9ec2c"
              alt="image"
              width={400}
              height={400}
            />
          </div>

          <div className="flex gap-3"></div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
