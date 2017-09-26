import React from 'react';
import ProjectItem from './ProjectItem';

const ProjectList = ({ projects }) =>
    <ul className="list">
        {projects &&
            Object.keys(projects).map(p => {
                const prj = projects[p];
                return <ProjectItem key={p} project={prj} />;
            })}
    </ul>;
export default ProjectList;
