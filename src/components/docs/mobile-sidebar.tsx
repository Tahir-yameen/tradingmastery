"use client";

import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import Sidebar from "./sidebar";

export default function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="lg:hidden">
          <Menu />
        </button>
      </SheetTrigger>

      <SheetContent
        side="left"
        className="p-0"
      >
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
}
