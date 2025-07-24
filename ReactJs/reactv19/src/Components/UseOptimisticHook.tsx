import { useOptimistic, useState } from "react";

type Message = {
  text: String;
};

// Function that submits the message
const submitform = async (formdata: FormData): Promise<Message> => {
  return new Promise<Message>((resolve, reject) => {
    setTimeout(() => {
      const message: FormDataEntryValue | null = formdata.get("message");
      const tofailtherequest: FormDataEntryValue | null =
        formdata.get("update");

      if (Boolean(tofailtherequest)) {
        reject("Failed to Update the Message");
      }
      resolve({ text: String(message) });
    }, 1000);
  });
};

/**
 * It is the hook used to update the UI. If the function takes time to update the value you can use the optmistic hook to show the updated value if after function is successful then it sets the updated value otherwise retract to the old value.
 * @returns {Element}
 */
const UseOptimisticHook: React.FC = () => {
  const [message, setMessage] = useState<Message>({
    text: "SimpleText",
  });

  // Optimistic Hook
  const [optimisticmessage, addOptimisticMessage] =
    useOptimistic<Message>(message);

  const handleSubmitform = async (formdata: FormData) => {
    addOptimisticMessage({ text: String(formdata.get("message")) });
    try {
      const message = await submitform(formdata);
      // If the message is successful the set the message in the hook which in turn also remains the values as same.
      if (message) setMessage(message);
    } catch (e) {
      alert("Failed to Update the message");
    }
  };

  return (
    <div className="flex justify-center flex-col items-center gap-2">
      <h3 className="text-xl font-bold my-3">Send Your Message here</h3>
      <form action={handleSubmitform}>
        <input
          type="text"
          placeholder="Enter Message"
          className="p-3 border-2 border-black"
          name="message"
        />
        <button className="p-3 border-2 border-blue-500 bg-emerald-300">
          Send
        </button>
        <div className="flex justify-center gap-2 items-center">
          <label htmlFor="checkbox">To Fail Update</label>
          <input type="checkbox" id="checkbox" name="update" />
        </div>
      </form>
      <div>
        <span>Message: {optimisticmessage.text}</span>
      </div>
    </div>
  );
};

export default UseOptimisticHook;
