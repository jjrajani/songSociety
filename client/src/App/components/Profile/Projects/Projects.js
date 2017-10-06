import React from 'react';
// Tools
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// Components
import ProjectList from './components/ProjectList';
import { Link } from 'react-router-dom';
import StripePay from '../../StripePay/StripePay';

const Projects = ({ profile, projects, history }) => {
    const { paid, storageSize } = profile;
    const usedStorage = 0.8 * projects.myProjects.length;
    const hasStorage = storageSize - usedStorage > 0.8;
    const isArtistRoute = history.location.pathname.split('/')[1] === 'artist';
    return (
        <div className="projects">
            <div className="header">
                <h3>Projects</h3>
                {paid === true &&
                    !isArtistRoute &&
                    <p>
                        {usedStorage}GB / {storageSize}GB
                    </p>}
                {storageSize > 0 &&
                    hasStorage &&
                    !isArtistRoute &&
                    <Link className="btn btn-danger" to="/workspace/new">
                        New Project
                    </Link>}
                {paid === true &&
                    !isArtistRoute &&
                    !hasStorage &&
                    <p>You need more storage</p>}
                {!paid &&
                    !isArtistRoute &&
                    <p>Upgrade your account to make new Projects</p>}
            </div>
            <ProjectList />
        </div>
    );
};

function mapStateToProps({ profile, projects }) {
    return { profile: profile.profile, projects };
}

export default connect(mapStateToProps)(withRouter(Projects));
