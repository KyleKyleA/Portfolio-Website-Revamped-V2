// Author: Kyle Angeles
// File: NavBar.jsx
// Date-Written: 4/29/26
// This component will handle the navigation throughout the website.

// REGION IMPORT LIBRARY

import {Link} from "react-router-dom";

// END REGION IMPORT LIBRARY 

// REGION FUNCTION

const listItems = [
    {label: 'Home', path: '/'},
    {label: 'About', path: '/about'},
    {label: 'Experience', path: '/experiences'},
    {label: 'Projects', path: '/projects'},
]

const NavBar = () => {


    return (

        <div className = 'fixed bg-black flex justify-between items-center gap-16 py-3 px-10 left-1/2 translate-x-[-50%] top-[20px] rounded-full backdrop-blur-md bg-opacity-60 text-white shadow-lg z-10'>

            <ul className="flex gap-8 text-xl">
                {listItems.map((item) => (
                    <li className="relative group cursor-pointer" key={item.label}>
                    <Link to={item.path}>
                        {item.label}
                    </Link>
                        <span className="absolute left-0 bottom-[-5px] w-0 h-1 rounded-xl bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-300 group-hover:w-full"></span>
                    </li>
                ))}
            </ul>

            <Link to="/contact">
            <button className="bg-gradient-to-r from-blue-500 to green-400 py-1 px-6 rounded-3xl shadow-2xl text-white text-lg font-semibold hover:from-blue-600 hover:to-green-500 hover:shadow-green shadow-blue-500">
                Contact
            </button>
            </Link>
        </div>
    )
}

// END REGION FUNCTION

// REGION EXPORT
export default NavBar;
// END REGION EXPORT