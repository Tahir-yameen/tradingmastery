"use client";

import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import SidebarLeft from "./sidebarleft";

export default function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="flex h-8 w-8 items-center justify-center rounded-md text-white transition hover:bg-white/10 lg:hidden" aria-label="Open navigation menu">
          <Menu size={18} />
        </button>
      </SheetTrigger>

      <SheetContent side="left" className="w-[85vw] p-0 sm:max-w-sm">
        <SidebarLeft mobileOnly />
      </SheetContent>
    </Sheet>
  );
}
