import React from 'react'
import * as Dialog from "@radix-ui/react-dialog";


export default function Sidebar(props:any) {
    const {open,close}=props

  return (
    <Dialog.Root open={open} onOpenChange={close}>
    <Dialog.Content
      className="fixed left-0 top-0 z-50 h-full w-64 transform bg-gray-800 p-4 text-white transition-transform"
      style={{
        transform: open ? "translateX(0)" : "translateX(-100%)",
      }}
    >
      <Dialog.Close
        className="absolute right-4 top-4 text-white"
        onClick={() => close()}
      >
        X
      </Dialog.Close>

      <div className="space-y-4">
        <div className="px-4 py-2">
          <a href="#" className="text-lg">
            Dashboard
          </a>
        </div>
        <div className="px-4 py-2">
          <a href="#" className="text-lg">
            Settings
          </a>
        </div>
        <div className="px-4 py-2">
          <a href="#" className="text-lg">
            Profile
          </a>
        </div>
        <div className="px-4 py-2">
          <a href="#" className="text-lg">
            Logout
          </a>
        </div>
      </div>
    </Dialog.Content>
  </Dialog.Root>
  )
}
