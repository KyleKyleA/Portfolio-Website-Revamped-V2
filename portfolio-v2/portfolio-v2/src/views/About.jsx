// Author: Kyle Angeles
// File: About.jsx
// Date-Written: 4/29/26
// Description: This file will render in the about me section for the users to view 
// about myself and what i do.


function About() {


    return(


        <div className="max-w-3xl mx-auto px-6 pt-16 pb-16">
        
        
        {/* Heading */}
        <h2 className="text-4xl font-medium text-white mb-4">About me</h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-xl">
            Hi, I'm a computer Programming and Analysis student at Durham College
            passionate about building projects and functional software across the full stack.
        </p>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            
                <h5 class="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">FrontEnd </h5>
                <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-xl">
                    Built responsive UI's using React, TailWindCSS, and Javascript - including
                    small project to medium scaled projects, and component-based layouts.
                </p>
        

            <a href="#" class="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs hover:bg-neutral-secondary-medium">
                <h5 class="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">Backend </h5>
                <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-xl">
                   Written backend logic in Java, Python, C#, PHP, and Javascript
                   building short api's, handling business logic, and working with rest APIs.
                </p>
            </a>


             <a href="#" class="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs hover:bg-neutral-secondary-medium">
                <h5 class="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">Database </h5>
                <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-xl">
                    
                </p>
            </a>
            </div>
        </div>
);
}


export default About;