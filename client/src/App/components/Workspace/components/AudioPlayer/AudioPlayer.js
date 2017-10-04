import React, { Component } from 'react';

class AudioPlayer extends Component {
    componentDidMount() {
        let player = document.getElementById(this.props.audioPlayerId);
        player.pause();
        player.currentTime = 0;
    }

    render() {
        const {
            currentAudio,
            audioWrapperClassName,
            audioPlayerId
        } = this.props;
        return (
            <div className={audioWrapperClassName}>
                <audio id={audioPlayerId} src={currentAudio} type="audio/mp3" />
            </div>
        );
    }
}

export default AudioPlayer;
