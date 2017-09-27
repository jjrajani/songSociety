import React from 'react';
import ProjectList from './components/ProjectList';

const Projects = ({ profile }) => {
    return (
        <div className="projects">
            <div className="header">
                <h3>Projects</h3>
                <p className="btn btn-info">New Project</p>
            </div>
            <ProjectList />
        </div>
    );
};

export default Projects;
