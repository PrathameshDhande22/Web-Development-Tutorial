import "./App.css";
// importing the css
import Header from "./Components/Header";
// importing the module form header using default keyword
import { Footer, Body } from "./Components/Footer";
// importing the module using destructing objects from footer

//using the html in jsx
function App() {
  // using the variable in jsx
  let name = "Prathamesh";
  return (
    // giving the id to the element
    <div className="App" id="applica">
      {/* including the functions as Components */}
      <Header />

      {/* displaying the variable of js in jsx using {} syntax */}
      <span>{name}</span>
      <Body />

      {/* using the simple tags or elements in the jsx this iss the way we define the comments in jsx */}
      <h1>Prathamesh</h1>

      <Footer />
    </div>
  );
}

export default App;
