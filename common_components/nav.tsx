"use client";
import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menu, X, Search } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { ModeToggle } from "@/components/theme-toggle";
import Image from "next/image";
import Assets from "@/imports/assets.import";

export default function Home() {
  const textTest = "shbds";
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [location] = useState("New York, USA");

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  const [isPopoverOpen, setPopoverOpen] = useState(false);

  const togglePopover = () => setPopoverOpen((prev) => !prev);

  const [isSearchOpen, setSearchOpen] = useState(false);

  const toggleSearch = () => setSearchOpen(!isSearchOpen);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/my-events", label: "My Events" },
    { href: "/event-inbox", label: "Event Inbox" },
    { href: "/chatbox", label: "Chatbox" },
    { href: "/my-profile", label: "My Profile" },
    { href: "/my-network", label: "My Network" },
  ];

  return (
    <div>
      <header className="w-full bg-white shadow dark:bg-gray-900">
        <nav className="flex items-center justify-between px-4 py-2 md:px-8">
          <div className="flex items-center">
            <Link href="/" className="text-lg font-bold text-primary">
           <Image src={Assets.padane} alt="logo" height={80} width={80} className=""/>
            </Link>
          </div>

          <div className="hidden gap-6 md:flex">
            {navLinks.map((link) => (
              <NavLink key={link.label} href={link.href} label={link.label} />
            ))}
          </div>

          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="hidden border-spacing-1 items-center rounded-full border px-4 py-2 text-sm text-muted-foreground md:flex"
                >
                  {location}
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                <DropdownMenuItem>Coimbatore</DropdownMenuItem>
                <DropdownMenuItem>Chennai</DropdownMenuItem>
                <DropdownMenuItem>Bangalore</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Search Icon (Visible in Mobile) */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleSearch}
            >
              <Search className="h-6 w-6" />
            </Button>

            {/* Search Bar (Visible when Search Icon is clicked) */}
            {isSearchOpen && (
              <div className="absolute left-0 right-0 top-16 bg-white px-4 py-2 shadow-md dark:bg-gray-800 md:hidden">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full rounded-md border p-2"
                  />
                  <Button variant="ghost" size="icon" onClick={toggleSearch}>
                    <X className="h-6 w-6" />
                  </Button>
                </div>
              </div>
            )}

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleSidebar}
            >
              {isSidebarOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>

            <Popover open={isPopoverOpen} onOpenChange={setPopoverOpen}>
              <PopoverTrigger asChild>
                <div className="cursor-pointer" onClick={togglePopover}>
                  <Avatar>
                    <AvatarImage src="/path/to/profile-pic.jpg" alt="Profile" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-4">
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold">John Doe</h4>
                  <ModeToggle />
                  <p className="text-sm text-muted-foreground">
                    Software Engineer
                  </p>
                  <Button variant="outline" className="w-full">
                    Edit Profile
                  </Button>
                  <Button variant="outline" className="w-full">
                    Logout
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </nav>
      </header>
      {isSidebarOpen && (
        <aside
          className={cn(
            "fixed left-0 top-0 z-50 h-full w-64 transform bg-white shadow-lg transition-transform dark:bg-gray-800",
            isSidebarOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <div className="flex items-center justify-between px-4 py-4">
            <h2 className="text-lg font-bold text-primary">Menu</h2>
            <Button variant="ghost" size="icon" onClick={toggleSidebar}>
              <X className="h-6 w-6" />
            </Button>
          </div>
          <div className="flex flex-col gap-4 px-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="items-center rounded-full border px-4 py-2 text-sm text-muted-foreground md:flex"
                >
                  {location}
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                <DropdownMenuItem>Coimbatore</DropdownMenuItem>
                <DropdownMenuItem>Chennai</DropdownMenuItem>
                <DropdownMenuItem>Bangalore</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                href={link.href}
                label={link.label}
                onClick={toggleSidebar}
              />
            ))}
          </div>
        </aside>
      )}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
}

function NavLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "block rounded-md px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-gray-100 hover:text-primary dark:hover:bg-gray-700",
        "dark:text-gray-300 dark:hover:text-white",
      )}
      onClick={onClick}
    >
      {label}
    </Link>
  );
}
