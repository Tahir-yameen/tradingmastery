import Link from "next/link";
import ThemeToggle from "./theme-toggle";
import MobileSidebar from "./mobile-sidebar";
import SearchButton from "./search-button";
import LanguageSwitcher from "./language-switcher";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <MobileSidebar />
          <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-md bg-background/80 border border-green-500 text-green-500 text-xs sm:text-sm font-bold shadow-[0_0_8px_#22c55e] shrink-0">
            TM
          </div>
          <Link
            href="/"
            className="font-bold text-4xl"
          >
            Trading Mastery
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <SearchButton />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
