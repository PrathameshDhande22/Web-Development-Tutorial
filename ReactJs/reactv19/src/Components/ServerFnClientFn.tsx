"use client";

import { useState } from "react";
import { SubmitUserNameForm } from "../Utils/form";
import { useFormStatus } from "react-dom";

const ServerFnClientFn = () => {
  const [message, setMessage] = useState<String>();
  const { pending } = useFormStatus();

  const handleSubmit = (formdata: FormData) => {
    SubmitUserNameForm(String(formdata.get("username")?.toString())).then(
      (value) => {
        setMessage(value);
      }
    );
  };

  return (
    <div className="my-5">
      <h3 className="text-2xl text-center font-bold">
        Server and client Functions
      </h3>
      <form action={handleSubmit}>
        <input type="text" name="username" placeholder="Enter Your Name" />
        <button className="p-2 bg-green-400 hover:border-2 hover:border-black">
          Submit Username
        </button>
      </form>
      <div>Submitted Name : {pending ? "Loading..." : message}</div>
    </div>
  );
};

export default ServerFnClientFn;
