import { Component } from 'react';

class withAudioControls extends Component {
    constructor(props) {
        super(props);

        this.state = { isPlaying: false, position: 0 };

        this.playAudio = this.playAudio.bind(this);
        this.pauseAudio = this.pauseAudio.bind(this);
        this.restartAudio = this.restartAudio.bind(this);
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

    applyIsPlayingStyles = (isPlaying, glyph) => {
        if (glyph.glyph === 'play') {
            glyph.glyph_wrapper_class = isPlaying
                ? 'play_button hidden'
                : 'play_button';
        }
        if (glyph.glyph === 'pause') {
            glyph.glyph_wrapper_class = isPlaying
                ? 'pause_button'
                : 'pause_button hidden';
        }
    };
}

export default withAudioControls;
