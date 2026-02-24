import { products } from "@/mock";
import { Metadata } from "next";

// Overriding the static metadata object
// the description will be applied from the root layout.tsx
export const metadata: Metadata = {
  title: "Product List Page",
};

export default function ProductPage() {
  return (
    <div>
      <h3 className="font-bold text-xl ">Product Page</h3>
      <div className="flex flex-row gap-3">
        {products.map((value, index) => {
          return (
            <div key={index} className="flex flex-col">
              <span>ID: {value.id}</span>
              <span>ProductName: {value.productname}</span>
              <span>Quantity: {value.quantity}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
