// Author: Kyle Angeles
// File: Home.jsx
// Date-Written: 4/29/26
// Description: This section of the website will house the navbar and quick introduction.
import { useNavigate } from "react-router-dom";

function Home () {

    const navigate = useNavigate();

    return (

        <div className="max-w-3xl mx-auto px-6 pt-24 pb-16">
           
           <span className="inline-block text-xs font-medium px-3 py-1 rounded-full border border-gray-600 text-gray-400 mb-6">
                Open to startup companies, entry level jobs, and government jobs
           </span>

           <h1 className="text-5xl font-medium text-white mb-4 leading-tight">
                Kyle Angeles
           </h1>

           <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-xl">
                Incoming 3rd year Computer Programming and Analysis at Durham College
                building class and personal projects and gaining real world experience across
                different frameworks and industries

           </p>
        </div>
    )

    // Thinking of adding like a scroll view or pagination to the next page of the web page.
    // TODO: Pagniation Implement in the components file


}

export default Home;
