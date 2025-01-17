"use client"; // Mark this file as a client-side component

import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Avatar } from "@radix-ui/react-avatar";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { SendIcon, X } from "lucide-react";

const ChatOption = () => {
  const [selectedChat, setSelectedChat] = useState<number | null>(null);
  const [message, setMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState(""); // State for the search term
  const [chats, setChats] = useState([
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
    <div className="flex max-w-full  flex-col overflow-hidden bg-gray-100 lg:flex-row">
      {/* Left side: Chat List */}
      <div
        className={`mb-4 ml-4 mr-4 mt-4 h-[85vh] w-full overflow-y-auto rounded-lg bg-white p-4 shadow-md lg:mr-0 lg:block xl:w-1/4 lg:w-2/5 ${drawerOpen ? "block" : "hidden"} lg:visible`}
      >
        {/* Global Search */}
        <div className="w-full p-4">
          <Input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-lg border p-2"
            placeholder="Search for a chat..."
          />
        </div>
        {filteredChats.length > 0 ? (
          filteredChats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => handleSelectChat(chat.id)}
              className={cn(
                "flex cursor-pointer items-center space-x-4 rounded-md p-3 hover:bg-gray-100",
                selectedChat === chat.id ? "bg-gray-200" : "",
              )}
            >
              <Avatar className="h-12 w-12 overflow-hidden rounded-full">
                <img
                  src={`https://i.pravatar.cc/150?img=${chat.id}`}
                  alt={`${chat.name}'s avatar`}
                />
              </Avatar>
              <div className="flex-grow">
                <p className="text-lg font-medium">{chat.name}</p>
                <p className="text-sm text-gray-500">
                  {chat.messages[chat.messages.length - 1].text}
                </p>
              </div>
              <p className="text-xs text-black">
                {chat.messages[chat.messages.length - 1].time}
              </p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No chats found.</p>
        )}
      </div>

      {/* Right side: Chat Window */}
      <div className="mb-4 relative ml-4 mr-4 mt-4 flex h-[85vh] w-[93%] flex-col rounded-lg bg-white p-4 shadow-md md:w-[95%] xl:w-3/4 lg:w-3/5">
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

              <Avatar className="h-12 w-12 overflow-hidden rounded-full">
                <img
                  src={`https://i.pravatar.cc/150?img=${selectedChat}`}
                  alt={`User profile`}
                />
              </Avatar>
              <div className="flex flex-col">
                <p className="text-lg font-medium">
                  {chats.find((chat) => chat.id === selectedChat)?.name}
                </p>
                <p className="text-sm text-gray-500">
                  Last seen{" "}
                  {
                    chats.find((chat) => chat.id === selectedChat)?.messages[
                      chats.find((chat) => chat.id === selectedChat)?.messages
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
            .find((chat) => chat.id === selectedChat)
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
      {/* <div className="mb-4 mr-4 mt-4 flex h-[85vh] w-full flex-col rounded-lg bg-white p-4 shadow-md lg:w-1/4">
        {selectedChat !== null && (
          <div className="mt-8 flex flex-col items-center text-center">
            <Avatar className="mb-4 h-24 w-24 overflow-hidden rounded-full">
              <img
                src={`https://i.pravatar.cc/150?img=${selectedChat}`}
                alt={`User profile`}
              />
            </Avatar>
            <p className="text-xl font-semibold">
              {chats.find((chat) => chat.id === selectedChat)?.name}
            </p>
            <p className="text-sm text-gray-500">
              {chats.find((chat) => chat.id === selectedChat)?.name} is a
              software developer who loves coding and solving complex problems.
            </p>
            <p className="mt-4 text-gray-400">
              Additional information or details can go here.
            </p>
          </div>
        )}
      </div> */}

      {/* Side Drawer */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity lg:hidden ${drawerOpen ? "opacity-100" : "pointer-events-none opacity-0 "}`}
      >
        <div className="fixed left-0 top-0 h-full w-full overflow-y-auto bg-white p-4">
          <div className="flex items-center justify-end">
            <X className="h-8 w-8 " onClick={() => setDrawerOpen(false)} />
          </div>

          {/* Global Search */}
          <div className="w-full p-4">
            <Input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-lg border p-2"
              placeholder="Search for a chat..."
            />
          </div>
          {filteredChats.length > 0 ? (
            filteredChats.map((chat) => (
              <div
                key={chat.id}
                onClick={() => handleSelectChat(chat.id)}
                className={cn(
                  "flex cursor-pointer items-center space-x-4 rounded-md p-3 hover:bg-gray-100",
                  selectedChat === chat.id ? "bg-gray-200" : "",
                )}
              >
                <Avatar className="h-12 w-12 overflow-hidden rounded-full">
                  <img
                    src={`https://i.pravatar.cc/150?img=${chat.id}`}
                    alt={`${chat.name}'s avatar`}
                  />
                </Avatar>
                <div className="flex-grow">
                  <p className="text-lg font-medium">{chat.name}</p>
                  <p className="text-sm text-gray-500">
                    {chat.messages[chat.messages.length - 1].text}
                  </p>
                </div>
                <p className="text-xs text-black">
                  {chat.messages[chat.messages.length - 1].time}
                </p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No chats found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatOption;
