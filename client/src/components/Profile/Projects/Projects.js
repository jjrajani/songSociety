import React from 'react';
import ProjectList from './components/ProjectList';

const Projects = ({ profile }) => {
    const projects = profile.projects;

    return (
        <div className="projects">
            <div className="header">
                <h3>Projects</h3>
                <p className="btn btn-info">New Project</p>
            </div>
            <ProjectList projects={projects} />
        </div>
    );
};

export default Projects;
