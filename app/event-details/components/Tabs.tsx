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

const TabSection = () => {
  const handleEdit = (skill) => {
    console.log(`Edit skill: ${skill}`);
    // Here you can implement your edit logic
  };

  return (
    <div className=" max-w-full">
      <Tabs defaultValue="skills" className="w-full">
        <TabsList className="sticky top-0 z-10 flex w-full justify-between md:justify-between gap-4  bg-gray-100 overflow-x-auto overflow-y-" aria-label="tabs">
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="awards">Awards</TabsTrigger>
          <TabsTrigger value="keyformer">Performers</TabsTrigger>
          <TabsTrigger value="musicschool">Music Schools</TabsTrigger>
          <TabsTrigger value="musicband">Music Band</TabsTrigger>
          <TabsTrigger value="highlight">Highlight</TabsTrigger>
        </TabsList>

        <TabsContent value="skills">
          <Card>
            <CardHeader className="flex flex-row justify-between">
              <div className="w-3/4 space-y-1">
                <CardTitle>My Skills</CardTitle>
                <CardDescription>Add your skills here.</CardDescription>
              </div>
              <div className="mt-0 flex w-1/4 justify-end">
                <Button variant="outline">
                  <PlusIcon className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
              {/* List of Skills */}
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex justify-between rounded-md border p-2 hover:bg-gray-100"
                >
                  <span className="font-medium">{skill}</span>
                  <Button
                    variant="outline"
                    onClick={() => handleEdit(skill)}
                    className="h-6 w-6 p-1"
                  >
                    <Pencil1Icon className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="awards">
          <Card>
            <CardHeader className="flex flex-row justify-between">
              <div className="w-3/4 space-y-1">
                <CardTitle>My Awards</CardTitle>
                <CardDescription>Add your awards here.</CardDescription>
              </div>
              <div className="mt-0 flex w-1/4 justify-end">
                <Button variant="outline">
                  <PlusIcon className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
              {/* List of Awards */}
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="flex  justify-between rounded-md border p-2"
                >
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 overflow-hidden rounded-full">
                      <img
                        src={`https://i.pravatar.cc/150?img=${award.id}`}
                        alt={`${award?.name}'s avatar`}
                      />
                    </Avatar>
                    <span className="ml-2 font-medium">{award?.name}</span>
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => handleEdit(award?.name)}
                    className="h-6 w-6 p-1"
                  >
                    <Pencil1Icon className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="keyformer">
          <Card>
            <CardHeader className="flex flex-row justify-between">
              <div className="w-3/4 space-y-1">
                <CardTitle>Our Key Performers</CardTitle>
                <CardDescription>Add our key performers here.</CardDescription>
              </div>
              <div className="mt-0 flex w-1/4 justify-end">
                <Button variant="outline">
                  <PlusIcon className="h-4 w-4" />
                </Button>
              </div>
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
                  <Button
                    variant="outline"
                    onClick={() => handleEdit(performer?.name)}
                    className="h-6 w-6 p-1"
                  >
                    <Pencil1Icon className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="musicschool">
          <Card>
            <CardHeader className="flex flex-row justify-between">
              <div className="w-3/4 space-y-1">
                <CardTitle>Association With My Music Schools</CardTitle>
                <CardDescription>Add your music schools here.</CardDescription>
              </div>
              <div className="mt-0 flex w-1/4 justify-end">
                <Button variant="outline">
                  <PlusIcon className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
              {/* List of school */}
              {music_schools.map((school, index) => (
                <div
                  key={index}
                  className="flex  justify-between rounded-md border p-2"
                >
                  {/* <div className="flex items-center">
                      <Avatar className="h-12 w-12 overflow-hidden rounded-full">
                        <img
                          src={`https://i.pravatar.cc/150?img=${school.id}`}
                          alt={`${school?.name}'s avatar`}
                        />
                      </Avatar> */}
                  <div className="ml-2">
                    <p className="font-medium ">{school?.name}</p>
                  </div>
                  {/* </div> */}
                  <Button
                    variant="outline"
                    onClick={() => handleEdit(school?.name)}
                    className="h-6 w-6 p-1"
                  >
                    <Pencil1Icon className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="musicband">
          <Card>
            <CardHeader className="flex flex-row justify-between">
              <div className="w-3/4 space-y-1">
                <CardTitle>Association With My Music Band</CardTitle>
                <CardDescription>Add your music band here.</CardDescription>
              </div>
              <div className="mt-0 flex w-1/4 justify-end">
                <Button variant="outline">
                  <PlusIcon className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
              {/* List of band */}
              {music_band.map((band, index) => (
                <div
                  key={index}
                  className="flex  justify-between rounded-md border p-2"
                >
                  {/* <div className="flex items-center">
                      <Avatar className="h-12 w-12 overflow-hidden rounded-full">
                        <img
                          src={`https://i.pravatar.cc/150?img=${school.id}`}
                          alt={`${school?.name}'s avatar`}
                        />
                      </Avatar> */}
                  <div className="ml-2">
                    <p className="font-medium ">{band?.name}</p>
                  </div>
                  {/* </div> */}
                  <Button
                    variant="outline"
                    onClick={() => handleEdit(band?.name)}
                    className="h-6 w-6 p-1"
                  >
                    <Pencil1Icon className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="highlight">
          <Card>
            <CardHeader className="flex flex-row justify-between">
              <div className="w-3/4 space-y-1">
                <CardTitle>Highlights</CardTitle>
                <CardDescription>Add your highlights here.</CardDescription>
              </div>
              <div className="mt-0 flex w-1/4 justify-end">
                <Button variant="outline">
                  <PlusIcon className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
              {/* List of Skills */}
              {highlightedItems.map((heighlight, index) => (
                <div
                  key={index}
                  className="flex justify-between rounded-md border p-2"
                >
                  <div>
                    <p className="font-medium">{heighlight?.name}</p>
                    <p className="text-block text-sm text-gray-500">
                      {heighlight?.description}
                    </p>
                    <Button className="mt-3">
                      <a target="_blank" href={heighlight?.videoLink}>
                        Video Link
                      </a>
                    </Button>
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => handleEdit(heighlight?.name)}
                    className="h-6 w-6 p-1"
                  >
                    <Pencil1Icon className="h-4 w-4" />
                  </Button>
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
