import { useFormStatus } from "react-dom";

/**
 * `useFormStatus` hook is used to indicate the status of the form. Or the current state of the form. These hook must be wrapped inside the <form> element for just above the form element. It can be useful in showing the loading indicators while the form is being submitted.
 * @returns {Element}
 */
const UseFormStatus = () => {
  const handleSubmitAction = async (formData: FormData) => {
    const username = formData.get("username");
    const password = formData.get("password");

    console.log("Submitting form...");
    console.log("Username:", username);
    console.log("Password:", password);

    // Simulate an asynchronous operation (e.g., an API call)
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a 2-second delay

    alert("You Submitted the Form Successfully!");
  };

  return (
    <div className="pt-4">
      <h3 className="text-center text-lg font-bold my-1">My Simple Form</h3>
      <div className="flex justify-evenly flex-row gap-4">
        <form
          className="flex justify-center flex-col content-center gap-4"
          action={handleSubmitAction}
        >
          <div>
            <label htmlFor="username">UserName</label>
            <input
              type="text"
              name="username"
              id="username"
              className="p-2 border-1"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="p-2 border-1"
            />
          </div>
          <Submit />
        </form>
      </div>
    </div>
  );
};

const Submit = () => {
  // Here we have use the hook which returns the state and data used for submitting the form.
  const { pending, data } = useFormStatus();
  return (
    <>
      {"Username =>" +
        data?.get("username") +
        ", Password =>" +
        data?.get("password")}
      <button
        type="submit"
        disabled={pending}
        className="p-3 bg-amber-400 rounded-3xl px-6 disabled:bg-amber-100 hover:bg-amber-600 hover:transition-colors"
      >
        Submit
      </button>
    </>
  );
};

export default UseFormStatus;
