"use client";

import { useState } from "react";

const AuthLayout = ({ children }: LayoutProps<"/">) => {
  const [inputvalue, setInputValue] = useState<string>("");
  return (
    <div>
      <h3 className="text-2xl font-bold">Authentication</h3>

      <div>{children}</div>

      {/* Input shared but values is also shared when the routes change */}
      <div>
        <label htmlFor="Page">Shared Input Tag</label>
        <input
          type="text"
          name="Name"
          id="Page"
          className="p-2 border-2 border-black"
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
    </div>
  );
};

export default AuthLayout;
