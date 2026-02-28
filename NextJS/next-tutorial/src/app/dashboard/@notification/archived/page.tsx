import Link from "next/link";

// These is the Sub navigation if you hit the route with "/dashboard/archived" the content inside the layout.tsx for the `@notification` slot will change to these page because `/dashboard/arhived` is the regular routes
const ArchivedNotification = () => {
  return (
    <div>
      <div>archived Notification Page</div>
      <Link href="/dashboard" className="underline">
        Default
      </Link>
    </div>
  );
};

export default ArchivedNotification;
