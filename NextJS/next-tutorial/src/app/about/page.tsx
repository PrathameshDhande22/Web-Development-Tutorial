"use server";

import { ClientSideFunction } from "@/utils/client-fn";
import { ServerSideFunction } from "@/utils/server-fn";
import { JSX } from "react";

const About = async (): Promise<JSX.Element> => {
  // using the server side function
  const res = await ServerSideFunction();

  // These will throw the build time error due to these function is marked as client-only and it will only work on the client side pages only.
  // const res_client=ClientSideFunction()
  return (
    <div>
      <h1>About Page</h1>
      <div>{res}</div>
    </div>
  );
};

export default About;
