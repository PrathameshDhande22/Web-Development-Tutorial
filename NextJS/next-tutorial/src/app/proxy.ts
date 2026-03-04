import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const response = NextResponse.next();
  // Setting the Cookie
  response.cookies.set("Data", "Value");
  return response;
}

// adding the matcher to match the routes on where to apply the middleware
export const config = {
  matcher: "/comments/:path",
};
