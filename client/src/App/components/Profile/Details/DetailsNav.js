import React from 'react';
// Tools
import { connect } from 'react-redux';
import * as actions from '../../../actions';

const DetailsNav = ({ togglePageView, activeTab, projects, followers }) =>
    <div className="details_nav">
        <p
            className={activeTab === 'projects' ? 'active' : 'inactive'}
            onClick={() => {
                togglePageView('projects');
            }}
        >
            Projects <span className="count">{projects.length}</span>
        </p>
        <p
            className={activeTab === 'followers' ? 'active' : 'inactive'}
            onClick={() => {
                togglePageView('followers');
            }}
        >
            Following <span className="count">{followers.list.length}</span>
        </p>
    </div>;

function mapStateToProps({ profile, projects, followers }) {
    return { activeTab: profile.pageView, projects, followers };
}

export default connect(mapStateToProps, {
    togglePageView: actions.profileActions.togglePageView
})(DetailsNav);
