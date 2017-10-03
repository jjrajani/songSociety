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
        console.log('this', this);
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
    restartAudio() {
        let player = document.getElementById('workspace_audio_player');
        player.currentTime = 0;
    }
    rewindAudio() {
        let player = document.getElementById('workspace_audio_player');
        if (!player.paused) {
            let newTime = player.currentTime - 5;
            player.currentTime = newTime < 0 ? 0 : newTime;
        }
    }
    fastRewindAudio() {
        let player = document.getElementById('workspace_audio_player');
        if (!player.paused) {
            let newTime = player.currentTime - 15;
            player.currentTime = newTime < 0 ? 0 : newTime;
        }
    }
    forwardAudio() {
        let player = document.getElementById('workspace_audio_player');
        if (!player.paused) {
            let newTime = player.currentTime + 5;
            player.currentTime = newTime < 0 ? 0 : newTime;
        }
    }
    fastForwardAudio() {
        let player = document.getElementById('workspace_audio_player');
        if (!player.paused) {
            let newTime = player.currentTime + 15;
            player.currentTime = newTime < 0 ? 0 : newTime;
        }
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
                                title="Play"
                            />
                        </div>
                        <div className="pause_button">
                            <Glyphicon
                                glyph="pause"
                                onClick={this.pauseAudio.bind(this)}
                                title="Pause"
                            />
                        </div>
                        <div className="fast-rewind_button">
                            <Glyphicon
                                glyph="fast-backward"
                                onClick={this.fastRewindAudio.bind(this)}
                                title="Rewind"
                            />
                        </div>
                        <div className="rewind_button">
                            <Glyphicon
                                glyph="step-backward"
                                onClick={this.rewindAudio.bind(this)}
                                title="Step Back"
                            />
                        </div>
                        <div className="restart_button">
                            <Glyphicon
                                glyph="backward"
                                onClick={this.restartAudio.bind(this)}
                                title="Restart"
                            />
                        </div>
                        <div className="forward_button">
                            <Glyphicon
                                glyph="step-forward"
                                onClick={this.forwardAudio.bind(this)}
                                title="Step Forward"
                            />
                        </div>
                        <div className="fast-forward_button">
                            <Glyphicon
                                glyph="fast-forward"
                                onClick={this.fastForwardAudio.bind(this)}
                                title="Fast Forward"
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
