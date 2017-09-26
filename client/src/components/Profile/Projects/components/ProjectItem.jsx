import React from 'react';
import { Glyphicon } from 'react-bootstrap';

const ProjectItem = ({ project }) =>
    <li className="list_item">
        <h5 className="title">
            <Glyphicon glyph="music" />
            {project.name}
        </h5>
        <p>
            <span className="label">Renditions:</span>
            {project.renditions}
            <span className="label">Colaborators:</span>
            {project.colaborators}
        </p>
    </li>;

export default ProjectItem;
