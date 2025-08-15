import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./Pages/Home";
import { Navigation } from "./Components/Navigation";
import { Basics } from "./Pages/Basics";
import { useQueryProperties } from "./Pages/useQueryProperties";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" index Component={Home} />
          <Route path="/basics" Component={Basics} />
          <Route path="/useQueryProperties" Component={useQueryProperties} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
