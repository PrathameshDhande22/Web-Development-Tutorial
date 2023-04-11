import Header from "./Components/Header";
import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";
import { useReducer } from "react";
// importing the useState Hook

// Use of useState hooks tutorial
const Hooks1 = () => {
  // setting the count of the button using useState
  const [num, setNum] = useState(1);
  // element 0 - variable constant and element 1 - function

  // using the string with useState
  const [text, setText] = useState("Hello");

  function changeText(txt) {
    setText(txt);
  }

  function incre() {
    // setting the value of the element 0 of the usestate by using the element 1 function
    setNum(num + 1);
  }

  function decre() {
    setNum(num - 1);
  }

  return (
    <div className="App">
      <Header />
      <h1>{num}</h1>
      <div className="btns">
        {/* function should be passed without the parenthesis */}
        <button onClick={incre}>Increment</button>
        <button onClick={decre}>Decrement</button>
      </div>

      {/* function by passing the arguments */}
      <input
        type="text"
        name="color"
        id="inputs"
        onChange={() => {
          changeText(document.getElementById("inputs").value);
        }}
      />
      <p>{text}</p>
    </div>
  );
};

// tutorial on useEffect hooks
const Hooks2 = () => {
  const [state1, setState1] = useState(0);
  const [state2, setState2] = useState(0);

  // useEffect hook called with no dependency hence it will call every time when the state or any thing is rendered
  useEffect(() => {
    console.log("rendering");
  });

  // useEffect hook with dependency
  // dependency shoud be given in the list or array it can be anything
  // this will be called when the state1 is updated
  useEffect(() => {
    alert("Clicked on State 1");
  }, [state1]);

  // if useEffect called with blank dependency then it will be invoked one time only.
  useEffect(() => {
    console.log("Called useEffect");
  }, []);

  return (
    <div className="app">
      <Header name={"useEffect Hook"} key={2} />
      <div className="btns">
        <button onClick={() => setState1(state1 + 1)}>State {state1}</button>
        <button onClick={() => setState2(state2 + 1)}>State {state2}</button>
      </div>
    </div>
  );
};

// tutorial on useRef hook
// it used for interacting with dom element
export function Hooks3() {
  const domUse = useRef("");
  const [isClicked, setisClicked] = useState(false);

  const clickHandler = () => {
    // accessing the dom element and methods and property
    domUse.current.style.backgroundcolor = "grey";
    isClicked === true ? setisClicked(false) : setisClicked(true);
    isClicked === true
      ? (domUse.current.style.border = "3px solid red")
      : (domUse.current.style.border = "none");
  };

  return (
    <div className="App">
      <Header name={"useRef Hooks Tutorial"} />
      {/* passing the ref to useRef as the dom manipulation
       */}
      <input type="text" ref={domUse} />
      <button onClick={clickHandler}>Click Here</button>
    </div>
  );
}

// tutorial on useReducer hooks
// it is used for perfoming multiple work in a single state rather than creating multiple useState hooks
// the reducer which requires two arguments state and action defines which action to be performed
function reducer(state, action) {
  console.log(action);
  switch (action.perform) {
    case "+":
      return state + 2;
    case "-":
      return state - 2;
    case "*":
      return state * 2;
    default:
      return state;
  }
}
export const Hooks4 = () => {
  // using the useReducer hook
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <div className="App">
      <Header name={"useReducer Hook Tutorial"} />
      <h2>{state}</h2>
      <div className="btns">
        {/* using the dispatch method to define which type of action should be perform by passing the argument in the object */}
        <button onClick={() => dispatch({ perform: "+" })}>Increment</button>
        <button onClick={() => dispatch({ perform: "-" })}>Decrement</button>
        <button onClick={() => dispatch({ perform: "*" })}>Multiply</button>
      </div>
    </div>
  );
};
export { Hooks1, Hooks2 };

// tutorial on useMemo hook which use to store the calculation of any time consuming function in the memory which can be intiated when it s present in the dependency
export const Hooks5 = () => {
  let [counter, setCounter] = useState(0);
  let [text, setText] = useState("");

  function calculation(counter) {
    let no = 0;
    console.log("rendering");
    for (let a = counter; a < 1000000; a++) {
      no++;
    }
    return no;
  }

  // usage of useMemo will invoke when the state is changed given in the dependency list and stores it in the memory.
  useMemo(() => {
    console.log(calculation(counter));
  }, [counter]);

  // this directly running function will cause the components to get the slow to overcome this problem we use useMemo hook to store and run on the given dependeny only
  // calculation(counter)
  return (
    <div className="App">
      <Header name={"useMemo Hook Tutorial"} />
      <button onClick={() => setCounter(counter + 1)}>Click Here</button>
      <h3>Amount after Clicking {counter}</h3>
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => setText(e.target.value)}
      />
      <h2>You Enterd : {text}</h2>
    </div>
  );
};
