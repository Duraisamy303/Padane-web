// components/Sidebar.tsx
import * as Dialog from '@radix-ui/react-dialog';
import { Button } from '@/components/ui/button';

export default function Sidebar() {
  return (
    <div className="flex">
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Button className=" p-2 bg-gray-800 text-white rounded-md">
            Open Sidebar
          </Button>
        </Dialog.Trigger>

        <Dialog.Content
          className="fixed top-0 left-0 z-50 w-64 h-full bg-gray-800 text-white p-4 transform transition-transform"
          style={{ transform: 'translateX(0)' }}
        >
          <Dialog.Close
            className="absolute top-4 right-4 text-white"
          >
            X
          </Dialog.Close>

          <div className="space-y-4">
            <div className="py-2 px-4">
              <a href="#" className="text-lg">Dashboard</a>
            </div>
            <div className="py-2 px-4">
              <a href="#" className="text-lg">Settings</a>
            </div>
            <div className="py-2 px-4">
              <a href="#" className="text-lg">Profile</a>
            </div>
            <div className="py-2 px-4">
              <a href="#" className="text-lg">Logout</a>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Root>

      <div className="flex-1 p-8 bg-gray-100">
        <h1 className="text-3xl font-semibold">Main Content</h1>
        <p className="mt-4">This is where the main content goes.</p>
      </div>
    </div>
  );
}
