// "use client";

// import { createContext, useContext } from "react";

// const TocContext = createContext<any[]>([]);

// export function TocProvider({
//   children,
//   headings,
// }: {
//   children: React.ReactNode;
//   headings: any[];
// }) {
//   return (
//     <TocContext.Provider value={headings}>
//       {children}
//     </TocContext.Provider>
//   );
// }

// export function useToc() {
//   return useContext(TocContext);
// }

"use client";

import { createContext, useContext } from "react";

const TocContext = createContext<any[]>([]);

export function TocProvider({
  children,
  headings,
}: {
  children: React.ReactNode;
  headings: any[];
}) {
  return (
    <TocContext.Provider value={headings}>
      {children}
    </TocContext.Provider>
  );
}

export function useToc() {
  return useContext(TocContext);
}