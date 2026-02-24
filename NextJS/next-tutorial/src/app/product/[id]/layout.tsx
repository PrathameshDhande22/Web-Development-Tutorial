import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Detail",
  description: "Product Details",
};

// Product Specific Layout or you can say the Nested Layout
const ProductLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-row gap-3">
      <aside className="border-2 border-black p-3">Product Layout</aside>
      <div>{children}</div>
    </div>
  );
};

export default ProductLayout;
