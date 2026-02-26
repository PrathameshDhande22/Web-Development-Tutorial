"use client";

import { useParams, useSearchParams } from "next/navigation";

// type safety for the useParams hook
type ArticleParams = {
  articleId: string;
};

// getting the params and search params in the client side components
const ArticleCard = () => {
  // getting the params using the useParamsHook
  const articleparams = useParams<ArticleParams>();
  //getting the search params using the useSearchParams hook
  const articleSearchParams = useSearchParams();
  return (
    <div className="border-2 border-red-500 p-3">
      <h3>Reading the Article in the Client Side Component</h3>
      <div className="font-bold text-2xl">
        Read Article {articleparams.articleId}
      </div>
      <div>Selected Language For Reading {articleSearchParams.get("lang")}</div>
    </div>
  );
};

export default ArticleCard;
