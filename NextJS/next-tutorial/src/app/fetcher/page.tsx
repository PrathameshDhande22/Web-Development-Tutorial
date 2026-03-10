"use client";

import { useQuery } from "@tanstack/react-query";
import { type User } from "@/types/types";

// we will be using react query for fetching the data and nextjs fetch function
const fetchusers = async () => {
  const userdata = await fetch("https://jsonplaceholder.typicode.com/users");
  return userdata.json() as Promise<User[]>;
};

const FetcherPage = () => {
  // React Query
  const { data, error, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: fetchusers,
  });
  return (
    <div>
      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="flex flex-col gap-3">
            {data?.map((value, index) => {
              return (
                <div className="border-2 border-black p-2" key={index}>
                  Name: {value.name}
                  UserName : {value.username}
                  Email: {value.email}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default FetcherPage;
