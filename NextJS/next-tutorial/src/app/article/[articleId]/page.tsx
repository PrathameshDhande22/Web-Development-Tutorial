import ArticleCard from "@/components/ArticleCard";

// creating the type safety for the the Article Search Params
interface ArticleDetailsPageProps {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang: "en" | "es" | "fr" }>;
}

const ArticleDetailsPage = async ({
  params,
  searchParams,
}: ArticleDetailsPageProps) => {
  // getting the search Params and Params
  const articleparams = await params;
  const articleSearchParams = await searchParams;
  return (
    <div>
      <div className="font-bold text-2xl">
        Read Article {articleparams.articleId}
      </div>
      <div>Selected Language For Reading {articleSearchParams.lang}</div>
      <ArticleCard />
    </div>
  );
};

export default ArticleDetailsPage;
