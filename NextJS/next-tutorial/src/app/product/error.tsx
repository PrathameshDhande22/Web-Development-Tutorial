"use client";

// Shows the Error Page when some client or page throws error.
const ErrorProduct = ({ error, reset }: ErrorPageProps) => {
  return (
    <div>
      Error In Product
      <span>Details : {error.message}</span>
    </div>
  );
};

export default ErrorProduct;
