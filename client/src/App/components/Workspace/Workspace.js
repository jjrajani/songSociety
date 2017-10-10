import React, { Component } from 'react';
// Tools
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';
// Components
import { WorkspaceNav, Details, MainVisualizer } from './components';

class Workspaces extends Component {
    componentDidMount() {
        const { workspaceId } = this.props.match.params;
        if (workspaceId && workspaceId !== 'new') {
            this.props.fetchWorkspace(workspaceId);
        } else {
            this.props.resetWorkspace();
        }
    }
    componentWillMount() {
        this.props.getProfile();
    }

    render() {
        return this.props.auth.isAuthenticated()
            ? <div className="container main_content workspace">
                  <WorkspaceNav />
                  <MainVisualizer />
                  <Details />
              </div>
            : <div className="container main_content">
                  <div className="col-xs-12 details_no_auth">
                      <p>Login to Collaborate</p>
                  </div>
              </div>;
    }
}

function mapStateToProps({ profile, workspace, auth }) {
    return { profile, workspace, auth };
}

export default connect(mapStateToProps, {
    getProfile: actions.authActions.getProfile,
    fetchWorkspace: actions.workspaceActions.fetchWorkspace,
    resetWorkspace: actions.workspaceActions.resetWorkspace
})(withRouter(Workspaces));
