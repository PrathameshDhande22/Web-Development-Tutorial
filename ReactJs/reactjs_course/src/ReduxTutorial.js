import React from "react";
import "./App.css";
import Header from "./Components/Header";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment,multiply} from "./States/Reducers";
import { setName, setDef } from "./States/Reducers/Name";

export const ReduxTutorial = () => {
  // using the selector that we defined in the store
  const count = useSelector((st) => st.number);
  const dec = useSelector((st) => st.dec);
  const multi = useSelector((st) => st.mul);
  const name=useSelector((state)=>state.name)

  // using the dispatch to update the state
  const dispatch = useDispatch();
  console.log(count);
  return (
    <div className="App">
      <Header name={"Redux Tutorial"} />
      {/* using the function of the reducer */}
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement {dec}</button>
        <button onClick={() => dispatch(multiply(2))}>multiply {multi}</button>
      <h2>You Clicked {count} Times</h2>
      <h1>Name is : {name}</h1>
      <button onClick={()=>dispatch(setName("Prathamesh"))}>Set Name1</button>
      <button onClick={()=>dispatch(setName("Nidhi"))}>Set Name2</button>
      <button onClick={()=>dispatch(setDef())}>Set Defualt</button>
    </div>
  );
};
