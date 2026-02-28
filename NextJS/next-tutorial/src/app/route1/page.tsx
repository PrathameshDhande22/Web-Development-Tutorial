import Link from "next/link";

const Route1Page = () => {
  return (
    <div>
      <div>Route1Page</div>
      <Link href="/route1/route2" className="underline">
        Route 2
      </Link>
    </div>
  );
};

export default Route1Page;
