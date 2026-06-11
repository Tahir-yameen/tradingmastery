import Link from "next/link";
import ThemeToggle from "./theme-toggle";
import MobileSidebar from "./mobile-sidebar";
import SearchButton from "./search-button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <MobileSidebar />

          <Link
            href="/"
            className="font-bold text-xl"
          >
            Trading Mastery
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <SearchButton />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
