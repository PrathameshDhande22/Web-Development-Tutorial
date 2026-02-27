// Loading Page display till the main content is being cooked or ready
const ProductLoading = () => {
  return (
    <div>
      ProductLoading...{" "}
      <div className="h-6 w-6 animate-spin rounded-full border-b-2 border-current" />
    </div>
  );
};

export default ProductLoading;
