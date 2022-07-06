import { getCookie } from "cookies-next";
import jwtDecode from "jwt-decode";

import { NextResponse } from "next/server";
export async function middleware(req) {
  const { pathname } = req.nextUrl;
  const token = await req.cookies.token;
  if (pathname === "/login" && !token) {
    return NextResponse.next();
  }
  if (!token) {
    return NextResponse.redirect("/login");
  }
  if (token && pathname === "/login") {
    return NextResponse.redirect("/clients");
  }

  // decode token

  return NextResponse.next();
}
