import { NextRequest, NextResponse } from "next/server";
import { Comments } from "../data";
import { Comment } from "@/types/types";

// Creating the Get method for dynamic Route handlers
// You can also use the NextRequest as it gives more control
export async function GET(
  _request: NextRequest,
  //   getting the params using the RouteContext
  { params }: RouteContext<"/comments/[id]">
) {
  const commentid = (await params).id;
  const commentdata = Comments.find(
    (value) => value.id === parseInt(commentid)
  );
  if (commentdata) {
    return NextResponse.json<Comment>(commentdata);
  }
  return NextResponse.json(
    {
      message: "Comment ID Not Found",
    },
    {
      status: 404,
    }
  );
}

// Patch Request
export async function PATCH(
  // For getting the more control than the Request
  request: NextRequest,
  params: RouteContext<"/comments/[id]">
) {
  // await the params
  const commentparams = await params.params;
  //   Get the body from the request
  const updatedcomment: { text: string } = await request.json();
  return NextResponse.json<Comment>({
    id: parseInt(commentparams.id),
    text: updatedcomment.text,
  });
}

export async function DELETE(
  request: NextRequest,
  { params }: RouteContext<"/comments/[id]">
) {
  const commentparams = await params;
  return NextResponse.json({
    message: "Comment Deleted For ID",
  });
}
