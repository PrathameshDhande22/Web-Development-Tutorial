import { useEffect, useState, createContext } from "react";
// importing the createContext method for using the context
import "./App.css";
import { Component1 } from "./Components/Component1";
import Header from "./Components/Header";

// creating the context
const StoredData = createContext();

// tutorial on context api or passing the data between various components
export const ContextTut = () => {
  // consider we want to send the data to 3rd component
  const [data, setData] = useState({});

  //   passing the default data to the component 3 using context api
  useEffect(() => {
    setData({ name: "Default", age: 10 });
  }, []);

  return (
    <div className="App">
      {/* this below syntax is used to send the data without using the props
        see the component3 in component folder for using the context */}
      <StoredData.Provider value={data}>
        <Header name={"Context Api Tutorial"} />
        <Component1 />
        <button onClick={() => setData({ name: "Prathamesh", age: 12 })}>
          Send Data
        </button>
      </StoredData.Provider>
    </div>
  );
};

// exporting the data
export { StoredData };
