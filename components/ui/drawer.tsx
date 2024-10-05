"use client";

import { Drawer } from "vaul";

type DrawerProps = {
  drawerDirection: "top" | "bottom" | "right" | "left";
  customClass?: string;
  triggerChildren: React.ReactNode;
  contentChildren: React.ReactNode;
};

export default function VaulDrawer({
  customClass,
  drawerDirection,
  triggerChildren,
  contentChildren,
}: DrawerProps) {
  return (
    <Drawer.Root direction={drawerDirection}>
      <Drawer.Trigger className={`${customClass}`}>
        {triggerChildren}
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content
          className={`bg-gray-100  fixed outline-none ${
            drawerDirection === "top" && "top-0 left-0 right-0 h-fit "
          }
            
          ${drawerDirection === "right" && "bottom-0 top-0 right-0 w-96"}`}
        >
          <div className="p-4 bg-white">{contentChildren}</div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
