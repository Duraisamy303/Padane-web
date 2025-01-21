"use client";

import * as React from "react";
import { Check, ChevronDown, ChevronUp, X } from "lucide-react"; // Import clear (X) icon
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface ComboboxProps {
  options: { value: string | number; label: string }[];
  selectedValues: (string | number)[];
  onChange: any;
  isMulti: boolean;
  placeholder: string;
}

export default function Combobox({
  options,
  selectedValues,
  onChange,
  isMulti,
  placeholder,
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false);

  const handleSelect = (currentValue: string | number) => {
    if (isMulti) {
      const newSelectedValues = selectedValues.includes(currentValue)
        ? selectedValues.filter((item) => item !== currentValue)
        : [...selectedValues, currentValue];
      onChange(newSelectedValues);
    } else {
      onChange([currentValue]);
      setOpen(false);
    }
  };

  const handleClear = () => {
    onChange([]);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {selectedValues?.length > 0
            ? options
                .filter((option) => selectedValues.includes(option.value))
                .map((option) => option.label)
                .join(", ")
            : placeholder}

          {selectedValues?.length > 0 ? (
            <X
              className="ml-2 cursor-pointer opacity-50"
              size={16}
              onClick={(e) => {
                e.stopPropagation();
                handleClear();
              }}
            />
          )

          :open ? (
            <ChevronUp className="opacity-50" />
          ) : (
            <ChevronDown className="opacity-50" />
          )}
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Search options..." className="h-9 w-full" />
          <CommandList>
            <CommandEmpty>No options found.</CommandEmpty>
            <CommandGroup>
              {options?.length > 0 &&
                options?.map((option) => (
                  <CommandItem
                    key={option.value}
                    value={option.value}
                    onSelect={() => handleSelect(option.value)}
                    className="w-full"
                  >
                    {option.label}
                    {isMulti && (
                      <Check
                        className={cn(
                          "ml-auto",
                          selectedValues.includes(option.value)
                            ? "opacity-100"
                            : "opacity-0",
                        )}
                      />
                    )}
                  </CommandItem>
                ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
