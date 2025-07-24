import { useActionState, useState } from "react";

interface UserLoginForm {
  username: string;
  password: string;
}

const initialstate: UserLoginForm = {
  password: "123",
  username: "Enter username",
};

/**
 * useActionState hook is designed to manage the state of an asynchronous "action" (typically a form submission or a server action) and provide feedback on its status.
 * It works seamlessly with "action" prop inside the form component.
 *
 * @returns {Element}
 */
const UseActionStateHook = () => {
  // State for storing the previous state
  const [previoususerformstate, setFormState] =
    useState<UserLoginForm>(initialstate);

  // Function for logging the user -> used in useActionState as action.
  function loginuser(state: UserLoginForm, formdata: FormData): UserLoginForm {
    setFormState(state);
    return {
      username: String(formdata.get("username")?.toString()),
      password: String(formdata.get("password")?.toString()),
    };
  }

  // creating the useactionstate hook
  const [state, formaction, ispending] = useActionState<
    UserLoginForm,
    FormData
  >(loginuser, initialstate);

  // Created the simple form with username and password field
  return (
    <div className="pt-4">
      <h3 className="text-center text-lg font-bold my-1">
        My Another Simple Form With Hook
      </h3>
      <div className="flex justify-evenly flex-row gap-4">
        <form
          action={formaction}
          className="flex justify-center flex-col content-center gap-4"
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
          <button
            type="submit"
            className="p-3 bg-blue-400 rounded-2xl"
            disabled={ispending}
          >
            Login
          </button>
        </form>
        <div>
          Initial State
          <br />
          <span>Username: {state.username}</span>
          <br />
          <span>Password: {state.password}</span>
          <br />
          <br />
          Previous State
          <br />
          <span>Username: {previoususerformstate.username}</span>
          <br />
          <span>Password: {previoususerformstate.password}</span>
          <br />
        </div>
      </div>
    </div>
  );
};
export default UseActionStateHook;
