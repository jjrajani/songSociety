import React from 'react';
// Tools
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// Components
import GetMoreStorage from '../../StripePay/GetMoreStorage';
import ProjectList from './components/ProjectList';
import { Link } from 'react-router-dom';

const Projects = ({ profile, projects, history }) => {
    const { paid, storageSize, isPrivate } = profile;
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
                {!isArtistRoute &&
                    <div className="stripe_pay">
                        <GetMoreStorage />
                    </div>}
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
