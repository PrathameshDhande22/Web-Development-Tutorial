import { useSetRecoilState } from "recoil";
import styles from "../Styles/todocreater.module.css";
import { TodoState } from "../Store/todo";
import { useState } from "react";

const TodoCreater = () => {
  // use to set the state of the atom.
  const setTodo = useSetRecoilState(TodoState);

  const [value, setValue] = useState("");

  const handleClick = () => {
    if (value.length !== 0 && value !== " ") {
      setTodo((oldTodos) => {
        return [
          ...oldTodos,
          {
            id: oldTodos.length + 1,
            name: value,
            isComplete: false,
          },
        ];
      });
    }
    setValue("");
  };

  return (
    <div className={styles.todocontainer}>
      <div className={styles.inputs}>
        <label htmlFor="todoinput">Enter the Todo Title : </label>
        <input
          type="text"
          name="todoname"
          id="todoinput"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <button
        type="button"
        className={styles.addbtn}
        onClick={handleClick}
        id="buttonadd"
      >
        Add
      </button>
    </div>
  );
};
export default TodoCreater;
