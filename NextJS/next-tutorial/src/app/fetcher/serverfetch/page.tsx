"use server";

import { User } from "@/types/types";

// Fetching the data on the Server Side
const ServerFetcherPage = async () => {
  const userdataResponse = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    {
      cache: "no-store",
    }
  );
  const userdata = (await userdataResponse.json()) as User[];

  return (
    <div>
      <div className="flex flex-col gap-3">
        {userdata.map((value, index) => {
          return (
            <div className="border-2 border-red-500 p-2" key={index}>
              Name: {value.name}
              UserName : {value.username}
              Email: {value.email}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServerFetcherPage;
