import React from "react";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  NavLink,
  Route,
  useNavigate,
  Link,
  Outlet,
} from "react-router-dom";
import Header from "./Components/Header";
import { Home, About } from "./RouterTut";

// tutorial on nested routes
// navlink tutorial of react router dom
// tutorial on useNavigate Hook - refers to navigate to the website
export const NavLinkTut = () => {
  return (
    <div className="App">
      <Header name={"NavLink Tutorial"} />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/app" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* here the nesting route is done nested route should be defined inside the route of the parent element just like this */}
          <Route path="/contact" element={<ContactPage />}>
            {/* usage of index route suppose you want to show the default page of the child compoent inside the parent component */}
            <Route index element={<Mail />} />
            {/* by default this route will be rendered when clicked on contact component */}
            <Route path="mail" element={<Mail />} />
            <Route path="insta" element={<Insta />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

// this function applies the sytle to the navlink current clicked or active link
const navStyles = ({ isActive }) => {
  return {
    color: isActive ? "red" : "blue",
  };
};

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <ul>
          <li>
            {/* syntax are same just like link component in react router dom */}
            <NavLink to={"/app"} style={navStyles}>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to={"/about"} style={navStyles}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to={"/contact"} style={navStyles}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const ErrorPage = () => {
  // calling the hook
  const navigate = useNavigate();
  return (
    <div className="App">
      <h2>Error Page</h2>
      <div className="btns">
        {/* if -1 is given then it will call the history stack element that is previous component */}
        <button onClick={() => navigate(-1)}>Click Here to Go Back</button>

        {/* if specified the path with string then it will redirect it to the given url */}
        <button onClick={() => navigate("/app")}>
          Click Here to go to main Menu
        </button>
      </div>
    </div>
  );
};

// creating the links for the nested routes
const ContactPage = () => {
  return (
    <div className="App">
      <h1>Contact Page</h1>
      <h3>
        <Link to={"mail"}>Connect Via Mail</Link>
      </h3>
      <h3>
        <Link to={"insta"}>Connect Via Instagram</Link>
      </h3>
      {/* necessary to give outlet component as it is used to route the child route elements*/}
      <Outlet />
    </div>
  );
};

// nested route pages
const Mail = () => {
  console.log("mail");
  return <div>Mail</div>;
};

const Insta = () => {
  console.log("Instagram");
  return <div>Instagram</div>;
};
