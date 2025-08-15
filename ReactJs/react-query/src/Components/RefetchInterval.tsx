import { useQuery } from "@tanstack/react-query";
import { stockPriceApi } from "../api/stockprice.api";
import { HeaderTag } from "./HeaderTag";

export const RefetchInterval = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["stockPrice"],
    queryFn: stockPriceApi,
    refetchInterval: 1000, // refetch every second
    refetchIntervalInBackground: true, // This will keep the refetching even when the tab is not active
  });

  return (
    <div>
      <HeaderTag header="Refetch Interval" level="text-xl" className="my-4 font-bold" />
      <div>
        {isLoading && (
          <span className="loading loading-spinner loading-lg"></span>
        )}
        {!isLoading && (
          <div className="text-lg">
            <p>
              Current Stock Price:{" "}
              <span
                className={`${data! > 100 ? "text-green-700" : "text-red-500"}`}
              >
                {data}
                {data! > 100 ? <span> &uarr;</span> : <span> &darr;</span>}
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
