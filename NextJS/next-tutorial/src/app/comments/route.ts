import { Comment } from "@/types/types";
import { NextResponse } from "next/server";
import { Comments } from "./data";

// Returning the JSON Response from teh Route.
export async function GET() {
  return NextResponse.json<Comment[]>(Comments, {
    headers: {
      "X-Powered-By": "Prathamesh Dhande",
    },
  });
}
