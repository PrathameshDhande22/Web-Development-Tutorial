import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Provider from "@/components/Provider";
import { Suspense } from "react";
// Importing the font with its font name
import { Edu_NSW_ACT_Cursive } from "next/font/google";

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

// Declaring the Font
const cursivefont = Edu_NSW_ACT_Cursive({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // add to include as the classname
    <html lang="en" className={cursivefont.className}>
      <body>
        <Suspense fallback={<div>Loading...</div>}>
          <Header></Header>
        </Suspense>
        {/* Pass the Context Provider or any client side provider in these way */}
        <Suspense fallback={<div>Loading....</div>}>
          <Provider>
            <main>{children}</main>
          </Provider>
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
