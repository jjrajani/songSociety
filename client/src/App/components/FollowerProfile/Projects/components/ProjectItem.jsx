import React from 'react';
// Components
import { Link } from 'react-router-dom';
import { Glyphicon } from 'react-bootstrap';
// add on click to take you to project workspace

const ProjectItem = ({ project }) => {
    return (
        <Link to={`/workspace/${project._id}`}>
            <li className="list_item">
                <h5 className="title">
                    <Glyphicon glyph="music" />
                    {project.name}
                </h5>
                <p>
                    <span className="label">Renditions:</span>
                    {project.renditions}
                    <span className="label">Collaborators:</span>
                    {project.collaborators.length}
                </p>
            </li>
        </Link>
    );
};

export default ProjectItem;
