import React, { Component } from 'react';

class AudioTrackBar extends Component {
    constructor(props) {
        super(props);
        this.progress = 0;
    }

    componentDidMount() {
        let audioPlayer = document.getElementById('workspace_audio_player');
        console.log('duration', audioPlayer.duration);
    }

    render() {
        return (
            <div className="audio_trackbar">
                <div
                    className="progress_bar"
                    style={{ width: this.progress }}
                />
            </div>
        );
    }
}

export default AudioTrackBar;
