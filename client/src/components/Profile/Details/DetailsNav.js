import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';

const DetailsNav = ({ togglePageView, activeTab }) =>
    <div className="details_nav">
        <p
            className={activeTab === 'projects' ? 'active' : 'inactive'}
            onClick={() => {
                togglePageView('projects');
            }}
        >
            Projects <span className="count">333333333</span>
        </p>
        <p
            className={activeTab === 'friends' ? 'active' : 'inactive'}
            onClick={() => {
                togglePageView('friends');
            }}
        >
            Friends <span className="count">333333333</span>
        </p>
    </div>;

function mapStateToProps({ profile }) {
    return { activeTab: profile.pageView };
}

export default connect(mapStateToProps, {
    togglePageView: actions.profileActions.togglePageView
})(DetailsNav);
