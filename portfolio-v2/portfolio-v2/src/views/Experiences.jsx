// Author: Kyle Angeles
// File: Experience.jsx 
// Date-Written: 4/29/26
// This section of the website will house my work experience that i currently have so far.

// REGION FUNCTION
function Experiences() {


    return (
        <>
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-6xl text-center pt-24">Experiences</h2>

            <ol className="items-center justify-center sm:flex">
                <li className="relative mb-6 sm:mb-0">
                     <div className="flex items-center justify-center">
                <div className="z-10 flex items-center justify-center w-6 h-6 bg-brand-softer rounded-full ring-0 ring-buffer sm:ring-8 shrink-0">
                 <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"/>
              </svg>
                </div>
                <div className="hidden sm:flex w-full bg-neutral-quaternary h-px"></div>
                </div>
                <div className="mt-3 sm:pe-8 text-center">
                <time className="bg-neutral-secondary-medium border border-default-medium text-heading text-xs font-medium px-1.5 py-0.5 rounded-centered justify-content">Current March 21st 2026</time>
                <h3 className="text-lg font-semibold text-heading my-2  ">PaceField | Software Developer </h3>
                </div>
                
                </li>
            </ol>

           
           
        

        
        </>
    )
}
// END REGION FUNCTION

// REGION EXPORT
export default Experiences;
// END REGION EXPORT