import { Component } from 'react';

class withAudioControls extends Component {
    constructor(props) {
        super(props);
        this.playAudio = this.playAudio.bind(this);
        this.pauseAudio = this.pauseAudio.bind(this);
        this.restartAudio = this.restartAudio.bind(this);
        this.rewindAudio = this.rewindAudio.bind(this);
        this.fastRewindAudio = this.fastRewindAudio.bind(this);
        this.forwardAudio = this.forwardAudio.bind(this);
        this.fastForwardAudio = this.fastForwardAudio.bind(this);
    }

    playWithSource(workspace_audio_player, src) {
        let player = document.getElementById(workspace_audio_player);
        player.src = src;
        player.play();
    }

    playAudio(workspace_audio_player) {
        let player = document.getElementById(workspace_audio_player);
        player.play();
    }
    pauseAudio(workspace_audio_player) {
        let player = document.getElementById(workspace_audio_player);
        player.pause();
    }
    restartAudio(workspace_audio_player) {
        let player = document.getElementById(workspace_audio_player);
        player.currentTime = 0;
    }
    rewindAudio(workspace_audio_player) {
        let player = document.getElementById(workspace_audio_player);
        if (!player.paused) {
            let newTime = player.currentTime - 5;
            player.currentTime = newTime < 0 ? 0 : newTime;
        }
    }
    fastRewindAudio(workspace_audio_player) {
        let player = document.getElementById(workspace_audio_player);
        if (!player.paused) {
            let newTime = player.currentTime - 15;
            player.currentTime = newTime < 0 ? 0 : newTime;
        }
    }
    forwardAudio(workspace_audio_player) {
        let player = document.getElementById(workspace_audio_player);
        if (!player.paused) {
            let newTime = player.currentTime + 5;
            player.currentTime = newTime < 0 ? 0 : newTime;
        }
    }
    fastForwardAudio(workspace_audio_player) {
        let player = document.getElementById(workspace_audio_player);
        if (!player.paused) {
            let newTime = player.currentTime + 15;
            player.currentTime = newTime < 0 ? 0 : newTime;
        }
    }
}

export default withAudioControls;
