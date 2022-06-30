import jwt_decode from "jwt-decode";
import Router from "next/router";

export const login = (user) => {
  if (user.userType === "HQ-ADMIN" || user.userType === "BranchAdmin") {
    Router.replace("/dashboard");
  } else {
    const decoded = jwt_decode(user.accessToken);
    console.log("token", decoded.roles);
    //  check the user role and redicert his path decoded user
    if (decoded.roles.includes("path")) {
      Router.replace("/dashboard");
    }
  }
};
