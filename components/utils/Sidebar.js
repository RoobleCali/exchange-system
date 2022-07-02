import { useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import Router from "next/router";

export const SidebarAccess = (items) => {
  const { accessToken } = useSelector(
    (state) => state.transactions.transactions
  );
  const decoded = jwt_decode(accessToken);

  //   console.log("token", decoded.roles);
  console.log(items);
  //   check token and show only allowed pathnames
  if (decoded.roles.length === 0) {
    return alert("You are not authorized to access this page");
  }
  //  check user allowed pathnames and show only alowed pathnames
  if (decoded.roles.path.indexOf(items.link)) {
    return null;
  }
  // find user roles and check if user have access
  const route = decoded.roles[0].path.toLowerCase();
  if (route === items.link) {
    return items;
  }

  //   console.log("user", users);
};
