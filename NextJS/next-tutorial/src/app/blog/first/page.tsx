import { Metadata } from "next";

// defining the title as the layout to be used
export const metadata: Metadata = {
  title: "First Blog",
};

export default function FirstBlogPost() {
  return (
    <div>
      <h1>First Blog Post</h1>
      <p>This is the content of the first blog post.</p>
    </div>
  );
}
