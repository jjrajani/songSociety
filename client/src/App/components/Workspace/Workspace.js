import React, { Component } from 'react';
// Tools
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';
// Components
import { WorkspaceNav, AudioPlayer, Visualizer, Details } from './components';
import { Glyphicon } from 'react-bootstrap';

class Workspaces extends Component {
    componentDidMount() {
        const pathLength = this.props.history.location.pathname.split('/')
            .length;
        if (pathLength > 2 && pathLength[2] !== 'new') {
            const { workspaceId } = this.props.match.params;
            this.props.fetchWorkspace(workspaceId);
        }
    }
    componentWillMount() {
        this.props.getProfile();
    }

    playAudio() {
        let player = document.getElementById('workspace_audio_player');
        player.play();
    }
    pauseAudio() {
        let player = document.getElementById('workspace_audio_player');
        player.pause();
    }
    render() {
        return (
            <div className="container main_content workspace">
                <WorkspaceNav />
                <div className="audio_wrapper">
                    <div className="audio_nav">
                        <div className="play_button">
                            <Glyphicon
                                glyph="play"
                                onClick={this.playAudio.bind(this)}
                            />
                        </div>
                        <div className="pause_button">
                            <Glyphicon
                                glyph="pause"
                                onClick={this.pauseAudio.bind(this)}
                            />
                        </div>
                    </div>
                    <AudioPlayer />
                    <Visualizer />
                </div>
                <Details />
            </div>
        );
    }
}

function mapStateToProps({ profile, workspace }) {
    return { profile, workspace };
}

export default connect(mapStateToProps, {
    getProfile: actions.authActions.getProfile,
    fetchWorkspace: actions.workspaceActions.fetchWorkspace
})(withRouter(Workspaces));