import { useState } from "react";
import { HeaderTag } from "../Components/HeaderTag";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { GetProductsByPagination } from "../api/product.api";

export const Pagination = () => {
  const [page, setPage] = useState<number>(1);

  const { data, isLoading, error } = useQuery({
    queryKey: ["products", page],
    queryFn: () => GetProductsByPagination(page, 5),
    staleTime: 1000 * 60 * 1,
    select: (data) => data.data,
    placeholderData: keepPreviousData,
  });

  const handlePageChange = (direction: "next" | "prev") => {
    if (direction === "next" && data?.next) {
      setPage((prev) => prev + 1);
    } else if (direction === "prev" && data?.prev) {
      setPage((prev) => prev - 1);
    }
  };
  const handlePrevPage = () => {
    handlePageChange("prev");
  };

  const handleNextPage = () => {
    handlePageChange("next");
  };
  return (
    <div>
      <HeaderTag
        header="Pagination (Products)"
        level="text-2xl"
        className="font-bold py-4"
      />
      <div>
        {isLoading && (
          <span className="loading loading-spinner loading-lg"></span>
        )}
        {error && <p className="text-red-500">{error.message}</p>}
        {!isLoading && !error && (
          <div>
            <div className="flex gap-5 flex-wrap items-center">
              {data?.data.map((product) => {
                return (
                  <div key={product.id} className="border p-4 mb-4 rounded">
                    <h3 className="font-bold text-lg">{product.name}</h3>
                    <p className="text-gray-500">Price: ${product.price}</p>
                  </div>
                );
              })}
            </div>
            <div>
              <span>
                Page No: {page} of {data?.pages}
              </span>
            </div>
            <div className="flex gap-2 justify-between mt-4">
              <button
                className={`btn-block btn-secondary rounded-3xl p-2 text-white ${
                  data?.prev ? "bg-blue-500" : "bg-gray-400"
                }`}
                onClick={handlePrevPage}
              >
                {" "}
                {"<-"} Prev
              </button>
              <button
                className={`btn-block btn-secondary rounded-3xl p-2 text-white ${
                  data?.next ? "bg-blue-500" : "bg-gray-400"
                }`}
                onClick={handleNextPage}
              >
                Next {"->"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
