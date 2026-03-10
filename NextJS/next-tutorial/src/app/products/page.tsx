import Review from "@/components/Review";
import Link from "next/link";
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
    </div>
  );
};

export default ProductPage;
