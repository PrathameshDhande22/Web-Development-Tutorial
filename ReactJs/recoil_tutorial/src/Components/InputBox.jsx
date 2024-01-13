import { useRecoilState, useRecoilValue } from "recoil";
import { TextState } from "../Store/todo";
import styles from "../Styles/Input.module.css";
import textLengthState from "../Store/selectors/textState";

const InputBox = () => {
  // Directly reading and writing to the atom state
  const [text, setTextState] = useRecoilState(TextState);

  // reading the value of the selector
  const count = useRecoilValue(textLengthState);

  return (
    <div>
      <span className={styles.help}>
        Directly Using the UseRecoilState for accessing the state directly
      </span>
      <div>
        <label htmlFor="namebox">Enter Your Name : </label>
        <input
          type="text"
          name="name"
          id="namebox"
          value={text}
          onChange={(e) => setTextState(e.target.value)}
        />
        <div></div>
      </div>
      <div>You Entered : {text}</div>
      <div>You Entered Length : {count} </div>
      <div className={styles.horizontal} />
    </div>
  );
};
export default InputBox;
