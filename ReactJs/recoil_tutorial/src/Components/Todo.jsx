import { useRecoilValue } from "recoil";
import { TodoState } from "../Store/todo";
import styles from "../Styles/todo.module.css";
import TodoCreater from "./TodoCreater";
import textchanger from "../Store/selectors/todoFilterState";
import { useState } from "react";

const Todo = () => {
  const todolist = useRecoilValue(TodoState);
  console.log(todolist);
  const [value, setValue] = useState(0);

  // passing the parameter to the selector
  const todo = useRecoilValue(textchanger(value));

  return (
    <div className={styles.container}>
      <TodoCreater />
      <div className={styles.todotable}>
        <div>Todos</div>
        <div className={styles.todoheader}>
          <span>ID</span>
          <span>Name</span>
          <span>Completed</span>
        </div>
        {todolist.length !== 0
          ? todolist.map((value, index) => {
              return (
                <div key={index} className={styles.todoheader}>
                  <span>{value.id}</span>
                  <span>{value.name}</span>
                  <button type="button">
                    {value.isComplete ? "❌" : "✅"}
                  </button>
                </div>
              );
            })
          : null}
      </div>
      <div>
        <label htmlFor="access">Access the Todo : value</label>
        <input
          type="text"
          id="access"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        />
        {todo !== 0 ? `You Tried to acess ${todo?.name}` : null}
      </div>
    </div>
  );
};
export default Todo;
