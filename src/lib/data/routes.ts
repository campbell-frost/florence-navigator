import type { NavItem } from "@/types";

export const navItems: NavItem[] = [
  {
    href: '/Downtown',
    label: 'Downtown Florence',
    children: [
      {
        href: 'locations/ebony-guest-house',
        label: 'Ebony Guest House'
      },
      {
        href: 'locations/ebony',
        label: 'Ebony Guest House'
      },
      {
        href: 'locations/ebony',
        label: 'Ebony Guest House'
      },
      {
        href: 'locations/ebony',
        label: 'Ebony Guest House'
      },
      {
        href: 'locations/ebony',
        label: 'Ebony Guest House'
      },
      {
        href: 'locations/ebony',
        label: 'Ebony Guest House'
      }
    ]
  },
  { href: '/services', label: 'Around Florence' },
  { href: '/contact', label: 'About' },
  { href: '/contact', label: 'Privacy Policy' }
];