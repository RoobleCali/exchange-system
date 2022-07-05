import { Router } from "next/router";
import React from "react";
import jwt_decode from "jwt-decode";
import sad from "../assets/sad.png";
import { getCookie } from "cookies-next";

function index() {
  return <div>yout are not authorized</div>;
}

export default index;
