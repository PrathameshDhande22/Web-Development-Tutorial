"use client";

import React, { useState } from "react";

// template also shares the between the children routes but resets the dom unlike layout where state is stored when navigating between different pages or child routes.
const AuthTemplate = ({ children }: { children: React.ReactNode }) => {
  const [inputvalue, setInputValue] = useState<string>("");
  return (
    <div>
      <div>{children}</div>

      <div>
        <label htmlFor="Page2">template Input Tag</label>
        <input
          type="text"
          name="Name"
          id="Page2"
          className="p-2 border-2 border-black"
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
    </div>
  );
};

export default AuthTemplate;
