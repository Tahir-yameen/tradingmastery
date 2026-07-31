"use client";

import { useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { navigation } from "@/config/navigation";

type SearchItem = {
  title: string;
  section: string;
  href: string;
};

export default function SearchButton() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const items = useMemo<SearchItem[]>(() => {
    return navigation.flatMap((section) =>
      section.items.map((item) => ({
        title: item.title,
        section: section.title,
        href: `/docs/${item.slug}`,
      }))
    );
  }, []);

  const filteredItems = useMemo(() => {
    if (!query.trim()) {
      return items.slice(0, 8);
    }

    const normalized = query.toLowerCase();

    return items.filter((item) => {
      return (
        item.title.toLowerCase().includes(normalized) ||
        item.section.toLowerCase().includes(normalized)
      );
    });
  }, [items, query]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen(true);
      }

      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSelect = (href: string) => {
    router.push(href);
    setOpen(false);
    setQuery("");
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-gray-200 transition hover:bg-white/10"
      >
        <Search size={16} />
        <span className="hidden sm:inline">Search</span>
        <kbd className="hidden rounded bg-black/20 px-1.5 py-0.5 text-[10px] font-medium text-gray-400 sm:inline">
          Ctrl K
        </kbd>
      </button>

      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        title="Search docs"
        description="Search Trading Mastery documentation"
      >
        <Command>
          <CommandInput
            placeholder="Search lessons, topics, or chapters..."
            value={query}
            onValueChange={setQuery}
          />

          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Documentation">
              {filteredItems.map((item) => (
                <CommandItem
                  key={item.href}
                  value={`${item.title} ${item.section}`}
                  onSelect={() => handleSelect(item.href)}
                  className="flex cursor-pointer items-center justify-between"
                >
                  <span>{item.title}</span>
                  <span className="text-xs text-muted-foreground">{item.section}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  );
}
