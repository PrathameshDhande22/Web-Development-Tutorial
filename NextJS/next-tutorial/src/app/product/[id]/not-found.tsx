"use client"; // making these component as the client side
import { usePathname } from "next/navigation";
// getting the pathname by the hook.

const NotFoundProduct = () => {
  const pathname = usePathname();
  const productid = pathname.split("/")[2] ?? 0;
  return <div>NotFoundProduct For ID - {productid}</div>;
};

export default NotFoundProduct;
