import React from 'react';
import ProjectList from './components/ProjectList';
import { Link } from 'react-router-dom';

const Projects = () => {
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
