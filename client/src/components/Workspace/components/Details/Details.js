import React from 'react';
// Tools
import { connect } from 'react-redux';
// Components
import { Comments } from '../';
import WorkspaceDetailsNav from './WorkspaceDetailsNav';
import Collaborators from '../Collaborators/Collaborators';

const Details = ({ pageView }) =>
    <div className="col-xs-12 col-sm-9 details">
        <WorkspaceDetailsNav />
        {pageView === 'comments' ? <Comments /> : <Collaborators />}
    </div>;

function mapStateToProps({ workspace }) {
    return { pageView: workspace.pageView };
}

export default connect(mapStateToProps)(Details);
