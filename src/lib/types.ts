export type LocationModel = {
  title: string;
  image: string;
  contents: string[];
  footer?: string;
  quote?: string[];
};

export type NavItem = {
  href: string;
  label: string;
  children?: NavItem[];
};