import propTypes from "prop-types";
import Comp from "./Comp";

// props and propTypes Tutorial
const Student = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h3>{props.age}</h3>
      {/* passing the props to another components */}
      <Comp name={props.name} />
    </div>
  );
};

// you can also use the props without using the props but by destructuring the variable
export const Studs = ({ name, age }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h3>{age}</h3>
    </div>
  );
};

// defining the proptypes
Student.propTypes = {
  name: propTypes.string,
  age: propTypes.number,
};

// defining the defualt props
// this will be invoked whenever the Student component is called without passing props
Student.defaultProps = {
  name: "name",
  age: 0,
};

// similarly defining props for studs
Studs.propTypes = {
  name: propTypes.string,
  age: propTypes.number,
};

export default Student;
