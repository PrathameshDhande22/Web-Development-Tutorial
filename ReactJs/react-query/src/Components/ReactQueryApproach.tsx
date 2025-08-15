import { useQuery } from "@tanstack/react-query";
import { postapi } from "../api/post.api";
import { Post } from "./Post";

export const ReactQueryApproach = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: postapi,
    retry: true,
    staleTime: 1000 * 60, // 1 minute
  });

  return (
    <div className="flex gap-1.5">
      {isLoading && (
        <span className="loading loading-spinner loading-xl"></span>
      )}
      {error && <p className="text-red-500">{error.message}</p>}
      {!isLoading &&
        !error &&
        data?.data.map((value) => (
          <Post
            description={value.content}
            title={value.title}
            key={value.id}
          />
        ))}
    </div>
  );
};
