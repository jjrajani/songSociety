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
                    src="https://api.soundcloud.com/tracks/184774366/stream?client_id=9590faf7123e87d09a95c043faeec29e"
                    type="audio/mp3"
                />
            </div>
        );
    }
}

function mapStateToProps({ workspace }) {
    return { currentAudio: workspace.currentAudio };
}

export default connect(mapStateToProps)(AudioPlayer);
// src={currentAudio}
