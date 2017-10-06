import React from 'react';
// Tools
import { connect } from 'react-redux';
// Components
import ProjectList from './components/ProjectList';
import { Link } from 'react-router-dom';

const Projects = ({ profile, projects }) => {
    const { paid, storageSize } = profile;
    const usedStorage = 0.8 * projects.myProjects.length;

    return (
        <div className="projects">
            <div className="header">
                <h3>Projects</h3>
                {paid &&
                    <p>
                        {usedStorage}GB / {storageSize}GB
                    </p>}
                <Link className="btn btn-danger" to="/workspace/new">
                    New Project
                </Link>
            </div>
            <ProjectList />
        </div>
    );
};

function mapStateToProps({ profile, projects }) {
    return { profile: profile.profile, projects };
}

export default connect(mapStateToProps)(Projects);
