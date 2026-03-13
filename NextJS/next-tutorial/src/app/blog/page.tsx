import { Metadata, Viewport } from "next";
import Image from "next/image";
import BlogImage from "@/assets/images.jpg";

// defining the title to override the parent title template
export const metadata: Metadata = {
  title: {
    absolute: "Second Blog",
  },
};

// defining the viewport
export const viewport: Viewport = {
  colorScheme: "dark",
};

export default function Blog() {
  return (
    <div>
      <h1>Blog</h1>
      <p>Welcome to the blog page!</p>

      {/* Using the nextjs Image Component */}
      <Image src={BlogImage} alt="Blog image"></Image>
    </div>
  );
}
