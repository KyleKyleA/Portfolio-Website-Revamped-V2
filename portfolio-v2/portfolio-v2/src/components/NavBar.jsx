// Author: Kyle Angeles
// File: NavBar.jsx
// Date-Written: 4/29/26
// This component will handle the navigation throughout the website.

// REGION IMPORT LIBRARY
import {Link, NavLink } from "react-router-dom";
// END REGION IMPORT LIBRARY 

// REGION FUNCTION
function NavBar() {

    const linkClass = ({isActive}) => 
        `nav-link ${isActive? 'active fw-bold text-primary': ''}`

    return (
        <nav className="w-fullbg-gray-900 border-b border-gray-700">
            <div className="w-full px-6 flex items-center h-16 right-100">
                <ul className="flex items-center gap-4 list-none m-0 p-0">
                    <NavLink className={linkClass} to ="/">
                    Home
                    </NavLink>
                    <NavLink className={linkClass} to="/about">
                        About
                    </NavLink>
                     <NavLink className={linkClass} to="/experiences">
                    Experiences
                    </NavLink>
                    <NavLink className={linkClass} to ="/projects">
                        Projects
                    </NavLink>
                    <NavLink className={linkClass} to ="/contact">
                        Contact
                    </NavLink>
                </ul>
            </div>
        </nav>
    )  
}

// END REGION FUNCTION

// REGION EXPORT
export default NavBar;
// END REGION EXPORT