"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useDocsSidebar } from "@/context/docs-sidebar-context";

type Heading = {
  id: string;
  text: string;
  level: number;
};

export default function SidebarRight() {
  const pathname = usePathname();

  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState("");
  const [pageTitle, setPageTitle] = useState("");

  const { selectedSection } = useDocsSidebar();

  const isMainPage = pathname.split("/").length <= 2;

  useEffect(() => {
    if (isMainPage) return;

    const initializeHeadings = () => {
      const h1 = document.querySelector("article h1");
      setPageTitle(h1?.textContent || "");

      const elements = Array.from(
        document.querySelectorAll("article h2, article h3")
      ) as HTMLHeadingElement[];

      if (!elements.length) {
        setHeadings([]);
        setActiveId("");
        return;
      }

      // Generate IDs if missing
      const slugCount: Record<string, number> = {};

      const mapped: Heading[] = elements.map((el) => {
        let id = el.id;

        if (!id) {
          id =
            el.textContent
              ?.toLowerCase()
              .trim()
              .replace(/[^\w\s-]/g, "")
              .replace(/\s+/g, "-") || "";

          if (slugCount[id]) {
            slugCount[id]++;
            id = `${id}-${slugCount[id]}`;
          } else {
            slugCount[id] = 1;
          }

          el.id = id;
        }

        return {
          id,
          text: el.textContent || "",
          level: Number(el.tagName.replace("H", "")),
        };
      });

      setHeadings(mapped);

      // Set first heading as active initially
      setActiveId(mapped[0]?.id || "");
    };

    const updateActiveHeading = () => {
      const elements = Array.from(
        document.querySelectorAll("article h2, article h3")
      ) as HTMLHeadingElement[];

      if (!elements.length) return;

      /**
       * This offset represents the point where
       * a heading becomes "active".
       * Adjust if you have a sticky navbar.
       */
      const OFFSET = 120;

      let currentHeading = elements[0];

      for (const heading of elements) {
        if (heading.getBoundingClientRect().top <= OFFSET) {
          currentHeading = heading;
        } else {
          break;
        }
      }

      if (currentHeading.id !== activeId) {
        setActiveId(currentHeading.id);
      }
    };

    const timeout = window.setTimeout(() => {
      initializeHeadings();
      updateActiveHeading();
    }, 120);

    window.addEventListener("scroll", updateActiveHeading, {
      passive: true,
    });

    window.addEventListener("resize", updateActiveHeading);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", updateActiveHeading);
      window.removeEventListener("resize", updateActiveHeading);
    };
  }, [pathname, isMainPage]);

  // Auto-scroll active TOC item into view
  useEffect(() => {
    if (!activeId) return;

    document
      .querySelector(`a[href="#${activeId}"]`)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
  }, [activeId]);

  const displayTitle = selectedSection || pageTitle;

  if (!headings.length && !displayTitle) return null;

  return (
    <aside className="hidden xl:block w-64 h-full overflow-y-auto border-l border-gray-800">
      <div className="p-6">
        {/* {displayTitle && (
          <h2 className="mb-4 text-sm font-semibold text-green-400">
            {displayTitle}
          </h2>
        )} */}

        <h3 className="mb-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
          {headings.length ? "Topics On This Page" : "Section"}
        </h3>

        {headings.length > 0 && (
          <ul className="space-y-1">
            {headings.map((heading) => {
              const isActive = activeId === heading.id;

              return (
                <li
                  key={heading.id}
                  className={heading.level === 3 ? "ml-4" : ""}
                >
                  <a
                    href={`#${heading.id}`}
                    className={`relative block border-l-2 py-1.5 pl-3 text-sm transition-all duration-200 ${
                      isActive
                        ? "border-green-500 bg-green-500/10 text-green-400 font-semibold"
                        : "border-transparent text-gray-400 hover:border-gray-600 hover:text-white"
                    }`}
                  >
                    {heading.text}
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </aside>
  );
}