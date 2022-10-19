import jwtDecode from "jwt-decode";
import { sidebarData } from "../components/layout/sidebar/SidebarData";
// eslint-disable-next-line @next/next/no-server-import-in-page
import { NextResponse } from "next/server";

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  const token = await req.cookies.token;
  // console.log(token);
  // check if token date expired and redirect login

  if (pathname === "/" && !token) {
    return NextResponse.next();
  }
  if ((token && pathname === "/login") || pathname === "/") {
    return NextResponse.redirect("/clients");
  }
  if (pathname === "/login" || (pathname === "/" && !token)) {
    return NextResponse.next();
  }
  if (!token) {
    return NextResponse.redirect("/login");
  }

  let decoded = null;
  if (token) {
    try {
      decoded = jwtDecode(token);
    } catch (error) {
      return NextResponse.redirect("/login");
    }

    const route = pathname.replace("/", "");
    const IsAdmin = decoded.userType === "HQ-ADMIN";
    if (IsAdmin) {
      return NextResponse.next();
    }
    if (route === "unauthorised" || route === "404") return NextResponse.next();
    const hasAccess = decoded.roles.some((access) => {
      const path = access.path.toLowerCase();
      return path === route;
    });
    const isPageExist = sidebarData.some((item) => {
      const link = item.link;
      if (item.children) {
        return item.children.some((child) => {
          const childLink = child.link;
          return childLink === route;
        });
      }
      return link === route;
    });
    if (!isPageExist) return NextResponse.redirect("/404");
    if (!hasAccess) return NextResponse.redirect("/unauthorised");
  }
  return NextResponse.next();
}
