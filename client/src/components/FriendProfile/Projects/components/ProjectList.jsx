import React from 'react';
import ProjectItem from './ProjectItem';
import { connect } from 'react-redux';

const ProjectList = ({ profile, projects }) =>
    <ul className="list">
        {projects.map((p, i) => {
            return <ProjectItem key={i} project={p} />;
        })}
    </ul>;

function mapStateToProps({ profile, projects }) {
    return { profile, projects };
}
export default connect(mapStateToProps)(ProjectList);
