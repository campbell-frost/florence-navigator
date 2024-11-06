import type { NavItem } from "@/types";

export const navItems: NavItem[] = [
  {
    label: "Downtown Florence",
    children: [
      {
        href: "/locations/ebony-guest-house",
        label: "Ebony Guest House"
      },
      {
        href: "/locations/florence-county-library",
        label: "Florence County Library"
      },
      {
        href: "/locations/florence-county-museum",
        label: "Florence County Museum"
      },
      {
        href: "/locations/gambles-hotel",
        label: "Gamble's Hotel (Civil War Skirmish)"
      },
      {
        href: "/locations/henry-timrod-schoolhouse",
        label: "Henry Timrod Schoolhouse"
      },
      {
        href: "/locations/iola-jones-park",
        label: "Iola Jones Park"
      },
      {
        href: "/locations/kress-demonstration",
        label: "Kress Demonstration 1960"
      },
      {
        href: "/locations/poynor-school",
        label: "Poynor School (Wilson School)"
      },
      {
        href: "/locations/st-johns-episcopal-church",
        label: "St. Johns Episcopal Church"
      },
      {
        href: "/locations/william-h-johnson-statue",
        label: "William H Johnson Statue"
      }
    ]
  },
  {
    label: "Around Florence",
    children: [
      {
        href: "/locations/florence-national-cemetery",
        label: "Florence National Cemetary"
      },
      {
        href: "/locations/florence-stockade",
        label: "Florence Stockade"
      },
      {
        href: "/locations/hewn-timber-cabins",
        label: "Hewn-Timber Cabins"
      },
      {
        href: "/locations/hopewell-presbyterian-church",
        label: "Hopewell Presbyterian Church"
      },
      {
        href: "/locations/mt-zion-cemetary",
        label: "Mt. Zion Cemetary"
      },
      {
        href: "/locations/mt-zion-united-methodist-church-rosenwald-school",
        label: "Mt. Zion United Methodist Church"
      },
      {
        href: "/locations/red-doe-plantation/",
        label: "Red Doe Plantation"
      },
      {
        href: "/locations/union-cemetary",
        label: "Union Cemetary"
      }
    ]
  },
  { href: "/about", label: "About" },
  { href: "/privacy-policy", label: "Privacy Policy" }
];