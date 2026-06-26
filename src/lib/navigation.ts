// import { navigation } from "@/config/navigation";

// export function getPrevNext(
//   currentSlug: string
// ) {
//   const pages = navigation.flatMap(
//     (section) => section.items
//   );

//   const index = pages.findIndex(
//     (p) => p.slug === currentSlug
//   );

//   return {
//     previous:
//       index > 0
//         ? pages[index - 1]
//         : null,

//     next:
//       index < pages.length - 1
//         ? pages[index + 1]
//         : null,
//   };
// }


import { navigation } from "@/config/navigation";
import type { NavItem } from "@/types/navigation";

export function getPrevNext(currentSlug: string): {
  previous: NavItem | null;
  next: NavItem | null;
} {
  const pages: NavItem[] = navigation.flatMap(
    (section) => section.items
  );

  const index = pages.findIndex(
    (p) => p.slug === currentSlug
  );

  // ✅ FIX: slug not found
  if (index === -1) {
    return {
      previous: null,
      next: null,
    };
  }

  return {
    previous: index > 0 ? pages[index - 1] : null,
    next:
      index < pages.length - 1
        ? pages[index + 1]
        : null,
  };
}