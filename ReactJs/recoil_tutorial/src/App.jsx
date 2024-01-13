import { lazy } from "react";
import Todo from "./Components/Todo";

const Hello = lazy(() => import("./Components/Hello"));

function App() {
  return (
    <>
      <Hello />
      <Todo />
    </>
  );
}

export default App;
