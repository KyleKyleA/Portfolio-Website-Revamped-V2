// Author: Kyle Angeles
// File: Home.jsx
// Date-Written: 4/29/26
// Description: This section of the website will house my personal projects and class projects.

// REGION IMPORTED COMPONENTS
import FlipCardComponent from "@/components/FlipCard";
// END REGION COMPONENTS


// REGION FUNCTION
function Projects() {


    return (
        
        
        <>
        <h2 className="font-mono mb-4 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-6xl text-center">List of Class and Personal Projects
        </h2>
            

        
                <FlipCardComponent />
          
            
            </>
    )
}
// END REGION FUNCTION

// REGION EXPORT

export default Projects;

// END REGION EXPORT