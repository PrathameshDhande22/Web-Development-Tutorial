import Link from "next/link";

const FeedPage = () => {
  return <div>
    <ul>
        <li><Link href="/feed/1">Feed 1</Link></li>
        <li><Link href="/feed/2">Feed 2</Link></li>
        <li><Link href="/feed/3">Feed 3</Link></li>
    </ul>
  </div>;
};

export default FeedPage;
