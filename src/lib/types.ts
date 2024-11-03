export type LocationModel = {
  title: string;
  image: string;
  contents: string[];
  footer?: string;
  quote?: string[];
};

export type NavItem = {
  href?: string;
  label: string;
  children?: NavItem[];
};

interface Contributor {
  person: string;
  url?: string;
  title?: string;
}

interface ContributionSection {
  title: string;
  contributors: Contributor[];
}

export type About = ContributionSection[];