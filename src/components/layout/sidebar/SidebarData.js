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
  // {
  //   title: "my Wallet",
  //   icon: <OfficeBuildingIcon />,
  //   link: "wallet",
  // },

  // {
  //   title: "Clients",
  //   icon: <UsersIcon />,
  //   link: "clients",
  // },
  // {
  //   title: "remittence",
  //   icon: <UsersIcon />,
  //   link: "remittance",
  // },

  {
    title: "branches",
    icon: <OfficeBuildingIcon />,
    link: "branches",
  },
  // {
  //   title: "invoices",
  //   icon: <TranslateIcon />,
  //   link: "invoices",
  // },
  {
    title: "City",
    icon: <TranslateIcon />,
    link: "city",
  },
  {
    title: "Charges",
    icon: <TranslateIcon />,
    link: "charge",
  },
  {
    title: "transactions",
    icon: <TranslateIcon />,
    link: "transactions",
  },
  {
    title: "cardcenter",
    icon: <ShoppingCartIcon />,
    link: "cardcenter",
  },
  // {
  //   title: "Roles & Users",
  //   submenu: true,
  //   icon: <UsersIcon />,

  //   children: [
  //     {
  //       title: "Users",
  //       icon: <UsersIcon />,
  //       link: "users",
  //     },
  //     {
  //       title: "Roles",
  //       icon: <UsersIcon />,
  //       link: "roles",
  //     },
  //   ],
  // },
];
