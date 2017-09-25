import React from 'react';
import { Glyphicon } from 'react-bootstrap';

const Projects = ({ profile }) => {
    const projects = profile.projects;

    return (
        <div className="projects">
            <h3>Projects</h3>
            <ul className="list">
                {projects &&
                    Object.keys(projects).map(p => {
                        const prj = projects[p];
                        return (
                            <li key={p} className="list_item">
                                <h5 className="title">
                                    <Glyphicon glyph="music" />
                                    {prj.name}
                                </h5>
                                <p>
                                    <span className="label">Renditions:</span>
                                    {prj.renditions}
                                    <span className="label">Colaborators:</span>
                                    {prj.colaborators}
                                </p>
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
};

export default Projects;
