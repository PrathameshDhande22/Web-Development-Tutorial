const FeedDetails = async ({ params }: PageProps<"/feed/[id]">) => {
  const feedparams = await params;
  return <div>These is the Feed Details for the ID={feedparams.id}</div>;
};

export default FeedDetails;
