import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { getPostById } from "../api/post.api";
import { Post } from "../Components/Post";
import { HeaderTag } from "../Components/HeaderTag";

type PostDetailsRouteParams = {
  id: string;
};

export const PostDetails = () => {
  const { id } = useParams<PostDetailsRouteParams>();

  const { data, isLoading, error } = useQuery({
    queryKey: ["postDetails", id],
    queryFn: () => getPostById(id as string),
    staleTime: 1000 * 60 * 1,
    gcTime: 1000 * 60 * 5,
    select: (data) => data.data,
  });

  return (
    <div>
        <div className="my-5">
            <HeaderTag header="Post Details (Unique Query)" level="text-2xl" className="font-bold"/>
        </div>
      {isLoading && (
        <span className="loading loading-spinner loading-xl"></span>
      )}
      {error && <p className="text-red-500">{error.message}</p>}
      {!isLoading && !error && (
        <Post
          description={data!.content}
          title={data!.title}
          key={data!.id}
          id={data!.id}
        />
      )}
    </div>
  );
};
