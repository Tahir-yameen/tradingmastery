// "use client";

// import { useEffect, useState } from "react";
// import { usePathname } from "next/navigation";

// type Heading = {
//   id: string;
//   text: string;
//   level: number;
// };

// export default function SidebarRight() {
//   const pathname = usePathname();

//   const [headings, setHeadings] = useState<Heading[]>([]);
//   const [activeId, setActiveId] = useState<string>("");

//   const isMainPage = pathname.split("/").length <= 2;

//   // ✅ 1. Extract headings + setup observer
//   useEffect(() => {
//     if (isMainPage) {
//       setHeadings([
//         {
//           id: "introduction",
//           text: "Introduction",
//           level: 2,
//         },
//       ]);
//       return;
//     }

//     const timeout = setTimeout(() => {
//     const elements = Array.from(
//       document.querySelectorAll("h2")
//     ) as HTMLHeadingElement[];

//     const slugCount: Record<string, number> = {};

//     const mapped: Heading[] = elements.map((el) => {
//       let id = el.id;

//       if (!id) {
//         id =
//           el.textContent
//             ?.toLowerCase()
//             .replace(/[^\w\s-]/g, "")
//             .replace(/\s+/g, "-") || "";

//         if (slugCount[id]) {
//           slugCount[id]++;
//           id = `${id}-${slugCount[id]}`;
//         } else {
//           slugCount[id] = 1;
//         }

//         el.id = id; // 🔥 critical
//       }

//       return {
//         id,
//         text: el.textContent || "",
//         level: Number(el.tagName.replace("H", "")),
//       };
//     });

//     setHeadings(mapped);

//     const observer = new IntersectionObserver(
//       (entries) => {
//         const visible = entries
//           .filter((e) => e.isIntersecting)
//           .sort(
//             (a, b) => b.intersectionRatio - a.intersectionRatio
//           );

//         if (visible.length > 0) {
//           setActiveId(visible[0].target.id);
//         }
//       },
//       {
//         rootMargin: "-100px 0px -60% 0px",
//         threshold: 0.1,
//       }
//     );

//     elements.forEach((el) => observer.observe(el));

//       return () => observer.disconnect();
//     }, 100);

//     return () => clearTimeout(timeout);
//   }, [pathname, isMainPage]);

//   // ✅ 2. Auto-scroll sidebar to active item
//   useEffect(() => {
//     if (!activeId) return;

//     const el = document.querySelector(
//       `[href="#${activeId}"]`
//     );

//     el?.scrollIntoView({
//       behavior: "smooth",
//       block: "nearest",
//     });
//   }, [activeId]);

//   if (!headings.length) return null;

//   return (
//     <aside className="hidden xl:block w-64 border-l sticky top-16 h-[calc(100vh-64px)] overflow-y-auto">
//       <div className="p-6">
//         <h3 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wide">
//           Topics On The Page:
//         </h3>

//         <ul className="space-y-2">
//           {headings.map((heading, index) => {
//             const isActive = activeId === heading.id;

//             return (
//               <li
//                 key={`${heading.id}-${index}`}
//                 className={`transition-all ${
//                   heading.level === 3 ? "ml-4" : ""
//                 }`}
//               >
//                 <a
//                   href={`#${heading.id}`}
//                   className={`block text-sm border-l-2 pl-3 transition-all ${
//                     isActive
//                       ? "border-green-400 text-white font-semibold"
//                       : "text-gray-400 border-transparent hover:text-green-400"
//                   }`}
//                 >
//                   {heading.text}
//                 </a>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     </aside>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type Heading = {
  id: string;
  text: string;
  level: number;
};

export default function SidebarRight() {
  const pathname = usePathname();

  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [pageTitle, setPageTitle] = useState<string>("");

  const isMainPage = pathname.split("/").length <= 2;

  useEffect(() => {
    if (isMainPage) return;

    const timeout = setTimeout(() => {
      // ✅ Get page title (H1)
      const h1 = document.querySelector("article h1");
      if (h1) {
        setPageTitle(h1.textContent || "");
      }

      // ✅ ONLY target content area
      const elements = Array.from(
        document.querySelectorAll("article h2, article h3")
      ) as HTMLHeadingElement[];

      const slugCount: Record<string, number> = {};

      const mapped: Heading[] = elements.map((el) => {
        let id = el.id;

        if (!id) {
          id =
            el.textContent
              ?.toLowerCase()
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

      // ✅ Scroll Spy
      const observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((e) => e.isIntersecting)
            .sort(
              (a, b) =>
                a.boundingClientRect.top - b.boundingClientRect.top
            );

          if (visible.length > 0) {
            setActiveId(visible[0].target.id);
          }
        },
        {
          rootMargin: "-100px 0px -60% 0px",
          threshold: 0.1,
        }
      );

      elements.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timeout);
  }, [pathname, isMainPage]);

  // ✅ Auto-scroll active item
  useEffect(() => {
    if (!activeId) return;

    document
      .querySelector(`[href="#${activeId}"]`)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
  }, [activeId]);

  if (!headings.length) return null;

  return (
    <aside className="hidden xl:block w-64 border-l sticky top-16 h-[calc(100vh-64px)] overflow-y-auto">
      <div className="p-6">
        
        {/* ✅ PAGE TITLE */}
        {pageTitle && (
          <h2 className="text-sm font-semibold text-white mb-4">
            {pageTitle}
          </h2>
        )}

        <h3 className="text-xs font-semibold text-gray-400 mb-4 uppercase tracking-wide">
          Topics On The Page
        </h3>

        <ul className="space-y-2">
          {headings.map((heading, index) => {
            const isActive = activeId === heading.id;

            return (
              <li
                key={`${heading.id}-${index}`}
                className={`transition-all ${
                  heading.level === 3 ? "ml-4" : ""
                }`}
              >
                <a
                  href={`#${heading.id}`}
                  className={`block text-sm border-l-2 pl-3 transition-all ${
                    isActive
                      ? "border-green-400 text-white font-semibold"
                      : "text-gray-400 border-transparent hover:text-green-400"
                  }`}
                >
                  {heading.text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}