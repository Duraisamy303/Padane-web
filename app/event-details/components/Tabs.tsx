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
  RelatedEvents,
  skills,
} from "@/utils/constant.utils";
import { EditIcon, EyeIcon, MapPin, View, ViewIcon } from "lucide-react";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const TabSection = () => {
  const handleEdit = (skill) => {
    console.log(`Edit skill: ${skill}`);
    // Here you can implement your edit logic
  };

  return (
    <div className=" max-w-full">
      <Tabs defaultValue="About" className="w-full">
        <TabsList
          className="overflow-y- sticky top-0 z-10 flex w-full justify-between gap-4  overflow-x-auto bg-gray-100 md:justify-between"
          aria-label="tabs"
        >
          <TabsTrigger value="About">About Event</TabsTrigger>
          <TabsTrigger value="Members">participate members</TabsTrigger>
          {/* <TabsTrigger value="keyformer">Performers</TabsTrigger>
          <TabsTrigger value="musicschool">Music Schools</TabsTrigger> */}

          <TabsTrigger value="related">Related Events</TabsTrigger>
          <TabsTrigger value="more_events">More Events</TabsTrigger>
        </TabsList>

        <TabsContent value="About">
          <Card>
            <CardHeader className="flex flex-row justify-between">
              <div className="w-3/4 space-y-1">
                <CardTitle>About Event</CardTitle>
                <CardDescription>Add your about event here.</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="w-full">
              <div className="mb-4">
                <h3 className="text-lg font-medium">Event Highlight</h3>
                <p className="text-md mt-1 text-muted-foreground">
                  Add your event highlight content here.
                </p>
              </div>

              {/* seperator */}
              <SelectSeparator className="border-t" />
              <div className="mt-4">
                <h3 className="text-lg font-medium">Event Event Details</h3>
                <p className="text-md mt-1 text-muted-foreground">
                  Oii Oii - Tamil Alternative Music Festival Oii Oii - Tamil
                  Alternative Music FestivalOii Oii - Tamil Alternative Music
                  FestivalOii Oii - Tamil Alternative Music FestivalOii Oii -
                  Tamil Alternative Music FestivalOii Oii - Tamil Alternative
                  Music FestivalOii Oii - Tamil Alternative Music Festival
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="Members">
          <Card>
            <CardHeader className="flex flex-row justify-between">
              <div className="w-3/4 space-y-1">
                <CardTitle>Participate Members</CardTitle>
                <CardDescription>
                  Add our participate members here.
                </CardDescription>
              </div>
              {/* <div className="mt-0 flex w-1/4 justify-end">
                <Button variant="outline">
                  <PlusIcon className="h-4 w-4" />
                </Button>
              </div> */}
            </CardHeader>
            <CardContent className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
              {/* List of performer */}
              {key_performers.map((performer, index) => (
                <div
                  key={index}
                  className="flex  justify-between rounded-md border p-2"
                >
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 overflow-hidden rounded-full">
                      <img
                        src={`https://i.pravatar.cc/150?img=${performer.id}`}
                        alt={`${performer?.name}'s avatar`}
                      />
                    </Avatar>
                    <div className="ml-2">
                      <p className="font-medium ">{performer?.name}</p>

                      <span className="text-sm text-gray-500">
                        {performer?.description}
                      </span>
                    </div>
                  </div>
                  {/* <Button
                    variant="outline"
                    onClick={() => handleEdit(performer?.name)}
                    className="h-6 w-6 p-1"
                  >
                    <Pencil1Icon className="h-4 w-4" />
                  </Button> */}
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="related">
          <Card>
            <CardHeader className="flex flex-row justify-between">
              <div className="w-3/4 space-y-1">
                <CardTitle>Related Events</CardTitle>
                <CardDescription>Add your related events here.</CardDescription>
              </div>
              {/* <div className="mt-0 flex w-1/4 justify-end">
                <Button variant="outline">
                  <PlusIcon className="h-4 w-4" />
                </Button>
              </div> */}
            </CardHeader>
            <CardContent className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
              {/* List of related event */}
              {RelatedEvents.map((related, index) => (
                <div
                  key={index}
                  className="flex justify-between rounded-md border p-2"
                >
                  <div>
                    <p className="font-medium">{related?.name}</p>
                    <div className="flex items-center justify-between  gap-4">
                      <p className="text-block text-sm text-gray-500">
                        {related?.date}
                      </p>
                      <p className="text-block text-sm text-gray-500">
                        {related?.location}
                      </p>
                      <p className="text-block text-sm text-gray-500">
                        {related?.concet_Type}
                      </p>
                    </div>
                  </div>
                  {/* <Button
                    variant="outline"
                    onClick={() => handleEdit(related?.name)}
                    className="h-6 w-6 p-1"
                  >
                    <Pencil1Icon className="h-4 w-4" />
                  </Button> */}
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="more_events">
          <Card>
            <CardHeader className="flex flex-row justify-between">
              <div className="w-3/4 space-y-1">
                <CardTitle>More events by (Event organizer name )</CardTitle>
                <CardDescription>Add your more events here.</CardDescription>
              </div>
              {/* <div className="mt-0 flex w-1/4 justify-end">
                <Button variant="outline">
                  <PlusIcon className="h-4 w-4" />
                </Button>
              </div> */}
            </CardHeader>
            <CardContent className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
              {/* List of related event */}
              {RelatedEvents.map((related, index) => (
                <div
                  key={index}
                  className="flex justify-between rounded-md border p-2"
                >
                  <div>
                    <p className="font-medium">{related?.name}</p>
                    <div className="flex items-center justify-between  gap-4">
                      <p className="text-block text-sm text-gray-500">
                        {related?.date}
                      </p>
                      <p className="text-block text-sm text-gray-500">
                        {related?.location}
                      </p>
                      <p className="text-block text-sm text-gray-500">
                        {related?.concet_Type}
                      </p>
                    </div>
                  </div>
                  {/* <Button
                    variant="outline"
                    onClick={() => handleEdit(related?.name)}
                    className="h-6 w-6 p-1"
                  >
                    <Pencil1Icon className="h-4 w-4" />
                  </Button> */}
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabSection;
