export const RolesData = [
  {
    path: "Summary",
    access: ["read", "create", "update", "delete", "export"],
  },
  {
    path: "General",
    access: ["read", "create", "update", "delete", "export"],
  },
  {
    path: "Users",
    access: ["read", "create", "update"],
  },
  {
    path: "Roles",
    access: ["read", "create", "update"],
  },
  {
    path: "Settings",
    access: ["change_language", "use_dark_mode"],
  },
  {
    path: "inactive-clients",
    access: ["read", "activate", "export"],
  },
  {
    _id: "Role01-01-03",
    RoleName: "NO ROLE",
    Roles: [],
  },
  {
    _id: "Role01-01-04",
    RoleName: "USER",
    Roles: [
      {
        path: "Clients",
        access: [
          "cash_on_hand",
          "receivable_cash",
          "payable_cash",
          "read",
          "create",
          "update",
          "delete",
          "export",
          "deposit",
          "withdraw",
          "transfer",
          "exchange",
          "close_account",
          "update_client",
          "change_password",
          "view_transactions",
          "delete_transaction",
          "update_transaction",
        ],
      },
      {
        path: "Exchanges",
        access: ["read", "create", "update", "delete", "export", "rate"],
      },
      {
        path: "Roles",
        access: ["read", "create", "update"],
      },
      {
        path: "Users",
        access: ["read", "create", "update"],
      },
    ],
  },
];
