import { AspectRatio } from "@/components/ui/aspect-radio";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SelectSeparator } from "@radix-ui/react-select";
import {
  CalendarIcon,
  Link1Icon,
  Pencil1Icon,
  PlusIcon,
} from "@radix-ui/react-icons";
import { Avatar } from "@radix-ui/react-avatar";
import {
  awards,
  highlightedItems,
  key_performers,
  music_band,
  music_schools,
  RecommentedPeoples,
  skills,
} from "@/utils/constant.utils";
import {
  AppleIcon,
  ChefHatIcon,
  ComputerIcon,
  EditIcon,
  EyeIcon,
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  MapPin,
  OctagonIcon,
  PhoneCall,
  PhoneCallIcon,
  Share2Icon,
  SkullIcon,
  TicketIcon,
  TwitterIcon,
  TypeIcon,
  View,
  ViewIcon,
  YoutubeIcon,
} from "lucide-react";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import WhatsAppChatApp from "@/app/chatbox/page";
import { CallTracker } from "assert";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { PresetShare } from "@/app/examples/playground/components/preset-share";

const Headers = () => {
  return (
    <div className=" max-w-full">
      <div className=" flex  flex-col gap-4 overflow-hidden py-5 lg:flex-row">
        {/* Left Side: Image */}
        <div className="relative w-full lg:w-1/2">
          <AspectRatio ratio={16 / 10} className="bg-muted">
            {" "}
            <Image
              src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
              alt="Photo by Drew Beamer"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </AspectRatio>
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2">
          <div className="flex items-center">
            {/* <Avatar className="h-20 w-20 overflow-hidden rounded-full">
              <img
                src={`https://i.pravatar.cc/150?img=1`}
                alt={`Performer's avatar`}
              />
            </Avatar> */}
            <div>
              <p className="text-2xl font-medium ">Melody Concert</p>

              {/* <span className="text-md text-gray-500">Band</span> */}
            </div>
          </div>

          <div className="mt-3  flex items-center space-x-8">
            <div className="w-1/2 md:w-1/3">
              <p className="mt-1 flex items-center space-x-1 text-sm font-medium text-gray-400">
                <CalendarIcon className="h-4 w-4" />
                <span>Scheduled on</span>
              </p>
              <p className=" text-sm leading-[1.3]">
                Jan,1, 2025 - Dec,1, 2024
              </p>
            </div>
            <div className="w-1/2 md:w-1/3">
              <p className="mt-1 flex items-center space-x-1 text-sm font-medium text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>Location</span>
              </p>
              <p className=" text-sm leading-[1.3]">Coimbatore (chennai)</p>
            </div>
          </div>

          {/* <div className="mt-7 flex items-center space-x-4 text-center">
            <div>
              <FacebookIcon className="h-6 w-6" />
            </div>
            <div>
              <TwitterIcon className="h-6 w-6" />
            </div>
            <div>
              <PhoneCallIcon className="h-6 w-6 " />
            </div>
            <div>
              <InstagramIcon className="h-6 w-6" />
            </div>
          </div> */}

          {/* <div className="mt-5">
            <div className="flex items-center space-x-2 text-gray-500">
              */}

          <div className="mt-5">
            <div className="flex items-center space-x-2 text-gray-500">
              <p>
                About us content here Lorem ipsum dolor sit amet consectetur
                adipisicing elit. officiis ipsum dolorem voluptatem facilis
                aspernatur voluptas voluptate saepe doloremque beatae sunt
              </p>
            </div>
          </div>

          <div className="mt-3  flex space-x-8">
            <div className="w-1/2 md:w-1/2">
              <p className="mt-1 flex items-center space-x-1 text-sm font-medium text-gray-400">
                <SkullIcon className="h-4 w-4" />
                <span>Skills Wanted</span>
              </p>
              <p className=" text-sm leading-[1.3]">
                Mridangam , Veena, Music, dance
              </p>
            </div>
            <div className="w-1/2 md:w-1/2">
              <p className="mt-1 flex items-center space-x-1 text-sm font-medium text-gray-400">
                <ComputerIcon className="h-4 w-4" />
                <span>Event Type</span>
              </p>
              <p className=" text-sm leading-[1.3]">Offline</p>
            </div>
          </div>

          <div className="mt-3 flex space-x-8">
            <div className="w-1/2 md:w-1/2">
              <p className="mt-1 flex items-center space-x-1 text-sm font-medium text-gray-400">
                <OctagonIcon className="h-4 w-4" />
                <span>Event Category</span>
              </p>
              <p className=" text-sm leading-[1.3]">Contest</p>
            </div>
            <div className="w-1/2 md:w-1/2">
              <p className="mt-1 flex items-center space-x-1 text-sm font-medium text-gray-400">
                <TicketIcon className="h-4 w-4" />
                <span>Event Ticket</span>
              </p>
              <p className=" text-sm leading-[1.3]">Coimbatore (chennai)</p>
            </div>
          </div>

          <div className="mt-5">
            <div className="block items-center space-x-0 space-y-2 text-gray-500 md:flex md:space-x-2 md:space-y-0">
              <div>
                <Button
                  size="sm"
                  variant="outline"
                  className="border border-gray-300 text-gray-700 hover:bg-gray-100"
                >
                  <CalendarIcon className="h-4 w-4" />
                  <span className="ml-1">Add to Google Calendar</span>
                </Button>
              </div>
              <div className="flex items-center space-x-2 ">
                <Button
                  size="sm"
                  variant="outline"
                  className="border border-gray-300 text-gray-700 hover:bg-gray-100"
                >
                  <MailIcon className="h-4 w-4" />
                  <span className="ml-2">Send Invitatin</span>
                </Button>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border border-gray-300 text-gray-700 hover:bg-gray-100"
                    >
                      <Share2Icon className="h-4 w-4" />
                      <span className="ml-2">Share</span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-full">
                    <div className=" flex items-center space-x-4 text-center">
                      <div className="rounded-full border-2 border-gray-500 p-2">
                        <FacebookIcon className="h-4 w-4 cursor-pointer" />
                      </div>
                      <div className="rounded-full border-2 border-gray-500 p-2">
                        <TwitterIcon className="h-4 w-4 cursor-pointer" />
                      </div>
                      <div className="rounded-full border-2 border-gray-500 p-2">
                        <PhoneCallIcon className="h-4 w-4 cursor-pointer" />
                      </div>
                      <div className="rounded-full border-2 border-gray-500 p-2">
                        <InstagramIcon className="h-4 w-4 cursor-pointer" />
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headers;
