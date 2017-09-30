import React, { Component } from 'react';
// Tools
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';
// Components
import { WorkspaceNav, Comments, AudioPlayer } from './components';

class Workspaces extends Component {
    componentWillMount() {
        this.props.getProfile();
    }
    render() {
        return (
            <div className="container main_content workspace">
                <WorkspaceNav />
                <AudioPlayer />
                <Comments />
            </div>
        );
    }
}

function mapStateToProps({ profile }) {
    return { profile };
}

export default connect(mapStateToProps, {
    getProfile: actions.authActions.getProfile
})(withRouter(Workspaces));
