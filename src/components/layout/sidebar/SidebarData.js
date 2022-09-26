// sidebar json data with all the sidebar items and their links and icons and nested items

import {
  HomeIcon,
  OfficeBuildingIcon,
  ShoppingCartIcon,
  TranslateIcon,
  UsersIcon,
} from "@heroicons/react/outline";

export const sidebarData = [
  {
    title: "Dashboard",
    icon: <HomeIcon />,
    link: "Cash-flow",
  },
  {
    title: "my Wallet",
    icon: <OfficeBuildingIcon />,
    link: "wallet",
  },

  {
    title: "Clients",
    icon: <UsersIcon />,
    link: "clients",
  },
  {
    title: "remittence",
    icon: <UsersIcon />,
    link: "remittance",
  },
  {
    title: "transactions",
    icon: <TranslateIcon />,
    link: "transactions",
  },

  {
    title: "branches",
    icon: <OfficeBuildingIcon />,
    link: "branches",
  },
  {
    title: "invoices",
    icon: <TranslateIcon />,
    link: "invoices",
  },

  {
    title: "cardcenter",
    icon: <ShoppingCartIcon />,
    link: "cardcenter",
  },
  {
    title: "Roles & Users",
    icon: <UsersIcon />,

    children: [
      {
        title: "Users",
        icon: <UsersIcon />,
        link: "users",
      },
      {
        title: "Roles",
        icon: <UsersIcon />,
        link: "roles",
      },
    ],
  },
];
