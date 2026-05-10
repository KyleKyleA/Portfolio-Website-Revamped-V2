// Author: Kyle Angeles
// File: FlipCard.jsx
// Date-Written: 5/8/26
// Description: This component will be used to create flip card animations for the projects section of the website,
// this will be used to display the project title and description on the front of the card and the project details on the back of the card, this will be a reusable component that can be used for all projects in the projects section of the website.
// since this is a way of adding more projects to the projects.
import { projectLoader } from "../utils/projectLoader";
import { useState, useEffect } from "react";

import { WrenchScrewdriverIcon } from "@heroicons/react/24/outline";
const FlipCardComponent = () => {

    const [projects, setProjects]  = useState([]);
    useEffect(() => {
        const loadedProjects = async () => {
            const loadedProjects = await projectLoader();
            setProjects(loadedProjects);
        }

        loadedProjects();
    }, []);

    return (
        <section className ="py-16 mx-auto sm:py-20">
            <div className ="mx-auto flex justify-center object-center px-4 py-16 sm:py-24 lg:max-w-7xl">
                <div className="flex justify-center object-center flex-col gap-12 sm:gap-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <div key={project.id} className="group h-96 w-96 [perspective:1000px]">
                             <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                <div className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden] ">
                                 {project.image && (
                                <img
                                className="object-cover object-center h-3/4 w-full rounded-t-xl cursor-pointer"
                                src={project.image}
                                
                         
                                
                                
                            />
                            )}
                            <p className="md:my-6 text-md">{project.title}</p>
                            </div>
                             <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                            <div className="flex min-h-full flex-col items-center justify-center">
                            <p className="font-mono text-lg text-pretty text-center mb-4">
                                {project.Description}
                            </p>
                            
                            <a href={project["GitHub link"]} className="inline-flex">
                                <button className ="font-sans text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-2.5 focus:outline-none">
                                    View on GitHub
                                </button>
                            </a>

                                    </div>
                                    </div>
                            </div>
                        </div>
                        ))}
                    </div>
                    </div>
                    </div>
        </section>
    );
};

export default FlipCardComponent;