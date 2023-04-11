import { useContext } from "react";
// importing the context in which we have setted the data
import { StoredData } from "../ContextTut";

// we will be getting the data from main component that is contexttut file
export const Component3 = () => {
  // getting the data
  const getData = useContext(StoredData);

  return (
    <div>
      <h3>Component 3 data</h3>
      <div className="data">
        {/* using the data in the jsx */}
        <h3>{getData.name}</h3>
        <h3>{getData.age}</h3>
      </div>
    </div>
  );
};
