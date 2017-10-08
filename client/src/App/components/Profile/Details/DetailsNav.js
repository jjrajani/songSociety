import React from 'react';
// Tools
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import { withRouter } from 'react-router-dom';

const DetailsNav = ({
    togglePageView,
    activeTab,
    projects,
    followers,
    history
}) => {
    const isArtistRoute = history.location.pathname.split('/')[1] === 'artist';
    return (
        <div className="details_nav">
            <div className="links">
                <p
                    className={activeTab === 'projects' ? 'active' : 'inactive'}
                    onClick={() => {
                        togglePageView('projects');
                    }}
                >
                    My Projects{' '}
                    <span className="count">{projects.myProjects.length}</span>
                </p>
                <p
                    className={activeTab === 'collabs' ? 'active' : 'inactive'}
                    onClick={() => {
                        togglePageView('collabs');
                    }}
                >
                    Collaborations{' '}
                    <span className="count">{projects.collabs.length}</span>
                </p>
                <p
                    className={
                        activeTab === 'followers' ? 'active' : 'inactive'
                    }
                    onClick={() => {
                        togglePageView('followers');
                    }}
                >
                    Following{' '}
                    <span className="count">{followers.list.length}</span>
                </p>
            </div>
        </div>
    );
};

function mapStateToProps({ profile, projects, followers }) {
    return {
        activeTab: profile.pageView,
        projects,
        followers
    };
}

export default connect(mapStateToProps, {
    togglePageView: actions.profileActions.togglePageView
})(withRouter(DetailsNav));
