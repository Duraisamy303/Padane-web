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
import { EditIcon, EyeIcon, MapPin, View, ViewIcon } from "lucide-react";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import ProfileTabs from "./ProfileTabs";
import RecommentedPeopleList from "./RecommentedPeopleList";
import RecentFollowersList from "./RecentFollowersList";

const ProfileLayout = () => {
  return (
    <div className=" max-w-full">
      <div className=" flex  flex-col overflow-hidden py-5 lg:flex-row">
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
      </div>
    </div>
  );
};

export default ProfileLayout;
