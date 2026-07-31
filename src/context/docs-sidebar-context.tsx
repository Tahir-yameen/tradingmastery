"use client";

import * as React from "react";

type DocsSidebarContextValue = {
  selectedSection: string | null;
  setSelectedSection: (section: string | null) => void;
};

const DocsSidebarContext = React.createContext<DocsSidebarContextValue | undefined>(undefined);

export function DocsSidebarProvider({ children }: { children: React.ReactNode }) {
  const [selectedSection, setSelectedSection] = React.useState<string | null>(null);

  return (
    <DocsSidebarContext.Provider value={{ selectedSection, setSelectedSection }}>
      {children}
    </DocsSidebarContext.Provider>
  );
}

export function useDocsSidebar() {
  const context = React.useContext(DocsSidebarContext);

  if (!context) {
    throw new Error("useDocsSidebar must be used inside a DocsSidebarProvider");
  }

  return context;
}
