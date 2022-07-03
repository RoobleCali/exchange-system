import jwt_decode from "jwt-decode";
import Router from "next/router";

export const login = (user) => {
  if (user.userType === "HQ-ADMIN" || user.userType === "BranchAdmin") {
    Router.replace("/dashboard");
  } else {
    const decoded = jwt_decode(user.accessToken);
    if (decoded.roles.length === 0) {
      return alert("You are not authorized to access this page");
    }
    //  check user allowed pathnames and show only alowed pathnames
    // if (decoded.roles.path.indexOf("/clients")) {
    //   Router.replace("/clients");
    // }
    // find user roles and check if user have access

    const route = decoded.roles[0].path.toLowerCase();
    Router.push(route);
  }
};
