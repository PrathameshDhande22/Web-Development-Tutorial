import Link from "next/link";

// These page will be generated as Static page
const ProductPage = () => {
  return (
    <div>
      <div>
        <Link href="products/1">Product 1</Link>
        <Link href="products/2">Product 2</Link>
        <Link href="products/3">Product 3</Link>
      </div>
    </div>
  );
};

export default ProductPage;
