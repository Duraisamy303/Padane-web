import * as React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title: string;
  renderComponent: () => React.ReactNode;
  width?: string; // Optional prop for custom width
}

export default function Modal({
  open,
  onClose,
  onSubmit,
  title,
  renderComponent,
  width = "auto", // Default to "auto" if no width is provided
}: ModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className={`w-full max-w-full sm:max-w-md lg:max-w-lg xl:max-w-4xl rounded-lg bg-white p-6 shadow-lg`}
        style={{ width: width }} // Apply custom width passed as prop
        aria-labelledby="modal-title"
      >
        <DialogHeader>
          <DialogTitle id="modal-title" className="text-xl font-bold">
            {title}
          </DialogTitle>
        </DialogHeader>
        
        {renderComponent()}


      </DialogContent>
    </Dialog>
  );
}

