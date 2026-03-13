import { cacheLife } from "next/cache";

export async function generateStaticParams() {
  // Each Value inside the array is the params the page take which are dynamic.
  return [
    {
      id: "1",
    },
    {
      id: "2",
    },
    {
      id: "3",
    },
  ];
}

// Setting to false will send an 404 page when the id send by the client is not present in the pre-rendered list of the generateSaticParams.
// export const dynamicParams = false; // Won't work when cacheComponents is enabled

// However these component/page is an dynamic and will be rendered as Server Side.
// Rendering as the Static page need to add the Function generateStaticParams
const ProductDetail = async ({ params }: PageProps<"/products/[id]">) => {
  "use cache";
  cacheLife("max");
  const { id } = await params;
  return <div>ProductDetail {id}</div>;
};

export default ProductDetail;
