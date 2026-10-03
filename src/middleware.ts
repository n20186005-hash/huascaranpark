import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const host = req.headers.get("host") || "";
  const isLocal = host.includes("localhost") || host.startsWith("127.");
  let changed = false;

  // English main version lives at the root "/"; redirect legacy /en there.
  if (url.pathname === "/en") {
    url.pathname = "/";
    changed = true;
  }

  // Force the www host (apex non-www -> www) for canonical consistency.
  if (!isLocal && !host.startsWith("www.") && !host.includes(":")) {
    url.host = `www.${host}`;
    changed = true;
  }

  if (changed) {
    return NextResponse.redirect(url, 301);
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|gallery|images|api).*)",
  ],
};
