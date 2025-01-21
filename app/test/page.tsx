"use client";
import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X } from "lucide-react";

export default function SelectDemo() {
  // Options in { value, label } format
  const options = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "blueberry", label: "Blueberry" },
    { value: "grapes", label: "Grapes" },
    { value: "pineapple", label: "Pineapple" },
  ];

  // State for selected items
  const [selectedFruits, setSelectedFruits] = React.useState<string[]>([]);

  // Handle selection change
  const handleChange = (value: string) => {
    console.log("value: ", value);
    setSelectedFruits((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  // Handle removing an item
  const handleRemoveItem = (item: string) => {
    setSelectedFruits((prev) => prev.filter((selectedItem) => selectedItem !== item));
  };

  return (
    <div className="space-y-4">
      {/* Multi-select dropdown */}
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select fruits">
            {/* Display selected values */}
            {selectedFruits.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {selectedFruits.map((selectedValue) => {
                  const selectedOption = options.find(
                    (option) => option.value === selectedValue
                  );
                  return selectedOption ? (
                    <div
                      key={selectedValue}
                      className="flex items-center space-x-2 px-2 py-1 bg-gray-200 rounded-lg"
                    >
                      <span>{selectedOption.label}</span>
                      <button
                        onClick={() => handleRemoveItem(selectedValue)}
                        className="text-red-500"
                      >
                        <X size={12} />
                      </button>
                    </div>
                  ) : null;
                })}
              </div>
            ) : (
              <span>Select fruits</span>
            )}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            {options.map((option) => (
              <SelectItem
                key={option.value}
                value={option.value}
                onClick={() => handleChange(option.value)}
              >
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      {/* Display selected fruits (for debug/demo purposes) */}
      <div>
        <h3 className="font-bold">Selected Fruits:</h3>
        <ul>
          {selectedFruits.map((fruit) => (
            <li key={fruit}>{fruit}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
