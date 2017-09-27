import React from 'react';
import ProjectList from './components/ProjectList';
import { Link } from 'react-router-dom';

const Projects = ({ profile }) => {
    return (
        <div className="projects">
            <div className="header">
                <h3>Projects</h3>
                <Link className="btn btn-danger" to="/workspace/new">
                    New Project
                </Link>
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
