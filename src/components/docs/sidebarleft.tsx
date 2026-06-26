"use client";

import Link from "next/link";
import { navigation } from "@/config/navigation";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function SidebarLeft() {
  const pathname = usePathname();
  const [openSection, setOpenSection] = useState<string | null>(null);

  // ✅ Auto-open active section
  useEffect(() => {
    const activeSection = navigation.find((section) =>
      section.items.some(
        (item) => `/docs/${item.slug}` === pathname
      )
    );

    if (activeSection) {
      setOpenSection(activeSection.title);
    }
  }, [pathname]);

  // ✅ Toggle section
  const toggleSection = (title: string) => {
    setOpenSection((prev) => (prev === title ? null : title));
  };

  return (
    <aside className="hidden lg:block w-64 border-r sticky top-16 h-[calc(100vh-64px)] overflow-y-auto">
      <div className="p-6">
        <h2 className="font-bold text-xl mb-6">
          CHAPTERS
        </h2>
          {navigation.map((section, sectionIndex) => {
            const sectionKey =
              section.title?.trim() || `section-${sectionIndex}`;

            const isActive = section.items.some(
              (item) => `/docs/${item.slug}` === pathname
            );

            const isOpen = openSection === section.title;

            return (
              <div key={`${sectionKey}-${sectionIndex}`} className="mb-4">
                
                {/* Main Heading */}
                <button
                  onClick={() => toggleSection(section.title)}
                  className={`w-full text-left text-lg font-semibold flex justify-between items-center ${
                    isActive
                      ? "text-green-500"
                      : "text-gray-400 hover:text-green-400"
                  }`}
                >
                  {section.title || "Untitled"}
                  <span className="text-xs">{isOpen ? "−" : "+"}</span>
                </button>

                {/* Sub Items */}
                <div className={`${isOpen ? "max-h-96 mt-2" : "max-h-0"} overflow-hidden`}>
                  <ul className="pl-4 space-y-2 border-l border-gray-700">
                    
                    {section.items.map((item, itemIndex) => {
                      const safeSlug =
                        item.slug?.trim() || `item-${sectionIndex}-${itemIndex}`;

                      const itemKey = `${sectionKey}-${safeSlug}-${itemIndex}`;

                      const isItemActive =
                        `/docs/${item.slug}` === pathname;

                      return (
                        <li key={itemKey}>
                          <Link
                            href={`/docs/${safeSlug}`}
                            className={`block text-sm ${
                              isItemActive
                                ? "text-green-400 font-medium"
                                : "text-gray-400 hover:text-green-300"
                            }`}
                          >
                            {item.title || "Untitled"}
                          </Link>
                        </li>
                      );
                    })}

                  </ul>
                </div>
              </div>
            );
          })}
      </div>
    </aside>
  );
}