// import Link from "next/link";
// import ThemeToggle from "./theme-toggle";
// import MobileSidebar from "./mobile-sidebar";
// import SearchButton from "./search-button";
// import LanguageSwitcher from "./language-switcher";

// export default function Navbar() {
//   return (
//     <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
//       <div className="flex h-16 items-center justify-between gap-3 px-4 sm:px-6">
//         <div className="flex min-w-0 items-center gap-2 sm:gap-4">
//           <MobileSidebar />
//           <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-green-500 bg-background/80 text-xs font-bold text-green-500 shadow-[0_0_8px_#22c55e] sm:h-8 sm:w-8 sm:text-sm">
//             TM
//           </div>
//           <Link href="/" className="truncate text-lg font-bold sm:text-xl lg:text-2xl">
//             Trading Mastery
//           </Link>
//         </div>

//         <div className="flex items-center gap-2 sm:gap-3">
//           <LanguageSwitcher />
//           <SearchButton />
//           <ThemeToggle />
//         </div>
//       </div>
//     </header>
//   );
// }

import Link from "next/link";
import ThemeToggle from "./theme-toggle";
import MobileSidebar from "./mobile-sidebar";
import SearchButton from "./search-button";
import LanguageSwitcher from "./language-switcher";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="flex h-16 items-center justify-between gap-3 px-4 sm:px-6">
        <div className="flex min-w-0 items-center gap-2 sm:gap-4">
          <MobileSidebar />

          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-green-500 bg-background text-sm font-bold text-green-500 shadow-[0_0_8px_#22c55e]">
            TM
          </div>

          <Link
            href="/"
            className="truncate text-lg font-bold sm:text-xl lg:text-2xl"
          >
            Trading Mastery
          </Link>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher />
          <SearchButton />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}