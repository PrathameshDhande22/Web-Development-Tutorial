import type { FC } from "react";

type PostProps = {
  title: string;
  description: string;
};

export const Post: FC<PostProps> = ({ description, title }) => {
  return (
    <div className="card card-border bg-gray-600 text-white w-96 cursor-pointer">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
