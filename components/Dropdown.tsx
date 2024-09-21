"use client";

import { useState } from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

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
import { useGlobalState } from "./contexts/GlobalStateProvider";

interface DropdownProps {
  classname?: string;
  name: string;
  items: string[];
  search?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  classname,
  name,
  items = [],
  search = false,
}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const { data, setData } = useGlobalState();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={`${classname} w-[200px] justify-between overflow-hidden`}
        >
          {value || `Select ${name}...`}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className={`${classname} w-[200px] p-0`}>
        <Command>
          {search && (
            <CommandInput placeholder={`Search ${name}...`} className="h-9" />
          )}
          <CommandList>
            <CommandEmpty>No {name} found.</CommandEmpty>
            <CommandGroup>
              {items.map((item, index) => (
                <CommandItem
                  key={`${item}-${index}`}
                  value={item}
                  onSelect={(currentValue) => {
                    const selectedValue =
                      currentValue === value ? "" : currentValue;
                    setValue(selectedValue);
                    setOpen(false);
                    setData((prevData: any) => ({
                      ...prevData,
                      [name]: selectedValue,
                    }));
                  }}
                >
                  {item}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === item ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default Dropdown;
