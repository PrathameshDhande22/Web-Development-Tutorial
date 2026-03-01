import Link from "next/link";

const Route4Page = () => {
  return (
    <div>
      <div>Route 4 Page</div>
      <Link href="/route1/route3" className="underline">
        Navigate to Route 3 Intercepted Page
      </Link>
      <Link href="/route5" className="underline">
        navigate to App Route 5 Intercept
      </Link>
    </div>
  );
};

export default Route4Page;
