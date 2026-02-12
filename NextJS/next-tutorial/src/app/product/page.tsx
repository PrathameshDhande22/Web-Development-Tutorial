import { products } from "@/mock";
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
