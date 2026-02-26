import Link from "next/link";

const ArticlePage = () => {
  return (
    <div>
      <span>Accessing the Search Params and Params</span>
      <div className="flex flex-col gap-2 underline">
        <Link href="/article/123-article?lang=en">Article in English</Link>
        <Link href="/article/123-article?lang=fr">Article in French</Link>
        <Link href="/article/123-article?lang=es">Article in Spanish</Link>
      </div>
    </div>
  );
};

export default ArticlePage;
