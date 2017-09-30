import React, { Component } from 'react';
// Tools
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';
// Components
import {
    WorkspaceNav,
    Comments,
    AudioPlayer,
    Visualizer,
    AudioTrackBar
} from './components';
import { Glyphicon } from 'react-bootstrap';

class Workspaces extends Component {
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
                    <AudioTrackBar />
                </div>
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
