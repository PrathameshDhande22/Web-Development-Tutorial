import { NavLink} from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar">
        <nav>
            <ul>
                <li><NavLink className="link" to={"/"}>Home</NavLink></li>
                <li><NavLink className="link" to={"/about"}>About</NavLink></li>
                <li><NavLink className="link" to={"/contact"}>Contact</NavLink></li>
                <li><NavLink className="link" to={"/details"}>Details</NavLink></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
