import type { FC } from "react";
import { Link } from "react-router";

type PostProps = {
  id: number;
  title: string;
  description: string;
};

export const Post: FC<PostProps> = ({ description, title ,id}) => {
  return (
    <div className="card card-border bg-gray-600 text-white w-96 cursor-pointer">
      <Link to={`/postDetails/${id}`}>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
};
