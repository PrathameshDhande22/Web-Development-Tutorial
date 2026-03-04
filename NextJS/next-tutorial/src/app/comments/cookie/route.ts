import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

// Fetching and setting the Cookie from the REquest and Response
export async function GET(request: NextRequest) {
  // you can use the Request object to get the cookie
  const cookiereq = request.cookies;
  console.log(cookiereq.get("Auth"));

  // Next js Built in function to read and set the cookies
  const cookieslist = await cookies();
  console.log(cookieslist.get("Auth"));

  // Setting the Cookies
  cookieslist.set("Query", "UserInstall");

  // Setting teh Cookies via Response
  return NextResponse.json(
    {
      message: "Get Successful",
    },
    {
      headers: {
        "Set-Cookie": "au=userdel",
      },
    }
  );
}
