// Author: Kyle Angeles
// File: Home.jsx
// Date-Written: 4/29/26
// Description: This section of the website will house the navbar and quick introduction.
import { useNavigate } from "react-router-dom";

function Home () {

    const navigate = useNavigate();
 
    return (

        <div className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
           
           <span className="inline-block text-xs font-medium px-3 py-1 rounded-full border border-gray-600 text-gray-400 mb-6 text-center">
                Open to startup companies, entry level jobs, and government level jobs
           </span>

           <h1 className="text-5xl font-medium text-white mb-4 leading-tight text-center">
                Kyle Angeles
           </h1>

           <p className="font-sans text-center text-white ">
                Incoming 3rd year Computer Programming and Analysis at Durham College
           </p>

           <p className="font-sans text-center text-white">
               building class and personal projects and gaining real world experience across different frameworks and industries.
     
          </p> 

          

          < div className="mx-auto mt-8 max-w-sm p-6 border border-white/20 rounded-lg bg-white/5 backdrop-blur-sm">
          <p className="text-body mb-6 sm text-center">
               explore portfolio 
          </p>
          <p className="text-body mb-6 text-sm text-center">
               by pressing next or clicking on navigation bar!!
          </p>

          </div>
        </div>
        

    )

    


}

export default Home;
