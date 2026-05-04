// Author: Kyle Angeles
// File: Home.jsx
// Date-Written: 4/29/26
// Description: This section of the website will house my personal projects and class projects.

function Projects() {


    return (

        
        <><h2 className="mb-4 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-6xl">List of Class and Personal Projects
        </h2>
            {/* Search and filter */}
            <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
                <button type="button" className="text-heading border border-buffer hover:border-default bg-neutral-primary focus:ring-4 focus:outline-none focus:ring-neutral-tertiary rounded-base text-base font-medium px-5 py-2.5 text-center me-3 mb-3">All Projects</button>
                <button type="button" className="text-heading border border-buffer hover:border-default bg-neutral-primary focus:ring-4 focus:outline-none focus:ring-neutral-tertiary rounded-base text-base font-medium px-5 py-2.5 text-center me-3 mb-3">Search</button>
                <button type="button" className="text-heading border border-buffer hover:border-default bg-neutral-primary focus:ring-4 focus:outline-none focus:ring-neutral-tertiary rounded-base text-base font-medium px-5 py-2.5 text-center me-3 mb-3">Sort By</button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                    <h2 className=""></h2>
                    <p className=""></p>
                </div>
                <div>
                    <h2 className=""></h2>
                    <p className=""></p>
                </div>
                <div>
                    <h2 className=""></h2>
                    <p className=""></p>
                </div>
                <div>
                    <h2 className=""></h2>
                    <p className=""></p>
                </div>
            </div>
            
            </>
    )
}

export default Projects;