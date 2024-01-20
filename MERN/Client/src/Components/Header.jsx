import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <Link to={"/"} className="logo">
        <span className="logoalpha">
          <span>M</span>
          <span>E</span>
          <span>R</span>
          <span>N</span>
        </span>
        <span>
          <span>Tutorial</span>
        </span>
      </Link>
      <nav className="navigation">
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "activelink" : null)}
        >
          <div>Home</div>
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive }) => (isActive ? "activelink" : null)}
        >
          <div>About</div>
        </NavLink>
        <NavLink
          to={"/services"}
          className={({ isActive }) => (isActive ? "activelink" : null)}
        >
          <div>Services</div>
        </NavLink>
        <NavLink
          to={"/contact"}
          className={({ isActive }) => (isActive ? "activelink" : null)}
        >
          <div>Contact</div>
        </NavLink>
        <NavLink
          to={"/register"}
          className={({ isActive }) => (isActive ? "activelink" : null)}
        >
          <div>Register</div>
        </NavLink>
        <NavLink
          to={"/login"}
          className={({ isActive }) => (isActive ? "activelink" : null)}
        >
          <div>Login</div>
        </NavLink>
      </nav>
    </header>
  );
};
