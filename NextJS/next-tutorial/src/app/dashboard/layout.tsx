"use client";
// Layout which will show the different page slots

import { Card } from "@/components/Card";
import { use } from "react";

// getting the slot as the props in the layout
const DashboardLayout = ({
  children,
  notification,
  useranalytics,
  login,
}: LayoutProps<"/dashboard">) => {
  // flag for checking if the user is logged in or not
  const isLoggedIn = true;
  // rendering the Slots based on Conditions
  return isLoggedIn ? (
    <div className="p-4">
      <div>{children}</div>

      <div className="border-2 border-black p-2 grid grid-cols-2 gap-4">
        <Card>{notification}</Card>
        <Card>{useranalytics}</Card>
      </div>
    </div>
  ) : (
    <div>
      <div className="border-2 border-black p-2 grid grid-cols-2 gap-4">
        <Card>{login}</Card>
      </div>
    </div>
  );
};

export default DashboardLayout;
