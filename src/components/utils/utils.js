// import useJwt from "@/auth/jwt/useJwt";
import { getCookie, removeCookies } from "cookies-next";
import jwtDecode from "jwt-decode";
import Router from "next/router";

export const getToken = () => {
  try {
    return getCookie("token");
  } catch (error) {
    return null;
  }
};

export const decodeToken = () => {
  let decoded = null;
  try {
    const token = getToken();
    decoded = jwtDecode(token);
    return decoded;
  } catch (error) {
    return null;
  }
};

export const logout = () => {
  // write head login and remove  cookie
  Router.replace("/login");
  new Promise((resolve) => {
    removeCookies("token");
  }).then(() => {
    removeCookies();
  });
};

export const RouteForLoggedInUser = (user) => {
  const token = getCookie("token");
  if (
    user.userType.toLowerCase() === "branchadmin" ||
    user.userType.toLowerCase() === "admin"
  ) {
    return Router.replace("/clients");
  }
  if (user.userType.toLowerCase() === "hq-admin") Router.replace("/clients");

  if (token == null) {
    Router.replace("/login");
  }
  const decoded = jwtDecode(token);

  if (user.userType !== "HQ-ADMIN" && decoded.roles.length == 0) {
    return alert("You are not authorized to access this page");
  }
  const route = decoded.roles[0].path.toLowerCase();
  Router.replace(route);
};

export const getUserRoles = () => {
  try {
    return data.roles;
  } catch (error) {
    return null;
  }
};
