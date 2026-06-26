// types/navigation.ts
export type NavItem = {
  title: string;
  slug: string;
};

export type NavSection = {
  title: string;
  items: NavItem[];
};