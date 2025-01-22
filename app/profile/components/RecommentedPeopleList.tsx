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

const RecommentedPeopleList = () => {
  return (
    <div className=" max-w-full">
      <div>
        <Card>
          <CardHeader className="p-4">
            <CardTitle>
              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold">Recommented Peoples</p>
                <p className="cursor-pointer text-sm text-gray-500 underline">
                  View All
                </p>
              </div>
            </CardTitle>
          </CardHeader>

          <SelectSeparator className="border-t" />

          <CardContent className="mt-4 space-y-2">
            {// List of recommended people
            RecommentedPeoples?.map((people, index) => (
              <div
                key={index}
                className={cn(
                  "flex cursor-pointer items-center space-x-4 space-y-0 border-b border-gray-200 pb-3 last:border-b-0 last:pb-0",
                )}
              >
                <Avatar className="h-10 w-10 overflow-hidden rounded-full">
                  <img
                    src={`https://i.pravatar.cc/150?img=${index + 1}`}
                    alt={` avatar`}
                  />
                </Avatar>
                <div className="flex-grow">
                  <p className="text-md font-medium">{people.name}</p>
                  <p className="text-xs text-gray-500">{people.role}</p>
                </div>
                <p className="text-xs text-black">
                  <EyeIcon className="h-4 w-4" />
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RecommentedPeopleList;
