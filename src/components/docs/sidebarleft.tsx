"use client";

import Link from "next/link";
import { navigation } from "@/config/navigation";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useDocsSidebar } from "@/context/docs-sidebar-context";

type SidebarLeftProps = {
  mobileOnly?: boolean;
};

export default function SidebarLeft({ mobileOnly = false }: SidebarLeftProps) {
  const pathname = usePathname();
  const [openSection, setOpenSection] = useState<string | null>(null);
  const { selectedSection, setSelectedSection } = useDocsSidebar();

  // ✅ Auto-open active section
  useEffect(() => {
    const activeSection = navigation.find((section) =>
      section.items.some(
        (item) => `/docs/${item.slug}` === pathname
      )
    );

    if (activeSection) {
      setOpenSection(activeSection.title);
      setSelectedSection(activeSection.title);
    }
  }, [pathname, setSelectedSection]);

  const toggleSection = (title: string) => {
    setOpenSection((prev) => (prev === title ? null : title));
    setSelectedSection(title);
  };

  return (
    <aside
      className={`${mobileOnly ? "block w-full" : "hidden lg:block"} ${mobileOnly ? "" : "w-64 border-r"} h-full overflow-y-auto`}
    >
      <div className="p-4 sm:p-6">
        <h2 className="mb-6 text-lg font-bold sm:text-xl">
          CHAPTERS
        </h2>
          {navigation.map((section, sectionIndex) => {
            const sectionKey =
              section.title?.trim() || `section-${sectionIndex}`;

            const isActive = section.items.some(
              (item) => `/docs/${item.slug}` === pathname
            );

            const isSectionActive = selectedSection === section.title || isActive;
            const isOpen = openSection === section.title;

            return (
              <div key={`${sectionKey}-${sectionIndex}`} className="mb-4">
                
                {/* Main Heading */}
                <button
                  onClick={() => toggleSection(section.title)}
                  className={`w-full text-left text-base font-semibold flex justify-between items-center sm:text-lg ${
                    isSectionActive
                      ? "text-green-500"
                      : "text-gray-400 hover:text-green-400"
                  }`}
                >
                  {section.title || "Untitled"}
                  <span className="text-xs">{isOpen ? "−" : "+"}</span>
                </button>

                {/* Sub Items */}
                <div className={`${isOpen ? "mt-2 max-h-96" : "max-h-0"} overflow-hidden`}>
                  <ul className="space-y-2 border-l border-gray-700 pl-4">
                    
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
                            onClick={() => setSelectedSection(section.title)}
                            className={`block text-sm leading-6 ${
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