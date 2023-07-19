"use client";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import {
  User,
  ChevronDown,
  HelpCircleIcon,
  LogInIcon,
  QrCodeIcon,
  MoonIcon,
  SunIcon,
  LaptopIcon,
  Search,
} from "lucide-react";
import MobileSidebarMenu from "./ui/mobile-sidebar-menu";

const NavBar = () => {
  const { setTheme } = useTheme();

  return (
    <nav className="fixed z-30 top-0 left-0 right-0 px-3 lg:px-5 py-1 flex justify-between items-center border-b bg-[#FFFFFF] dark:border-b-gray-400 dark:bg-[#1a1a1b]">
      <div>
        <Link className="hidden lg:block" href="/">
          AReddit
        </Link>
        <Link className="lg:hidden" href="/">
          AR
        </Link>
      </div>

      <MobileSidebarMenu />

      <div className="group rounded-full flex items-center pl-3 gap-2 w-2/4 max-w-md lg:max-w-lg lg:w-[75%] bg-[#F6F7F8] outline outline-1 outline-gray-500 dark:bg-[#272729]">
        <Search />
        <input
          className="w-full h-full px-3 rounded-full py-2 outline-none bg-inherit group-focus:outline-white"
          placeholder="Search AReddit"
          type="search"
        />
      </div>

      <div className="flex gap-5">
        <div className="hidden lg:flex gap-3  ">
          <Button
            size="icon"
            className="rounded-full flex gap-2 py-2 w-[140px] bg-[#F6F7F8] text-[#0F1A1C] dark:bg-[#d7dadc] font-bold"
          >
            <QrCodeIcon size={20} />
            <span>Get App</span>
          </Button>
          <Link href="/login">
            <Button className="rounded-full w-[140px] py-2 bg-[#ff4500] hover:bg-none dark:text-white font-bold">
              Log In
            </Button>
          </Link>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center gap-[2px]">
              <User />
              <ChevronDown />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <div className="flex gap-2">
                <HelpCircleIcon size={20} />
                <span>Help center</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="login" className="flex gap-2">
                <LogInIcon size={20} />
                <span>Login/Sign up</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />

            <DropdownMenuLabel className="font-medium">
              Themes
            </DropdownMenuLabel>
            <div className="flex justify-between gap-2 px-4">
              <span onClick={() => setTheme("light")}>
                <SunIcon size={20} />
              </span>
              <span onClick={() => setTheme("dark")}>
                <MoonIcon size={20} />
              </span>
              <span onClick={() => setTheme("system")}>
                <LaptopIcon size={20} />
              </span>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default NavBar;
