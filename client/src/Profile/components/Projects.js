import React from 'react';

const Projects = ({ profile }) => {
    const projects = profile.projects;
    console.log('PROJECTS', projects);
    return (
        <div className="projects">
            <h3>Projects</h3>
            <ul className="list">
                {projects &&
                    Object.keys(projects).map(p => {
                        const prj = projects[p];
                        return (
                            <li key={p} className="list_item">
                                <p>
                                    Title: {prj.name}
                                </p>
                                <p>
                                    Renditions: {prj.renditions}
                                </p>
                                <p>
                                    Colaborators: {prj.colaborators}
                                </p>
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
};

export default Projects;
