"use client";
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
import { Link1Icon, Pencil1Icon, PlusIcon } from "@radix-ui/react-icons";
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
  EditIcon,
  EyeIcon,
  FacebookIcon,
  InstagramIcon,
  MapPin,
  PhoneCallIcon,
  Share2Icon,
  TwitterIcon,
  View,
  ViewIcon,
} from "lucide-react";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import ProfileTabs from "./ProfileTabs";
import RecommentedPeopleList from "./RecommentedPeopleList";
import RecentFollowersList from "./RecentFollowersList";
import { useRouter } from "next/navigation";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const ProfileLayout = () => {
  const router = useRouter();

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
            <Avatar className="h-20 w-20 overflow-hidden rounded-full">
              <img
                src={`https://i.pravatar.cc/150?img=1`}
                alt={`Performer's avatar`}
              />
            </Avatar>
            <div className="ml-3">
              <p className="text-2xl font-medium ">User Name</p>

              <span className="text-md text-gray-500">Band</span>
            </div>
          </div>

          <div className="mt-3 flex items-center space-x-8 text-center">
            <div>
              <span className="mt-1 text-xl font-medium">10</span>
              <p className=" leading-[0.8]">Posts</p>
            </div>
            <div>
              <span className="mt-1 text-xl  font-medium">100</span>
              <p className=" leading-[0.8]">Followers</p>
            </div>
            <div>
              <span className="mt-1  text-xl font-medium ">10</span>
              <p className=" leading-[0.8]">Following</p>
            </div>
          </div>

          <div className="mt-5">
            <div className="flex items-center space-x-2 text-gray-500">
              <p>
                About us content here Lorem ipsum dolor sit amet consectetur
                adipisicing elit. officiis ipsum dolorem voluptatem facilis
                aspernatur voluptas voluptate saepe doloremque beatae sunt
              </p>
            </div>

            <div className="mt-2 flex items-center space-x-2 text-gray-500">
              <MapPin className="h-4 w-4" />
              <p>Location</p>
            </div>
          </div>

          <div className="mt-5">
            <div className="flex items-center space-x-4 text-gray-500 md:space-x-2">
              <Button
                size="sm"
                variant="outline"
                className="border border-gray-300 text-gray-700 hover:bg-gray-100"
              >
                <EditIcon className="h-4 w-4" />
                <span className="ml-2">Edit Profile</span>
              </Button>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border border-gray-300 text-gray-700 hover:bg-gray-100"
                  >
                    <Share2Icon className="h-4 w-4" />
                    <span className="ml-2">Share Profile</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full">
                  <div className=" flex items-center space-x-4 text-center">
                    <div className="rounded-full border-2 border-gray-500 p-1">
                      <FacebookIcon className="h-4 w-4 cursor-pointer" />
                    </div>
                    <div className="rounded-full border-2 border-gray-500 p-1">
                      <TwitterIcon className="h-4 w-4 cursor-pointer" />
                    </div>
                    <div className="rounded-full border-2 border-gray-500 p-1">
                      <PhoneCallIcon className="h-4 w-4 cursor-pointer" />
                    </div>
                    <div className="rounded-full border-2 border-gray-500 p-1">
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
  );
};

export default ProfileLayout;
