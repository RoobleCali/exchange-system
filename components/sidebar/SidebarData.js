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
    title: "transactions",
    icon: <TranslateIcon />,
    link: "transactions",
  },

  {
    title: "Users",
    icon: <UsersIcon />,
    link: "users",
  },
  {
    title: "Clients",
    icon: <UsersIcon />,
    link: "clients",
  },
  {
    title: "Orders",
    icon: <ShoppingCartIcon />,
    link: "ecommerce/orders",
  },
  {
    title: "Roles",
    icon: <UsersIcon />,

    children: [
      {
        title: "Roles",
        icon: <UsersIcon />,
        link: "users",
      },
    ],
  },
];
