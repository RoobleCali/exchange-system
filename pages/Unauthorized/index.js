import { Router } from "next/router";
import React from "react";
import jwt_decode from "jwt-decode";

//   const decoded = jwt_decode(user.accessToken);
//   if (decoded.roles.length === 0) {
//     return alert("You are not authorized to access this page");
//   }
//   const route = decoded.roles[0].path.toLowerCase();

//   Router.replace(route);

function index() {
  console.log("unauthorized");
  return <div></div>;
}

export default index;
