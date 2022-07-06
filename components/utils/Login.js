import { getCookie, removeCookies } from "cookies-next";
import jwt_decode from "jwt-decode";
import Router from "next/router";

export const login = (user) => {
  const token = getCookie("token");
  if (user.userType === "HQ-ADMIN" || user.userType === "BranchAdmin") {
    Router.replace("/dashboard");
  }
  if (token == null) {
    Router.replace("/login");
  }
  console.log(token);
  const decoded = jwt_decode(token);

  if (decoded.roles.length === 0) {
    return alert("You are not authorized to access this page");
  }
  const route = decoded.roles[0].path.toLowerCase();
  console.log(route);
  Router.replace(route);
};
