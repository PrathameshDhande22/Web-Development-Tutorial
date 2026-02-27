"use client";

import { redirect, useRouter } from "next/navigation";

type OrderButtonProps = {
  productId: number;
};

const OrderButton = ({ productId }: OrderButtonProps) => {
  // navigating the user programatically using the useRouter hook
  const router = useRouter();
  const handleClickOrder = () => {
    router.push("/order", { scroll: true });
  };

  const handleClickReview = () => {
    // navigate the Page Programmatically
    redirect(`/product/${productId}/review/123`);
  };
  return (
    <>
      <button
        className="p-2 bg-green-400 hover:bg-green-600 transition-colors hover:transition-colors"
        onClick={handleClickOrder}
      >
        Order Now
      </button>
      <button className="p-2 bg-sky-400" onClick={handleClickReview}>
        View Review
      </button>
    </>
  );
};

export default OrderButton;
