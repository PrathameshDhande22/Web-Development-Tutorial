import { useEffect, useState } from "react";
import { postapi, type PostLists } from "../api/post.api";
import { Post } from "./Post";

// Fetching the posts using traditional useEffect and state management which is less efficient and harder to manage
export const Traditional = () => {
  const [posts, setPosts] = useState<PostLists>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchposts = async () => {
      const response = await postapi();
      if (response.status === 200) {
        setPosts(response.data);
        setLoading(false);
      } else {
        setError("Failed to fetch posts");
        setLoading(false);
      }
    };
    fetchposts();
    console.log(posts);
  }, []);

  return (
    <div className="flex gap-1.5">
      {loading && <span className="loading loading-spinner loading-xl"></span>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading &&
        !error &&
        posts.map((value) => (
          <Post
            description={value.content}
            title={value.title}
            key={value.id}
          />
        ))}
    </div>
  );
};
