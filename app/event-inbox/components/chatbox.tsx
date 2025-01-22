"use client"; // Mark this file as a client-side component

import React, { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Avatar } from "@radix-ui/react-avatar";
import {
  ChevronLeftIcon,
  DotFilledIcon,
  DotsHorizontalIcon,
  ExclamationTriangleIcon,
  QuestionMarkCircledIcon,
} from "@radix-ui/react-icons";
import {
  LocateIcon,
  LogOutIcon,
  SendIcon,
  SettingsIcon,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ChatOption = ({onSelectChat}) => {
  console.log(onSelectChat);
  
  const [selectedChat, setSelectedChat] = useState<number | null>(null);
  const [message, setMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState(""); // State for the search term
  const [chats, setChats] = useState<any>([
    {
      id: 1,
      name: "John Doe",
      messages: [
        { sender: "John Doe", text: "Hey, how's it going?", time: "10:30 AM" },
        { sender: "You", text: "Not much, you?", time: "10:31 AM" },
      ],
    },
    {
      id: 2,
      name: "Jane Smith",
      messages: [
        {
          sender: "Jane Smith",
          text: "See you at the meeting.",
          time: "9:45 AM",
        },
        { sender: "You", text: "Okay, I'll be there.", time: "9:46 AM" },
      ],
    },
    {
      id: 3,
      name: "Alice",
      messages: [
        { sender: "Alice", text: "Can we talk later?", time: "8:00 AM" },
        {
          sender: "You",
          text: "Sure, call me when you're free.",
          time: "8:05 AM",
        },
      ],
    },
    {
      id: 4,
      name: "Bob",
      messages: [
        {
          sender: "Bob",
          text: "Got the files you asked for.",
          time: "Yesterday",
        },
        { sender: "You", text: "Thanks! I'll review them.", time: "Yesterday" },
      ],
    },
  ]);
  const [drawerOpen, setDrawerOpen] = useState(false); // State for toggling the drawer
  const messageInputRef = useRef<HTMLInputElement | null>(null);

  // Handle selecting a chat
  const handleSelectChat = (chatId: number) => {
    setSelectedChat(chatId);
    setDrawerOpen(false); // Close the drawer when a chat is selected
  };

  // Handle sending a message
  const handleSendMessage = () => {
    if (selectedChat !== null && message.trim() !== "") {
      const updatedChats = chats.map((chat) => {
        if (chat.id === selectedChat) {
          return {
            ...chat,
            messages: [
              ...chat.messages,
              {
                sender: "You",
                text: message,
                time: new Date().toLocaleTimeString(),
              },
            ],
          };
        }
        return chat;
      });
      setChats(updatedChats);
      setMessage(""); // Clear input field after sending
    }
  };

  // Set the first chat as selected when chats are loaded
  useEffect(() => {
    if (chats.length > 0 && selectedChat === null) {
      setSelectedChat(chats[0].id); // Set the first chat as selected
    }
  }, [chats, selectedChat]);

  // Scroll to the bottom when the selected chat changes or when a new message is sent
  useEffect(() => {
    if (messageInputRef.current) {
      messageInputRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedChat, chats]);

  // Filter chats based on the search term
  const filteredChats = chats.filter((chat) =>
    chat.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className={`flex max-w-full  flex-col overflow-hidden bg-gray-100 lg:flex-row ${selectedChat ? "block" : "hidden"}`}>
   
      {/* Right side: Chat Window */}
      <div className="relative mb-4 ml-4 mr-4 mt-4 flex h-[85vh] w-[100%] flex-col rounded-lg bg-white p-4 shadow-md ">
        {/* User Profile (Sticky at top) */}
        {selectedChat !== null ? (
          <div className="sticky top-0  bg-gray-100 p-4 shadow-md">
            <div className="flex items-center space-x-4">
              {/* Menu Icon and Drawer for Small Screens */}
              <div className="left-4 z-20 lg:hidden">
                <Button
                  onClick={() => setDrawerOpen(!drawerOpen)}
                  className="rounded-full bg-blue-500 p-3  text-white"
                >
                  ☰ {/* Hamburger icon */}
                </Button>
              </div>

              <Dialog>
                <DialogTrigger asChild>
                  {/* Wrap Avatar and the profile details in a parent div */}
                  <div className="flex items-center space-x-4 ">
                    <Avatar className="h-12 w-12 cursor-pointer overflow-hidden rounded-full">
                      <img
                        src={`https://i.pravatar.cc/150?img=${selectedChat}`}
                        alt={`User profile`}
                      />
                    </Avatar>
                  </div>
                </DialogTrigger>

                <DialogContent className="sm:max-w-[350px] md:max-w-[475px]">
                  <DialogHeader>
                    <DialogTitle>Profile Info</DialogTitle>
                    {/* <DialogDescription>
                      Make changes to your profile here. Click save when you're
                      done.
                    </DialogDescription> */}
                  </DialogHeader>
                  <div className="mt-2 flex flex-col items-center text-center">
                    <Avatar className="h-30 w-30 mb-4 overflow-hidden rounded-full">
                      <img
                        src={`https://i.pravatar.cc/150?img=${selectedChat}`}
                        alt={`User profile`}
                      />
                    </Avatar>
                    <p className="text-xl font-semibold">
                      {chats.find((chat) => chat.id === onSelectChat)?.name}
                    </p>
                    <p className="text-sm text-gray-500">Band</p>
                    {/* <p className="mt-4 text-gray-400">
                      Additional information or details can go here.
                    </p> */}
                  </div>
                  <div className="mt-2 flex space-x-3 text-gray-500">
                    <p>INFORMATION</p>
                  </div>
                  {/* <DialogFooter>
                    <Button type="submit">Save changes</Button>
                  </DialogFooter> */}

                  <Card className="w-full">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        {" "}
                        {/* Use Tailwind's flex utilities */}
                        <div className="flex-shrink-0">
                          {" "}
                          {/* Prevent the icon from shrinking */}
                          <LocateIcon className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Location</p>
                          <p className="text-sm text-gray-500">Coimbatore</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="w-full">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        {" "}
                        {/* Use Tailwind's flex utilities */}
                        <div className="flex-shrink-0">
                          {" "}
                          {/* Prevent the icon from shrinking */}
                          <ExclamationTriangleIcon className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">About Me</p>
                          <p className="text-sm text-gray-500">Testing</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </DialogContent>
              </Dialog>

              <div className="flex flex-col">
                <p className="text-lg font-medium">
                  {chats.find((chat) => chat.id === onSelectChat)?.name}
                </p>
                <p className="text-sm text-gray-500">
                  Last seen{" "}
                  {
                    chats.find((chat) => chat.id === onSelectChat)?.messages[
                      chats.find((chat) => chat.id === onSelectChat)?.messages
                        .length - 1
                    ].time
                  }
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="sticky top-0  bg-gray-100 p-4 shadow-md">
            <div className="flex items-center space-x-4">
              {/* Menu Icon and Drawer for Small Screens */}
              <div className="left-4 z-20 lg:hidden">
                <Button
                  onClick={() => setDrawerOpen(!drawerOpen)}
                  className="rounded-full bg-blue-500 p-3  text-white"
                >
                  ☰ {/* Hamburger icon */}
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Chat messages */}
        <div className=" mb-3 mt-10 flex-grow space-y-4 overflow-y-auto">
          {/* {selectedChat !== null ? ( */}

          {chats
            .find((chat) => chat.id === onSelectChat)
            ?.messages.map((msg, idx) => (
              <div
                key={idx}
                className={cn(
                  "flex items-start",
                  msg.sender === "You" ? "justify-end" : "justify-start",
                )}
              >
                <div
                  className={cn(
                    "max-w-xs rounded-lg p-2",
                    msg.sender === "You" ? "bg-blue-100" : "bg-red-100",
                  )}
                >
                  <p>{msg.text}</p>
                  <p className="pt-1 text-right text-xs text-gray-400">
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
          {/* //   ) : (
        //     <p className="text-center text-gray-500">
        //       Select a chat to start messaging.
        //     </p>
        //   )} */}
        </div>
        {/* Message input area (Sticky at the bottom) */}
        <div className=" bottom-1  w-full bg-gray-100">
          <div className="flex items-center space-x-2 p-2">
            <Input
              ref={messageInputRef}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded-r-lg border p-2"
              placeholder="Type a message..."
            />
            <Button
              onClick={handleSendMessage}
              className="rounded-r-lg bg-blue-500 p-2 text-white"
            >
              <SendIcon />
            </Button>
          </div>
        </div>
      </div>

      {/* Profile Info Section (Only shown when a user is selected) */}
     
    </div>
  );
};

export default ChatOption;
