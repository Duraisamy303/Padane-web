
import React, { useState } from "react";
import { Button } from "@/components/ui/button"; 
import { MailIcon, MailMinus, MailOpen, MailQuestion, MailWarning } from "lucide-react";
// import { useRouter } from "next/router";

export default function Sidebar({ onSelectCategory }) {
    const [selectedCategory, setSelectedCategory] = useState("received");

//   const router = useRouter(); 

  const invitation = [
    {
      id: 1,
      name: "Received",
      icon: <MailOpen />,
    },
    {
      id: 2,
      name: "Accepted",
      icon: <MailIcon />,
    },
    {
      id: 3,
      name: "Rejected",
      icon: <MailMinus />,
    },
    {
      id: 4,
      name: "Pending",
      icon: <MailQuestion />,
    },
  ];

  const interest = [
    {
      id: 1,
      name: "Sent",
      icon: <MailWarning />,
    },
    {
      id: 2,
      name: "Accepted",
      icon: <MailIcon />,
    },
    {
      id: 3,
      name: "Rejected",
      icon: <MailIcon />,
    },
    {
      id: 4,
      name: "Pending",
      icon: <MailIcon />,
    },
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onSelectCategory(category); // Call the function passed from the parent
  };

  return (
    <div className=" left-0 top-100 z-50 h-full  p-4">
      <div className="space-y-4">
        <div className="px-4 py-2">
          <Button className="w-full">
            <a href="#" className="text-lg">Invitation</a>
          </Button>
          <div className="mt-2">
            <ul>
              {invitation.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 py-2">
                  <span className="text-gray-600">{item.icon}</span>
                  <li className="text-lg">
                    <a
                      href="#"
                      className="text-white-800 hover:text-blue-500"
                      onClick={() => handleCategoryClick(item.name)} 
                    >
                      {item.name}
                    </a>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
        <div className="px-4 py-2">
          <Button className="w-full">
            <a href="#" className="text-lg">Interest</a>
          </Button>
          <div className="mt-2">
            <ul>
              {interest.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 py-2">
                  <span className="text-gray-600">{item.icon}</span>
                  <li className="text-lg">
                    <a
                      href="#"
                      className="text-white-800 hover:text-blue-500"
                      onClick={() => handleCategoryClick(item.name)} 
                    >
                      {item.name}
                    </a>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}



