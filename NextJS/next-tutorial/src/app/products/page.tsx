import Review from "@/components/Review";
import Link from "next/link";
import Script from "next/script";
import { Suspense } from "react";

// These page will be generated as Static page
const ProductPage = () => {
  return (
    <div>
      <div>
        <Link href="products/1">Product 1</Link>
        <Link href="products/2">Product 2</Link>
        <Link href="products/3">Product 3</Link>
      </div>
      {/* Suspense for Progressive UI Rendering */}
      <Suspense fallback={<div>Loading....</div>}>
        <Review />
      </Suspense>
      {/* Script from the next js */}
      <Script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
        strategy="afterInteractive"
      ></Script>
    </div>
  );
};

export default ProductPage;
