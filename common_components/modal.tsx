import * as React from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ModalProps {
  open: boolean;
  onClose: any;
}

export default function Modal(props: ModalProps) {
  const { open, onClose } = props;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className="w-full max-w-md sm:max-w-lg  xl:max-w-4xl p-6 bg-white rounded-lg shadow-lg"
        aria-labelledby="modal-title"
      >
        <DialogHeader>
          <DialogTitle id="modal-title" className="text-xl font-bold text-center">
            Modal Title
          </DialogTitle>
          <DialogDescription className="text-center text-sm mt-2">
            This is a description for the modal. You can put any content here.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 space-y-4">
          <p className="text-gray-700">This is where you can put your modal content. It could be forms, images, etc.</p>
        </div>

        <DialogFooter>
          <Button variant="outline" className="w-full sm:w-auto" onClick={() => onClose()}>
            Cancel
          </Button>
          <Button className="w-full sm:w-auto" onClick={() => onClose()}>
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
