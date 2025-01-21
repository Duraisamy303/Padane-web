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
import TabSection from "./Tabs";
import Headers from "./Header";
// import RecommentedPeopleList from "./RecommentedPeopleList";
// import RecentFollowersList from "./RecentFollowersList";


const Layout = () => {
  return (
    <div className=" max-w-full">
      <div className="container mx-auto max-w-[1200px]">
        <Headers />
      </div>

      {/* seperator */}
      <SelectSeparator className="border-t" />

      {/* Tabs */}
      <div className="container mx-auto max-w-[1200px] py-2">
        <div className="block justify-between md:flex md:space-x-4">
          {/* Left Column */}
          <div className="mb-4 w-full md:mb-0 md:w-3/4">
            <TabSection />
          </div>
          {/* Right Column */}
          <div className="w-full md:w-1/4">
            {/* <div>
              <RecommentedPeopleList />
            </div>
            <div className="mt-4">
              <RecentFollowersList />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
