import React from 'react';
// Tools
import { connect } from 'react-redux';
import * as actions from '../../../actions';

const DetailsNav = ({ togglePageView, activeTab, projects, friends }) =>
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
            className={activeTab === 'friends' ? 'active' : 'inactive'}
            onClick={() => {
                togglePageView('friends');
            }}
        >
            Friends <span className="count">{friends.list.length}</span>
        </p>
    </div>;

function mapStateToProps({ profile, projects, friends }) {
    return { activeTab: profile.pageView, projects, friends };
}

export default connect(mapStateToProps, {
    togglePageView: actions.profileActions.togglePageView
})(DetailsNav);
