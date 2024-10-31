export type LocationModel = {
  title: string;
  image: string;
  content: string;
  footer: string;
  quote?: string[];
};

export type NavItem = {
  href: string;
  label: string;
  children?: NavItem[];
};