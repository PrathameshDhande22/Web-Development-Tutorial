import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Header from "./Components/Header";
import "./App.css";

// React Router Tutorial
export const RouterTut = () => {
  return (
    <div className="App">
      <Header key={3} name={"Router Tutorial"} />
      {/* syntax for creating the router */}

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          {/* calls the contact page */}
          <Route path="/contact" element={<Contact />} />

          {/* shows the error 404 page use the * path as pattern */}
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

// these are the pages
export const Home = () => {
  return <h1>HomePage</h1>;
};

export const About = () => {
  return <h1>AboutPage</h1>;
};

export const Contact = () => {
  return <h1>ContactPage</h1>;
};

export const Error = () => {
  return <h1>ErrorPage 404 Not Found</h1>;
};

export const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <ul>
          {/* instead of using the a href use the link component of the react router dom to switch the routes */}
          <li>
            <Link to={"/"}>HomePage</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
