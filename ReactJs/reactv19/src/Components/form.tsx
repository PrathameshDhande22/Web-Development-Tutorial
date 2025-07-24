/**
 * Passing the function in the action prop of the <form> element.
 * @returns {Element}
 */
const FormComponent = () => {
  // the Function takes the argument as formdata when set in the action.
  const logname = (formdata: FormData) => {
    alert(formdata.get("FName") + " " + formdata.get("LName"));
  };

  return (
    // Passing the Function in the Action. It won't call any backend.
    <form className="" action={logname}>
      <h3 className="text-center text-xl font-extrabold">My Simple Form</h3>
      <div className="my-4">
        <label htmlFor="name">Enter Your First Name</label>
        <input
          name="FName"
          type="text"
          placeholder="Enter First Name"
          className="p-2 border-1"
          id="name"
        />
      </div>
      <div className="my-4">
        <label htmlFor="name">Enter Your Last Name</label>
        <input
          name="LName"
          type="text"
          placeholder="Enter Last Name"
          className="p-2 border-1"
          id="name"
        />
      </div>
      <button
        className="bg-blue-300 p-3 rounded-4 cursor-pointer rounded-circle "
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};
export default FormComponent;
