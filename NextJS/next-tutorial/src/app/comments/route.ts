import { Comment } from "@/types/types";
import { NextRequest, NextResponse } from "next/server";
import { Comments } from "./data";

// Returning the JSON Response from teh Route.
export async function GET(request: NextRequest) {
  // applying the filter
  // Get the data related to the filter from the NextRequest
  const filters = request.nextUrl.searchParams;
  const query = filters.get("query");
  return NextResponse.json<Comment[]>(Comments, {
    headers: {
      "x-query": String(query),
      "X-Powered-By": "Prathamesh Dhande",
    },
  });
}

// Creating the POST request
export async function POST(request: Request) {
  // Get the Data from the request body
  const requestbody: Comment = await request.json();
  Comments.push(requestbody);
  // Send the Response as the Json with Type Safety instead you can also use the Response.Json
  return NextResponse.json<Comment>(requestbody, {
    status: 201,
    headers: {
      Content: "application/json",
    },
  });
}
