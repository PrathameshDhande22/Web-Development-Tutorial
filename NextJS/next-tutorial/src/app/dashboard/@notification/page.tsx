import Link from "next/link";

// These is the Route Segment Page but it will not be included in the routes such as "/dashboard/notification" only available in the layout in the form of props
const NotificationPage = () => {
  return (
    <div>
      <div>Notification Page</div>
      <Link href="/dashboard/archived" className="underline">Archived</Link>
    </div>
  );
};

export default NotificationPage;
