import "./App.css"
import { Link, NavLink } from "react-router-dom";


const NavBar = () => {
    return ( 
        <nav className="nav" >
            <Link to="/"><h1 className="brand">Net Ninja</h1></Link>
            <ul>
                
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
            </ul>
        </nav>
     );
}
 
export default NavBar;