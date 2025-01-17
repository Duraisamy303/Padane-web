"use client"
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Modal from "@/common_components/modal";


export default function ParentComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => setIsModalOpen(true);

  // Function to close the modal
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <Button onClick={openModal}>Open Modal</Button>

      <Modal open={isModalOpen} onClose={closeModal} />
    </div>
  );
}
