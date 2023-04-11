import React from "react";
import Header from "./Components/Header";
import "./App.css"

// tutorial on class based component but it is recommended to use the function based components in react js
// Syntax for class based Component
export default class ClassComponents extends React.Component {
  // defining the state here the state is the reserved keyword and it contains the initial value
  state = {
    name: "Prathamesh",
    counter: 0,
    setted: true,
  };

  // do not declare the function with const
  //   this function sets the state i think its very complicated to work with class based components.
  inc = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  // this method should be defined in every class based components it comes predefined with React.Component Class
  render() {
    // here the jsx code should be written
    return (
      <div className="App">
        <Header name={"Classed Based Components Tutorial"} />
        <h2>Class based Components Tutorial</h2>
        {/* passing the props to other class component */}
        <DataPasser name={"Prathamesh"} />
        {/* calls the function that sets the state  */}
        <button onClick={this.inc}>Count {this.state.counter}</button>
        {this.state.setted ? <SampleComp /> : null}
        <button onClick={() => this.setState({ setted: false })}>
          Remove Component
        </button>
      </div>
    );
  }
}

// declaring another class based component
class DataPasser extends React.Component {
  // defining the state
  state = {
    count: 0,
  };

  // this just like the useEffect with blank dependency which will run one time only
  componentDidMount() {
    console.log("Component Rendered successfully");
  }

  // whenever the component is updated the re-renders occurs it is just like the useEffect without dependency this accept the two ar
  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, prevState);
    console.log("Rendering ", prevState.count);
  }

  // rendering the jsx
  render() {
    return (
      <>
        <h2>Data Passer Component</h2>
        {/* acessing the props from the parent component */}
        <h1>{this.props.name}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click On Me
        </button>
        <h3>Rendering {this.state.count}</h3>
      </>
    );
  }
}
export { DataPasser };

export class SampleComp extends React.Component {
  // this method invokes when the component is going to be removed
  componentWillUnmount() {
    alert("The Component has been removed");
  }

  render() {
    return <h1>Sample Component</h1>;
  }
}
