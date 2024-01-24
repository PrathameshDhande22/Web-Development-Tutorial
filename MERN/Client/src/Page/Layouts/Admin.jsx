import { NavLink, Outlet } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { GrServices } from "react-icons/gr";
import useAuth from "../../Hooks/useAuth";
import { Navigate } from "react-router-dom";

export const Admin = () => {
  const { loading, userdata } = useAuth();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!userdata.isAdmin) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="admin-panel">
      <div className="main-header admin-header">ADMIN PANEL</div>
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
