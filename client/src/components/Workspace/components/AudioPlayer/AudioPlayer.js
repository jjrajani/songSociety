import React, { Component } from 'react';
// Tools
import { connect } from 'react-redux';
// import * as actions from '../../../../actions';

class AudioPlayer extends Component {
    componentDidUpdate() {
        console.log(this.props.currentAudio);
        // this.refs.player.play();
    }
    render() {
        console.log(this.props.currentAudio);
        return (
            <div className="player">
                Audio Player
                <audio
                    id="workspace_audio_player"
                    src={this.props.currentAudio}
                    controls
                    type="audio/mp3"
                    ref="player"
                    autoplay
                />
            </div>
        );
    }
}

function mapStateToProps({ workspace }) {
    return { currentAudio: workspace.currentAudio };
}

export default connect(mapStateToProps)(AudioPlayer);
