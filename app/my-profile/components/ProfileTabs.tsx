"use client";
import { AspectRatio } from "@/components/ui/aspect-radio";
import Image from "next/image";
import React, { useState } from "react";
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
  Recent_posts,
  RecommentedPeoples,
  skills,
} from "@/utils/constant.utils";
import {
  EditIcon,
  EyeIcon,
  Heart,
  MapPin,
  MessageCircle,
  SendIcon,
  Share,
  Trash2,
  View,
  ViewIcon,
} from "lucide-react";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const ProfileTabs = () => {
  const [commentToggles, setCommentToggles] = useState({});
  const [likedUsersToggle, setLikedUsersToggle] = useState({});
  const [selectedPostId, setSelectedPostId] = useState(null);

  const handleLikedUsersToggle = (postId) => {
    setSelectedPostId(postId); // Set the selected post to open the dialog
    setLikedUsersToggle((prevState) => ({
      ...prevState,
      [postId]: !prevState[postId], // Toggle the visibility of the liked users dialog
    }));
  };

  const closeDialog = () => {
    setLikedUsersToggle({});
    setSelectedPostId(null);
  };

  const handleCommentToggle = (postId) => {
    setCommentToggles((prevState) => ({
      ...prevState,
      [postId]: !prevState[postId], // Toggle the specific post's comment section
    }));
  };

  const handleEdit = (skill) => {
    console.log(`Edit skill: ${skill}`);
    // Here you can implement your edit logic
  };

  return (
    <div className=" max-w-full">
      <Tabs defaultValue="aboutme" className="w-full">
        <TabsList
          className="overflow-y- sticky top-0 z-10 flex w-full justify-between gap-4  overflow-x-auto bg-gray-100 md:justify-between"
          aria-label="tabs"
        >
          <TabsTrigger value="aboutme">About Me</TabsTrigger>
          <TabsTrigger value="posts">Recent Posts</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="awards">Awards</TabsTrigger>
          <TabsTrigger value="keyformer">Performers</TabsTrigger>
          <TabsTrigger value="musicschool">Music Schools</TabsTrigger>
          <TabsTrigger value="musicband">Music Band</TabsTrigger>
          <TabsTrigger value="highlight">Highlight</TabsTrigger>
        </TabsList>

        <TabsContent value="aboutme">
          <Card>
            <CardHeader className="flex flex-row justify-between">
              <div className="w-3/4 space-y-1">
                <CardTitle>About Me</CardTitle>
                <CardDescription>Write about yourself here.</CardDescription>
              </div>
              {/* <div className="mt-0 flex w-1/4 justify-end">
                <Button variant="outline">
                  <PlusIcon className="h-4 w-4" />
                </Button>
              </div> */}
            </CardHeader>
            <CardContent className="w-full">
              <div>
                <p>
                  About us content here Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. officiis ipsum dolorem voluptatem facilis
                  aspernatur voluptas voluptate saepe doloremque beatae sunt
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam,
                  quae.
                </p>
                <p className="mt-3">
                  About us content here Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. officiis ipsum dolorem voluptatem facilis
                  aspernatur voluptas voluptate saepe doloremque beatae sunt
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam,
                  quae.{" "}
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="posts">
          <Card>
            <CardHeader className="flex flex-row justify-between">
              <div className="w-3/4 space-y-1">
                <CardTitle>Recent Posts</CardTitle>
                <CardDescription>Recent Posts here.</CardDescription>
              </div>
              {/* <div className="mt-0 flex w-1/4 justify-end">
                <Button variant="outline">
                  <PlusIcon className="h-4 w-4" />
                </Button>
              </div> */}
            </CardHeader>
            <CardContent className="w-full">
              {/* List of recent_posts */}
              {Recent_posts.map((recent_posts, index) => (
                <div
                  key={index}
                  className="mt-5  flex justify-between rounded-md border p-2"
                >
                  <div className="w-full">
                    <div className="flex items-center">
                      <Avatar className="h-10 w-10 overflow-hidden rounded-full">
                        <img
                          src={`https://i.pravatar.cc/150?img=${recent_posts.id}`}
                          alt={`${recent_posts?.user_name}'s avatar`}
                        />
                      </Avatar>
                      <div className="ml-2">
                        <p className="font-medium leading-none">
                          {recent_posts?.user_name}
                        </p>

                        <span className="text-xs leading-none text-gray-500">
                          {recent_posts?.date}, {recent_posts?.time}
                        </span>
                      </div>
                    </div>

                    <div>
                      <p className="mt-2 font-medium ">{recent_posts?.title}</p>
                      <p className="mt-0 text-gray-500">
                        {" "}
                        {recent_posts?.description}
                      </p>
                      <div className="mt-2 h-96 w-full">
                        <img
                          src={recent_posts?.image}
                          alt={recent_posts?.title}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <div className="mt-2 flex items-center space-x-2">
                        <Button
                          variant="outline"
                          className="relative border-none "
                        >
                          <Heart className="h-6 w-6" />
                          <p className="absolute right-0 top-0 rounded-full bg-gray-200 px-1 py-1 text-xs font-medium leading-none text-gray-500">
                            {recent_posts?.like_count > 99
                              ? "99+"
                              : recent_posts?.like_count}
                          </p>
                        </Button>
                        <Button
                          variant="outline"
                          className="relative border-none"
                          onClick={() => handleCommentToggle(recent_posts.id)}
                        >
                          <MessageCircle className="h-6 w-6" />
                          <p className="text-md absolute right-0 top-0 rounded-full bg-gray-200 px-2 py-1 font-medium leading-none text-gray-500">
                            {recent_posts?.comment_count}
                          </p>
                        </Button>
                        <Button
                          variant="outline"
                          className="relative border-none"
                        >
                          <SendIcon className="h-6 w-6" />
                          <p className="text-md absolute right-0 top-0 rounded-full bg-gray-200 px-2 py-1 font-medium leading-none text-gray-500">
                            0
                          </p>
                        </Button>
                      </div>

                      <div className="mt-2 flex items-center justify-between space-x-1">
                        <div className="flex items-center  space-x-2">
                          <div className="flex items-center space-x-[-10px]">
                            {" "}
                            {/* Adjust space between images */}
                            {recent_posts?.liked_users
                              ?.slice(0, 3)
                              .map((user, index) => (
                                <Avatar
                                  key={index}
                                  className={`h-7 w-7 overflow-hidden rounded-full ${index === 1 ? "ml-[-10px]" : ""} ${index === 2 ? "ml-[-10px]" : ""}`}
                                >
                                  <AvatarImage
                                    src={`https://i.pravatar.cc/150?img=${user.id}`}
                                    alt={user?.name}
                                  />
                                </Avatar>
                              ))}
                          </div>
                          <div className="flex items-center space-x-1">
                            <p className="text-md font-medium text-gray-500">
                              Liked by{" "}
                              {recent_posts?.liked_users.length > 1 ? (
                                <>
                                  {recent_posts?.liked_users[0]?.name} and{" "}
                                  <span
                                    className="cursor-pointer text-blue-500"
                                    onClick={() =>
                                      handleLikedUsersToggle(recent_posts.id)
                                    }
                                  >
                                    others
                                  </span>
                                </>
                              ) : (
                                recent_posts?.liked_users.map(
                                  (user) => user?.name,
                                )
                              )}
                            </p>
                          </div>
                        </div>
                        <p className="text-md cursor-pointer text-gray-500">
                          {" "}
                          {recent_posts?.comment_count} comments
                        </p>
                      </div>
                      {/* Comment section toggle */}
                      {commentToggles[recent_posts.id] && (
                        <div className="relative mt-2 flex items-center space-x-2">
                          <textarea
                            className="mt-2 w-full rounded-md border p-2 pr-12"
                            placeholder="Write a comment..."
                          />
                          <Button
                            variant="outline"
                            className="absolute right-5 mt-2 "
                          >
                            <SendIcon className="h-6 w-6" />
                          </Button>
                        </div>
                      )}

                      {/* Dialog Box for Liked Users List */}
                      {likedUsersToggle[recent_posts.id] && (
                        <Dialog
                          open={selectedPostId === recent_posts.id}
                          onOpenChange={closeDialog}
                          className="fixed inset-0 z-50 flex items-center justify-center"
                        >
                          <DialogContent
                            className={cn(
                              "mx-auto max-w-md rounded-lg bg-white p-6",
                            )}
                          >
                            <DialogHeader>
                              <DialogTitle>Liked Users</DialogTitle>
                            </DialogHeader>

                            <SelectSeparator className="border-t" />

                            {/* List of liked users */}
                            <ScrollArea className={cn(" w-full pr-5", recent_posts?.liked_users?.length > 6 ? "h-96" : "h-full")}>
                              {recent_posts?.liked_users?.map(
                                (people, index) => (
                                  <div
                                    key={index}
                                    className={cn(
                                      "flex cursor-pointer items-center space-x-4 space-y-0 pb-3",
                                    )}
                                  >
                                    <Avatar className="h-10 w-10 overflow-hidden rounded-full">
                                      <img
                                        src={`https://i.pravatar.cc/150?img=${index + 1}`}
                                        alt={`avatar`}
                                      />
                                    </Avatar>
                                    <div className="flex-grow">
                                      <p className="text-md font-medium">
                                        {people.name}
                                      </p>
                                      <p className="text-xs text-gray-500">
                                        {people.name}
                                      </p>
                                    </div>
                                    <p className="text-xs text-black">
                                      <EyeIcon className="h-4 w-4" />
                                    </p>
                                  </div>
                                ),
                              )}
                            </ScrollArea>
                          </DialogContent>
                        </Dialog>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

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
                    <Trash2 className="h-4 w-4" />
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

export default ProfileTabs;
