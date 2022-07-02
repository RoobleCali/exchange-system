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
    link: "/dashboard",
  },
  {
    title: "my Wallet",
    icon: <OfficeBuildingIcon />,
    link: "/wallet",
  },
  {
    title: "transactions",
    icon: <TranslateIcon />,
    link: "/transactions",
  },
  {
    title: "Users",
    icon: <UsersIcon />,
    link: "/users",
  },
  {
    title: "Orders",
    icon: <ShoppingCartIcon />,
    link: "/ecommerce/orders",
  },
  {
    name: "User & Roles",
    children: [
      {
        name: "Roles",
        url: "/roles",
      },
      {
        name: "users",
        url: "/users",
      },
    ],
  },
  {
    name: "Reports",
    children: [
      {
        name: "transactions",
        url: "/users",
      },
      {
        name: "Common Report",
        url: "/",
      },
      {
        name: "Child43",
        children: [
          {
            name: "Child431",
            url: "/child431",
          },
          {
            name: "Child432",
            url: "/child432,",
          },
          {
            name: "Child433",
            url: "/child433",
          },
        ],
      },
    ],
  },
];
