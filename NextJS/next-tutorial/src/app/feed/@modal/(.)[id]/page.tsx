const FeedDetailIntercepted = async ({ params }: PageProps<"/feed/[id]">) => {
  const feedparams = await params;
  return (
      <div>Feed Detail Intercepted ID = {feedparams.id}</div>
  );
};

export default FeedDetailIntercepted;
