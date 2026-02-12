const ReviewDetail = async ({
  params,
}: //   passing the page props which is declared as globally
PageProps<"/product/[id]/review/[reviewid]">) => {
  // awaiting the params
  const { id, reviewid } = await params;

  return (
    <div>
      <h1 className="font-bold text-2xl">Product and Review Detail</h1>
      <span>Product ID : {id}</span>
      <span>Review ID: {reviewid}</span>
    </div>
  );
};

export default ReviewDetail;
