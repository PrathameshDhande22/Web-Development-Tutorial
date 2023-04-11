// this is the custom hook tutorial which we have used in the CustomHooks.js file
// it works like the useState but it cannot set the value of the state.
export const useStatement = (intialvalue) => {
  function setState(value) {
    intialvalue = value;
    return intialvalue;
  }
  return [intialvalue, setState];
};
