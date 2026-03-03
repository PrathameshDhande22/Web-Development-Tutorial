import Modal from "@/components/Modal";

const FeedDetailIntercepted = async ({ params }: PageProps<"/feed/[id]">) => {
  const feedparams = await params;
  return (
    <Modal>
      <div>
        <h2 className="text-2xl font-bold mb-4">Feed Details</h2>
        <p className="text-lg">Feed ID: {feedparams.id}</p>
        <p className="text-gray-600 mt-2">
          This modal is shown when navigating from the feed page.
        </p>
      </div>
    </Modal>
  );
};

export default FeedDetailIntercepted;
