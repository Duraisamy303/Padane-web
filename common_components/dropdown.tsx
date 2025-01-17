import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import { ChevronDown } from "lucide-react"; 

export default function Dropdown(props: any) {
  const { placeholder } = props;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-full justify-between">
          {placeholder}
          <ChevronDown size={16} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="mt-1 w-[320px] rounded-md bg-white shadow-lg "
        align="start" 
      >
        <DropdownMenuItem className="w-full px-4 py-2">
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem className="w-full px-4 py-2">
          Settings
        </DropdownMenuItem>
        <DropdownMenuItem className="w-full px-4 py-2">Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
