// Author: Kyle Angeles
// File: Pagination.jsx 
// Date-Written: 5/10/26
// Description: This component will handle pagination throughout the website so it's easier for the user to navigate through the pages
// without relying on the navbar all the time

// REGION IMPORT LIBRARY
import { useNavigate, useLocation } from "react-router-dom";
// END REGION IMPORT LIBRARY

// REGION CONST
const pages = [

    {path: "/", label: "Home" },
    {path: "/about", label: "About" },
    {path: "/experiences", label: "Experiences" },
    {path: "/projects", label: "Projects" },
    {path: "/contact", label: "Contact" }
]
// END REGION CONST 

// REGION FUNCTION
function Pagination() {

        const navigate = useNavigate();
        const location = useLocation();
 

        const currentIndex = pages.findIndex(p => p.path === location.pathname);
        const isFirst = currentIndex === 0;
        const isLast = currentIndex === pages.length - 1; 


    return (

        <nav aria-label = "Page Navigation" className="relative z-10 flex items-center justify-between px-8 py-4">
            <button 
            onClick={() => navigate(pages[currentIndex - 1].path)}
            disabled={isFirst}
            className="rounded-md py-1 px-4 text-white bg-white/10 hover:bg-white/20
                   disabled:opacity-30 disabled:cursor-not-allowed duration-150"
            >
                ← Previous
            </button>

            <span className="text-white/60 text-sm">
                {pages[currentIndex]?.label} ({currentIndex + 1} of {pages.length})
            </span>

            <button 
            onClick={() => navigate(pages[currentIndex + 1].path)}
            disabled={isLast}
            className="rounded-md py-1 px-4 text-white bg-white/10 hover:bg-white/20
                   disabled:opacity-30 disabled:cursor-not-allowed duration-150">
              → Next  
            </button>
        </nav>


    )



}

// END REGION FUNCTION

// REGION EXPORT
export default Pagination;

// END REGION EXPORT