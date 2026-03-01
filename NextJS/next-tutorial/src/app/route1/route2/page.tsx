import Link from "next/link";

const Route2Page = () => {
  return (
    <div>
      <div>Route 2 Page</div>
      <Link href="/route1/route3" className="underline">Route 3 Page</Link>
    </div>
  );
};

export default Route2Page;
