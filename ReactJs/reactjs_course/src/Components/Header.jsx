import "./header.css";
// importing the css file
import propTypes from "prop-types"

const Header = (props) => {
  return (
    // giving the className to the element
    <div className="header">
      {/* giving the inline css you can apply multiple inline css using , (comma)*/}
      <h1 style={{ color: "red", fontSize: "25px" }}>{props.name}</h1>
    </div>
  );
};

Header.propTypes={
  name:propTypes.string
}

Header.defaultProps={
  name:"Header"
}

export default Header;
// exporting the module that can be used directly without destructing the object