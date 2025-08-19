import {
  useInfiniteQuery,
  type QueryFunctionContext,
} from "@tanstack/react-query";
import {
  GetProductsByPagination,
  type GetProductsPaginateResponse,
} from "../api/product.api";
import { HeaderTag } from "../Components/HeaderTag";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export const InfiniteQuery = () => {
  // Function to fetch products with infinite scroll
  // It accepts a page parameter which is used to fetch the products for that page
  const fetchProductswithInfiniteScroll = async ({
    pageParam,
  }: QueryFunctionContext) => {
    const response = await GetProductsByPagination(pageParam as number, 10);
    return response.data;
  };

  const { ref, inView } = useInView({});

  //   Usage of useInfiniteQuery to fetch products with infinite scroll
  const { data, error, isLoading, fetchNextPage, hasNextPage } =
    useInfiniteQuery<GetProductsPaginateResponse>({
      queryKey: ["products"],
      queryFn: fetchProductswithInfiniteScroll,
      initialPageParam: 1,
      getPreviousPageParam: (firstPage, _allPages) => {
        return firstPage.prev ? firstPage.prev : undefined;
      },
      getNextPageParam: (lastPage, _allPages) => {
        return lastPage.next ? lastPage.next : undefined;
      },
    });

  useEffect(() => {
    // Only fetch next page if there is one
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  return (
    <div>
      <HeaderTag
        header="Infinite Query (Infinite Scroll)"
        level="text-2xl"
        className="font-bold my-4"
      />
      <div>
        {isLoading && (
          <span className="loading loading-spinner loading-lg"></span>
        )}
        {error && <p className="text-red-500">{error.message}</p>}
        {!isLoading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data?.pages.flatMap((productresponse) =>
              productresponse.data.map((product) => (
                <div key={product.id} className="border p-4 mb-4 rounded">
                  <h3 className="font-bold text-lg">{product.name}</h3>
                  <p className="text-gray-500">Price: ${product.price}</p>
                </div>
              ))
            )}
            {hasNextPage && <div ref={ref} className="h-1 col-span-full" />}
          </div>
        )}
      </div>
    </div>
  );
};
