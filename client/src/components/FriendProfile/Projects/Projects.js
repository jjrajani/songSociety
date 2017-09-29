import React from 'react';
import ProjectList from './components/ProjectList';
import { Link } from 'react-router-dom';

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
// Light Blue Button for if Light Theme
// <Link className="btn btn-info" to="/workspace/new">
//     New Project
// </Link>
