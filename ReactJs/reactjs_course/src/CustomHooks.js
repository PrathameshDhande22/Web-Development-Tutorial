import "./App.css";
import Header from "./Components/Header";
import { useStatement } from "./useStatement";

// tutorial on making the custom hooks
export const CustomHooks = () => {
  // this is the hooks which we have created
  const [data, setData] = useStatement("Prathamesh");
  return (
    <div className="App">
      <Header name={"Custom Hooks Tutorial"} />
      <h2>{data}</h2>
      <button
        onClick={() => {
          setData(data + "Dhande");
          console.log(data);
        }}
      >
        Set Data
      </button>
    </div>
  );
};
