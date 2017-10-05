import { Component } from 'react';

class withAudioControls extends Component {
    constructor(props) {
        super(props);

        this.state = { isPlaying: false };

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
        if (player.src !== src) {
            player.src = src;
        }
        player.play();
        this.setState({ isPlaying: true });
    }

    playAudio(workspace_audio_player) {
        let player = document.getElementById(workspace_audio_player);
        player.play();
        this.setState({ isPlaying: true });
    }
    pauseAudio(workspace_audio_player) {
        let player = document.getElementById(workspace_audio_player);
        player.pause();
        this.setState({ isPlaying: false });
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

    applyIsPlayingStyles = (isPlaying, glyph) => {
        if (glyph.glyph === 'play') {
            console.log('wtf', glyph, isPlaying);
            glyph.glyph_wrapper_class = isPlaying
                ? 'play_button hidden'
                : 'play_button';
        }
        if (glyph.glyph === 'pause') {
            console.log('wtf', glyph);

            glyph.glyph_wrapper_class = isPlaying
                ? 'pause_button'
                : 'pause_button hidden';
        }
    };
}

export default withAudioControls;
