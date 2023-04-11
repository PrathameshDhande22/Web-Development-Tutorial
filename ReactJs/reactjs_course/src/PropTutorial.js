import { Studs } from "./Components/Student";
import Student from "./Components/Student";

// passing the data between the components using props

export const PropTutorial = () => {
  return (
    <div style={{ backgroundColor: "black", color: "white" }}>
      {/* passing the props */}
      <Student name="Prathamesh" age={20} />
      <Student name="Sushant" age={18} />
      <Student name={"hello"} age={3} />
      {/* this will invoke default props */}
      <Student />
      
      <Studs name={"new name"} age={4} />
      <Student name="Nidhi" age={13} />
      <Studs name="Vidhi" age={40} />
    </div>
  );
};
