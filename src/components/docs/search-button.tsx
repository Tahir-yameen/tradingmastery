"use client";

import { Search } from "lucide-react";

export default function SearchButton() {
  return (
    <button
      className="
        flex
        items-center
        gap-2
        border
        rounded-md
        px-3
        py-2
      "
    >
      <Search size={16} />

      <span>Search</span>

      <kbd className="text-xs">
        Ctrl K
      </kbd>
    </button>
  );
}
