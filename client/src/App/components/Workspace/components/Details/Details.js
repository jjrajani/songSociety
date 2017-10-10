import React from 'react';
// Tools
import { connect } from 'react-redux';
// Components
import { Comments, Collaborators, WorkspaceDetailsNav } from '../';

const Details = ({ pageView, history }) => {
    return (
        <div className="col-xs-12 details">
            <WorkspaceDetailsNav />
            {pageView === 'comments' ? <Comments /> : <Collaborators />}
        </div>
    );
};

function mapStateToProps({ workspace }) {
    return { pageView: workspace.pageView };
}

export default connect(mapStateToProps)(Details);
