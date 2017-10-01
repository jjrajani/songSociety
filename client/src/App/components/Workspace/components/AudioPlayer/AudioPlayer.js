import React, { Component } from 'react';
// Tools
import { connect } from 'react-redux';

class AudioPlayer extends Component {
    componentDidMount() {
        let player = document.getElementById('workspace_audio_player');
        player.pause();
        player.currentTime = 0;
    }

    render() {
        const { currentAudio } = this.props;
        return (
            <div className="player">
                <audio
                    id="workspace_audio_player"
                    src={currentAudio}
                    type="audio/mp3"
                    autoPlay
                />
            </div>
        );
    }
}

function mapStateToProps({ workspace }) {
    return { currentAudio: workspace.currentAudio };
}

export default connect(mapStateToProps)(AudioPlayer);
