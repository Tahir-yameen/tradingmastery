'use client';

import {useState} from 'react';
import {useRouter, usePathname} from 'next/navigation';

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (lang: string) => {
    const newPath = `/${lang}${pathname.replace(/^\/(en|ur)/, '')}`;
    router.push(newPath);
    setOpen(false);
  };

  return (
    <div className="relative">

      {/* Trigger Button */}
      <button
        onClick={() => setOpen(!open)}
        className="gap-2 border rounded-md inline-flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md hover:bg-accent transition"
      >
      {/* Globe Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-6 h-6 text-green-500 group-hover:text-green-600 transition"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>

      <span>Language</span>

      {/* <kbd className="text-xs">
        
      </kbd> */}
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-32 rounded-md border shadow-md z-50">
          <button
            onClick={() => changeLanguage('en')}
            className="block w-full text-left px-3 py-2 text-sm hover:bg-accent"
          >
            🇺🇸 English
          </button>

          <button
            onClick={() => changeLanguage('ur')}
            className="block w-full text-left px-3 py-2 text-sm hover:bg-accent"
          >
            🇵🇰 اردو
          </button>
        </div>
      )}

    </div>
  );
}