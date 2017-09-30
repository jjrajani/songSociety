import React from 'react';
// Tools
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// Components
import { Comments } from '../';
import WorkspaceDetailsNav from './WorkspaceDetailsNav';
import Collaborators from '../Collaborators/Collaborators';

const Details = ({ pageView, history }) => {
    const { pathname } = history.location;
    const isLoggedIn = pathname.length > 2 || pathname.indexOf('new') !== -1;
    return isLoggedIn
        ? <div className="col-xs-12 col-sm-9 details">
              <WorkspaceDetailsNav />
              {pageView === 'comments' ? <Comments /> : <Collaborators />}
          </div>
        : <div className="col-xs-12 col-sm-9 details_no_auth">
              Login to Collaborate.
          </div>;
};

function mapStateToProps({ workspace }) {
    return { pageView: workspace.pageView };
}

export default connect(mapStateToProps)(withRouter(Details));
