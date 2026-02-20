import { products } from "@/mock";

type ProductPageProps = {
  // the id must be the same as provided in the `[id]` while creating the folder
  params: Promise<{ id: string }>;
};

import { notFound } from "next/navigation";

// IMport the not found function from the 'next/navigation" to call the not found page programmatically

// creating the async function for getting the id as the parameter from the router
export default async function ProductDetail({ params }: ProductPageProps) {
  // await the parameters
  const parameters = await params;
  const productdetail = products.find(
    (value) => value.id === Number.parseInt(parameters.id)
  );

  // if product id is greater than 10 show not found page
  if (parseInt(parameters.id) >= 1000) {
    notFound();
  }

  // No Product Found
  if (!productdetail) {
    return <div>No Product Found</div>;
  }
  return (
    <div>
      <h4>Product Details</h4>
      <div className="flex flex-col">
        <span>ID: {productdetail.id}</span>
        <span>ProductName: {productdetail.productname}</span>
        <span>Quantity: {productdetail.quantity}</span>
      </div>
    </div>
  );
}
