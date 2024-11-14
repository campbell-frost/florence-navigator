export enum ItemType {
  quote = "quote",
  paragraph = "paragraph",
} 

type Item = { type: ItemType.quote, text: string } | { type: ItemType.paragraph, text: string };

export type LocationModel = {
  title: string;
  location?: string;
  image?: string;
  contents: Item[];
  footer?: string;
  quote?: string[];
};

export type NavItem = {
  href?: string;
  label: string;
  children?: NavItem[];
};

type Contributor = {
  person: string;
  url?: string;
  title?: string;
};

type ContributionSection = {
  title: string;
  contributors: Contributor[];
};

export type About = ContributionSection[];