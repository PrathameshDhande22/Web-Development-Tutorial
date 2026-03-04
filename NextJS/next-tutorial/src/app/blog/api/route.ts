import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET() {
  // redirect to the comments
  redirect("/comments");
  return NextResponse.json({
    message: "Message Sent Successfully",
  });
}
