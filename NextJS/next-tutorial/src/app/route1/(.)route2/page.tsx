import Link from "next/link";

// Intercepting the Route 2 Page on One Parent Level
const InterceptedRoute2Page = () => {
  return (
    <div>
      <div>Intercepted Route 2 Page</div>
      <Link href="/route1" className="underline">
        Route 1
      </Link>
    </div>
  );
};

export default InterceptedRoute2Page;
