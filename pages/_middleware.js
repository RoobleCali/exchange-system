import { getCookie } from "cookies-next";
import { NextResponse } from "next/server";

export function middleware(req) {
  const token = getCookie("token");
  const url = req.nextUrl.clone();

  if (token) {
    if (req.nextUrl.pathname === "/login") {
      url.pathname = "/login";

      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }

  url.pathname = "/login";
  return NextResponse.rewrite(url);
}
