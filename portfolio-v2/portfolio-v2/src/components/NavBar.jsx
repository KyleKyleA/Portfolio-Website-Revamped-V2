// Author: Kyle Angeles
// File: NavBar.jsx
// Date-Written: 4/29/26
// This component will handle the navigation throughout the website.

import {Link, NavLink } from "react-router-dom";

function NavBar() {

    const linkClass = ({isActive}) => 
        `nav-link ${isActive? 'active fw-bold text-primary': ''}`

    return (
        <nav className="bg-gray-900 border-b border-gray-700">
            <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-16">
                <ul className="flex items-center gap-1 list-none m-0 p-0">
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
                    <NavLink className={linkClass} to ="/contactForm">
                        Contact
                    </NavLink>
                </ul>
            </div>
        </nav>
    )  
}
export default NavBar;