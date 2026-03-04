import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";

// Accessing the Headers from the Request
// Get the Headers from the Request Object
export async function GET(request: NextRequest) {
  const headersobj = new Headers(request.headers);
  // Get the Header Specific
  console.log("Authorization Header =", headersobj.get("Authorization"));

  // Get the Headers using the headers function
  const headerslist = await headers();
  console.log("Headers from Headers Fun=>", headerslist.get("Authorization"));
  return NextResponse.json({
    message: "Sent Successfully",
  });
}
