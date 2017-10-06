import React from 'react';
// Tools
import { connect } from 'react-redux';
// Components
import ProjectList from './components/ProjectList';
import { Link } from 'react-router-dom';
import StripePay from '../../StripePay/StripePay';

const Projects = ({ profile, projects }) => {
    const { paid, storageSize } = profile;
    const usedStorage = 0.8 * projects.myProjects.length;
    const hasStorage = storageSize - usedStorage > 0.8;
    return (
        <div className="projects">
            <div className="header">
                <h3>Projects</h3>
                {paid === true &&
                    <p>
                        {usedStorage}GB / {storageSize}GB
                    </p>}
                {storageSize > 0 &&
                    hasStorage &&
                    <Link className="btn btn-danger" to="/workspace/new">
                        New Project
                    </Link>}
                {paid === true && !hasStorage && <p>You need more storage</p>}
                {!paid && <p>Upgrade your account to make new Projects</p>}
            </div>
            <ProjectList />
        </div>
    );
};

function mapStateToProps({ profile, projects }) {
    return { profile: profile.profile, projects };
}

export default connect(mapStateToProps)(Projects);
