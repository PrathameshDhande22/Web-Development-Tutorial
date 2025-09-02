import { useQuery, useQueryClient } from "@tanstack/react-query";
import { HeaderTag } from "./HeaderTag";
import { postapi, type PostLists } from "../api/post.api";
import { Post } from "./Post";
import { AxiosHeaders, type AxiosResponse } from "axios";

export const InvalidateQueries = () => {
  const queryclient = useQueryClient();

  const { data, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: postapi,
    retry: true,
    staleTime: 1000 * 60, // 1 minute
  });

  const handleInvalidateQueryClick = () => {
    queryclient.invalidateQueries(
      {
        queryKey: ["posts"],
      },
      { cancelRefetch: true }
    );
  };

  const handleSetNewDataClick = () => {
    queryclient.setQueryData<AxiosResponse<PostLists, any> | undefined>(
      ["posts"],
      {
        data: [
          {
            id: 999,
            title: "New Post",
            content: "This is a new post added using setQueryData",
          },
        ],
        status: 200,
        statusText: "OK",
        headers: {},
        config: {
          headers: new AxiosHeaders(),
        },
      }
    );
  };

  return (
    <div>
      <HeaderTag
        header="Invalidate Queries"
        level="text-2xl"
        className="my-4 font-bold"
      />
      <div className="flex gap-1.5">
        {!isLoading &&
          !error &&
          data?.data.map((value) => (
            <Post
              description={value.content}
              title={value.title}
              key={value.id}
              id={value.id}
            />
          ))}
      </div>
      <button
        className="btn btn-block btn-primary my-3"
        onClick={handleInvalidateQueryClick}
      >
        Invalidate Queries
      </button>
      <button
        className="btn btn-block btn-primary my-3"
        onClick={handleSetNewDataClick}
      >
        Set New Data
      </button>
    </div>
  );
};
