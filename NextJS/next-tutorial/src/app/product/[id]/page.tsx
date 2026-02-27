"use server";

import OrderButton from "@/components/OrderButton";
import { products } from "@/mock";
import { MockProducts } from "@/types/mockdata";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type ProductPageProps = {
  // the id must be the same as provided in the `[id]` while creating the folder
  params: Promise<{ id: string }>;
};

// IMport the not found function from the 'next/navigation" to call the not found page programmatically

// Creating the Dynamic metadata - must be the exact same function name
export const generateMetadata = async ({
  params,
}: ProductPageProps): Promise<Metadata> => {
  const id = await params;
  return {
    title: `Product - ${id.id}`,
  };
};

// creating the async function for getting the id as the parameter from the router
export default async function ProductDetail({ params }: ProductPageProps) {
  // await the parameters
  const parameters = await params;
  // doing intentionally to show the loading page
  const productdetail: Promise<MockProducts | undefined> = new Promise(
    (resolve) => {
      setTimeout(() => {
        resolve(
          products.find((value) => value.id === Number.parseInt(parameters.id))
        );
      }, 2000);
    }
  );

  const product=await productdetail;

  // if product id is greater than 10 show not found page
  if (parseInt(parameters.id) >= 1000) {
    notFound();
  }

  // throw the error to show the Error page
  if(parseInt(parameters.id)===120){
    throw new Error("Failed to Load the Product")
  }

  // No Product Found
  if (!product) {
    return <div>No Product Found</div>;
  }
  return (
    <div>
      <h4>Product Details</h4>
      <div className="flex flex-col">
        <span>ID: {product.id}</span>
        <span>ProductName: {product.productname}</span>
        <span>Quantity: {product.quantity}</span>
      </div>
      <div className="flex gap-1 ">
        <OrderButton productId={product.id} />
      </div>
    </div>
  );
}
