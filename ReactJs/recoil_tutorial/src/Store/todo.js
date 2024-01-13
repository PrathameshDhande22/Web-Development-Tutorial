import { atom } from "recoil";

const TodoState = atom({
  key: "todos",
  default: [],
});

// # Defining the state over here using atom function of the recoil
const TextState = atom({
  key: "textState",
  default: "",
});

export { TodoState, TextState };
