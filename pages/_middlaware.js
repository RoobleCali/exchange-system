import { NextRequest, NextResponse } from "next/server";

export async function middleware(req, res) {
  const secret_key = req.cookies;

  if (secret_key) {
    return NextResponse.redirect("/login");
  }
  return NextResponse.next();
}
