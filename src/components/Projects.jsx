import React from 'react'

import { PROJECTS } from "../constants";

const Projects = () => {
    return (
        <div className="pb-4">
            <h2 className="my-20 text-center text-4xl">Projects</h2>
            <div>
                {
                    PROJECTS.map((project, index) => (

                        
                        <div key={index} className="mb-8 flex flex-wrap lg:gap-x-4 lg:justify-center">

                            <div className="w-full lg:w-1/4">
                                <img
                                    src={project.image}
                                    width={250}
                                    height={250}
                                    alt={project.title}
                                    className="mb-6 rounded"
                                />
                            </div>

                            <div className="w-full max-w-xl lg:w-3/4">

                                <h3 className="mb-2 font-semibold text-2xl">
                                    {project.title}
                                </h3>

                                <p className="mb-4 text-stone-400">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {
                                        project.technologies.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="rounded bg-stone-900 p-2 text-sm font-medium text-stone-300"
                                            >
                                                {tech}
                                            </span>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Projects;
