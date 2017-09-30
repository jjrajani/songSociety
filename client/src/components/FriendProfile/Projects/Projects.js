import React from 'react';
import ProjectList from './components/ProjectList';

const Projects = () => {
    return (
        <div className="projects">
            <div className="header">
                <h3>Projects</h3>
            </div>
            <ProjectList />
        </div>
    );
};

export default Projects;
