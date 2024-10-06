"use client";

import React from "react";
import { Drawer } from "vaul";

type DrawerProps = {
  drawerDirection: "top" | "bottom" | "right" | "left";
  customClass?: string;
  triggerChildren: React.ReactNode;
  contentChildren: React.ReactNode;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export default function VaulDrawer({
  customClass,
  drawerDirection,
  triggerChildren,
  contentChildren,
  isOpen,
  onOpenChange,
}: DrawerProps) {
  return (
    <Drawer.Root
      direction={drawerDirection}
      open={isOpen}
      onOpenChange={onOpenChange}
    >
      <Drawer.Trigger className={`${customClass}`} asChild>
        {triggerChildren}
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/20" />
        <Drawer.Content
          asChild
          className={`bg-gray-100 fixed outline-none ${
            drawerDirection === "top" && "top-0 left-0 right-0 h-fit"
          } ${
            drawerDirection === "right" &&
            "bottom-4 top-4 right-4 w-[700px] rounded-lg z-50 overflow-auto"
          }`}
        >
          <div className="p-4 bg-white">{contentChildren}</div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
