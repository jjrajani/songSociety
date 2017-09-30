import React from 'react';
// Tools
import { connect } from 'react-redux';

const AudioPlayer = ({ currentAudio }) =>
    <div className="player">
        <audio
            id="workspace_audio_player"
            src={currentAudio}
            type="audio/mp3"
            autoPlay
        />
    </div>;

function mapStateToProps({ workspace }) {
    return { currentAudio: workspace.currentAudio };
}

export default connect(mapStateToProps)(AudioPlayer);
