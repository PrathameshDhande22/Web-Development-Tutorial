import { NextRequest, NextResponse, ProxyConfig } from "next/server";

export function proxy(request: NextRequest) {
  const response = NextResponse.next();
  // Setting the Cookie
  response.cookies.set("Data", "ValueFromMiddleware");
  return response;
}

// adding the matcher to match the routes on where to apply the middleware
export const config: ProxyConfig = {
  matcher: "/comments/:path*",
};
