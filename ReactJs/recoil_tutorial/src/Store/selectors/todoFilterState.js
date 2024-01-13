import { selectorFamily } from "recoil";
import { TodoState } from "../todo";

// Passing the parameters to the Selector of the state
const textchanger = selectorFamily({
  key: "textChangerState",
  get:
    (value) =>
    ({ get }) => {
      const todolist = get(TodoState);
      if (todolist.length !== 0) {
        return todolist[value];
      }
      return 0;
    },
});

export default textchanger;
