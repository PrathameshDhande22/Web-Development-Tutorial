import { Metadata } from "next";

// defining the title to override the parent title template
export const metadata: Metadata = {
  title: {
    absolute: "Second Blog",
  },
};

export default function Blog() {
  return (
    <div>
      <h1>Blog</h1>
      <p>Welcome to the blog page!</p>
    </div>
  );
}
