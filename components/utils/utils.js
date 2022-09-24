import useJwt from "@/auth/jwt/useJwt";
import { getCookie } from "cookies-next";
import VueJwtDecode from "vue-jwt-decode";

export const isUserLoggedIn = () => {
  return (
    getCookie.getItem("token") &&
    localStorage.getItem(useJwt.jwtConfig.storageTokenKeyName)
  );
};

export const isSummaryReportCollapsed = () => {
  const collapsed = localStorage.getItem("hideSummaryReport");
  return JSON.parse(collapsed || false);
};

export const clearData = () => {
  localStorage.removeItem(useJwt.jwtConfig.storageTokenKeyName);
  localStorage.removeItem(useJwt.jwtConfig.storageRefreshTokenKeyName);

  // Remove userData from localStorage
  localStorage.removeItem("userData");
};

export const logout = () => {
  // Remove userData from localStorage
  // ? You just removed token from localStorage. If you like, you can also make API call to backend to blacklist used token
  localStorage.removeItem(useJwt.jwtConfig.storageTokenKeyName);
  localStorage.removeItem(useJwt.jwtConfig.storageRefreshTokenKeyName);

  // Remove userData from localStorage
  localStorage.removeItem("userData");

  // Reset ability
  // ability.update(initialAbility);

  // Redirect to login page
  this.$router.push({ name: "login" });
};

export const getUserData = () => {
  try {
    return JSON.parse(localStorage.getItem("userData"));
  } catch (error) {
    return null;
  }
};

export const getUserRoles = () => {
  try {
    let user = JSON.parse(localStorage.getItem("userData"));
    let data = VueJwtDecode.decode(user.accessToken);
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

export const getHomeRouteForLoggedInUser = (user) => {
  if (
    user.userType.toLowerCase() === "branchadmin" ||
    user.userType.toLowerCase() === "admin"
  )
    return { name: "clients" };
  if (user.userType.toLowerCase() === "hq-admin") return { name: "home" };

  let data = VueJwtDecode.decode(user.accessToken);

  if (!data.roles.length) {
    localStorage.removeItem(useJwt.jwtConfig.storageTokenKeyName);
    localStorage.removeItem(useJwt.jwtConfig.storageRefreshTokenKeyName);
    localStorage.removeItem("userData");
    throw new Error("You don't have any permission! Please contact admin.");
  }

  let route = "";

  route = data.roles[0].path.startsWith("/")
    ? data.roles[0].path.substring(1).toLowerCase()
    : data.roles[0].path.toLowerCase();

  return { name: route };
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
  const user = getUserData();
  if (!user) {
    if (item.route === "login") return true;
    return false;
  }

  if (item.children) return true;

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
