import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

// Title metadata configuring title to be used by the child routes also
export const metadata: Metadata = {
  // defining the template for the title which will child routes will define the title
  title: {
    default: "Next JS Tutorial",
    template: "%s - Tutorial",
  },
  description:
    "A simple NextJS tutorial to get started with NextJS 13 and the new app directory structure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header></Header>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
