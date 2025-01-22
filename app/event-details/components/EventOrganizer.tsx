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
  Link2Icon,
  MailIcon,
  MapPin,
  PhoneCall,
  View,
  ViewIcon,
} from "lucide-react";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const EventOrganizer = () => {
  return (
    <div className="max-w-full">
      <div>
        <Card>
          <CardHeader className="p-4">
            <CardTitle>
              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold">Event Organizer</p>
              </div>
            </CardTitle>
          </CardHeader>

          <SelectSeparator className="border-t" />

          <CardContent className="mt-4 space-y-2">
            <div className={cn("flex cursor-pointer flex-col  items-center space-x-2 space-y-0")}>
              <Avatar className="h-20 w-20 overflow-hidden rounded-full">
                <img src={`https://i.pravatar.cc/150?img=1`} alt={` avatar`} />
              </Avatar>
              <div className="flex-grow text-center">
                <p className="text-xs text-gray-500">Event organized by</p>
                <p className="text-lg font-medium">Gladys Pinheiro</p>
              </div>
            </div>
            <div className="pt-6">
              <div className="pb-4">
                <p className="flex items-center space-x-1 text-sm text-gray-500">
                  <PhoneCall size={20} />
                  <span>Phone Number</span>
                </p>
                <p className="text-md font-medium break-words">
                  <a href="tel:9876543210">9876543210</a>
                </p>
              </div>
              <div className="pb-4">
                <p className="flex items-center space-x-1 text-sm text-gray-500">
                  <MailIcon size={20} />
                  <span>Email Address</span>
                </p>
                <p className="text-md font-medium break-words">
                  <a href="mailto:zH9o6@example.com">indumathi@irepute.co.in</a>
                </p>
              </div>
              <div className="pb-4">
                <p className="flex items-center space-x-1 text-sm text-gray-500">
                  <Link2Icon size={20} />
                  <span>Website</span>
                </p>
                <p className="text-md font-medium break-words">
                  <a href="http://sample.com/">Website Name</a>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EventOrganizer;
