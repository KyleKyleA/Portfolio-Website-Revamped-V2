// Author: Kyle Angeles
// File: Pagination.jsx 
// Date-Written: 5/10/26
// Description: This component will handle pagination throughout the website so it's easier for the user to navigate through the pages
// without relying on the navbar all the time
import { useNavigate, useLocation } from "react-router-dom";

const pages = [

    {path: "/", label: "Home" },
    {path: "/about", label: "About" },
    {path: "/experiences", label: "Experiences" },
    {path: "/projects", label: "Projects" },
    {path: "/contact", label: "Contact" }
]
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
            className="rounded-md ml-auto py-1 pl-2 pr-7 !no-underline font-sans text-white-900 hover:text-gray-1000 fill-gray-900 hover:fill-gray-1000 duration-150"
            >
                ← Previous
            </button>

            <span className="text-white/60 text-sm">
                {pages[currentIndex]?.label} ({currentIndex + 1} of {pages.length})
            </span>

            <button 
            onClick={() => navigate(pages[currentIndex + 1].path)}
            disabled={isLast}
            className="rounded-md ml-auto py-1 pl-2 pr-7 !no-underline font-sans text-white-900 hover:text-gray-1000 fill-gray-900 hover:fill-gray-1000 duration-150">
              → Next  
            </button>
        </nav>


    )



}
export default Pagination;