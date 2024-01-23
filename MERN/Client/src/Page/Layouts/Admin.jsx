import { NavLink, Outlet } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { GrServices } from "react-icons/gr";

export const Admin = () => {
  return (
    <div className="admin-panel">
      <nav className="navigation admin-nav">
        <NavLink
          to={"/admin/users"}
          className={({ isActive }) => (isActive ? "active-admin-link" : null)}
        >
          <div>
            <FaUser />
            <span>Users</span>
          </div>
        </NavLink>
        <NavLink
          to={"/admin/contacts"}
          className={({ isActive }) => (isActive ? "active-admin-link" : null)}
        >
          <div>
            <IoMdContact size={23} />
            <span>Contact</span>
          </div>
        </NavLink>
        <NavLink
          to={"/admin/services"}
          className={({ isActive }) => (isActive ? "active-admin-link" : null)}
        >
          <div>
            <GrServices size={23} />
            <span>Services</span>
          </div>
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};
