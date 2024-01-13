import { selector } from "recoil";
import { TextState } from "../todo";

// # Defining the selector from the value of text state state created in Store.js
const textLengthState = selector({
  key: "textlength",
  get: ({ get }) => {
    const text = get(TextState);
    return text.length;
  },
});

export default textLengthState;
