import React from 'react';
// Tools
import { connect } from 'react-redux';
import * as actions from '../../../../actions';

const WorkspaceDetailsNav = ({
    togglePageView,
    activeTab,
    comments,
    workspace
}) =>
    <div className="details_nav">
        <p
            className={activeTab === 'comments' ? 'active' : 'inactive'}
            onClick={() => {
                togglePageView('comments');
            }}
        >
            Comments <span className="count">{comments.list.length}</span>
        </p>
        <p
            className={
                activeTab === 'invite_colaborators' ? 'active' : 'inactive'
            }
            onClick={() => {
                togglePageView('invite_colaborators');
            }}
        >
            Collaborators{' '}
            <span className="count">
                {workspace.project.collaborators.length}
            </span>
        </p>
    </div>;

function mapStateToProps({ workspace, comments }) {
    return { activeTab: workspace.pageView, comments, workspace };
}

export default connect(mapStateToProps, {
    togglePageView: actions.workspaceActions.togglePageView
})(WorkspaceDetailsNav);
