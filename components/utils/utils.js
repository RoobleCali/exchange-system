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

export const updateCurrentUser = (user) => {
  try {
    const oldUser = getUserData();
    const name = user.name || oldUser.name;
    const image = user.image || oldUser.image;
    const oldName = oldUser.name;
    const oldImage = oldUser.image;
    delete user.role;
    const newUser = { ...oldUser, ...user };
    localStorage.setItem("userData", JSON.stringify(newUser));
    if (name !== oldName || image !== oldImage) {
      window.location.reload();
    }
  } catch (error) {
    return null;
  }
};

export const canNavigate = (to) => {
  const user = getUserData();
  if (!user) {
    if (to.name === "login") return true;
    return false;
  }
  if (to.name === "error-404") return true;
  if (to.name === "not-authorized") return true;
  if (to.name === "profile") return true;

  if (to.meta.redirectIfLoggedIn) return true;

  // // Redirect if logged in
  // if (to.meta.redirectIfLoggedIn) {
  //   const userData = getUserData();
  //   next(getHomeRouteForLoggedInUser(userData));
  // }

  if (
    user.userType.toLowerCase() === "branchadmin" ||
    user.userType.toLowerCase() === "admin"
  )
    return true;
  if (user.userType.toLowerCase() === "hq-admin") return true;

  const userRoles = getUserRoles();

  const names =
    to.name.toLowerCase() === "inactive-clients" ||
    to.name.toLowerCase() === "cash-flow" ||
    to.name.toLowerCase() === "general-banks"
      ? [to.name]
      : to.name.split("-");

  if (!userRoles) return false;

  return userRoles.some((role) => {
    return role.path.toLowerCase() === names[0].toLowerCase();
  });
};

export const canViewVerticalNavMenuLink = (item) => {
  const user = getUserData();
  if (!user) {
    if (item.route === "login") return true;
    return false;
  }

  if (
    user.userType.toLowerCase() === "branchadmin" ||
    user.userType.toLowerCase() === "admin"
  )
    return true;
  if (user.userType.toLowerCase() === "hq-admin") return true;

  const userRoles = getUserRoles();

  if (!userRoles) return false;
  return userRoles.some((role) => {
    return role.path.toLowerCase() === item.route.toLowerCase();
  });
};

export const canView = (item) => {
  const user = decodeToken();
  if (!user) {
    if (item.link === "login") return true;
    return false;
  }

  if (item.children) {
    const hasChild = item.children;
    hasChild.some((role) => {
      return true;
    });
  }
  if (
    user.userType.toLowerCase() === "branchadmin" ||
    user.userType.toLowerCase() === "admin"
  )
    return true;
  if (user.userType.toLowerCase() === "hq-admin") return true;

  const userRoles = getUserRoles();
  if (!userRoles) return false;
  return userRoles.some((role) => {
    return role.path.toLowerCase() === item.link.toLowerCase();
  });
};
