import React, { Component } from 'react';

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

        this.controlGlyphs = [
            {
                glyph: 'play',
                title: 'Play',
                glyph_wrapper_class: 'play_button',
                onClick: () => this.playAudio()
            },
            {
                glyph: 'pause',
                title: 'Pause',
                glyph_wrapper_class: 'pause_button',
                onClick: () => this.pauseAudio()
            },
            {
                glyph: 'fast-backward',
                title: 'Rewind',
                glyph_wrapper_class: 'fast-rewind_button',
                onClick: () => this.fastRewindAudio()
            },
            {
                glyph: 'step-backward',
                title: 'Step Back',
                glyph_wrapper_class: 'rewind_button',
                onClick: () => this.rewindAudio()
            },
            {
                glyph: 'backward',
                title: 'Restart',
                glyph_wrapper_class: 'restart_button',
                onClick: () => this.restartAudio()
            },
            {
                glyph: 'backward',
                title: 'Restart',
                glyph_wrapper_class: 'restart_button',
                onClick: () => this.restartAudio()
            },
            {
                glyph: 'step-forward',
                title: 'Step Forward',
                glyph_wrapper_class: 'forward_button',
                onClick: () => this.forwardAudio()
            },
            {
                glyph: 'fast-forward_button',
                title: 'Fast Forward',
                glyph_wrapper_class: 'fast-forward_button',
                onClick: () => this.fastForwardAudio()
            }
        ];
    }
    playAudio() {
        let player = document.getElementById('workspace_audio_player');
        player.play();
    }
    pauseAudio() {
        let player = document.getElementById('workspace_audio_player');
        player.pause();
    }
    restartAudio() {
        let player = document.getElementById('workspace_audio_player');
        player.currentTime = 0;
    }
    rewindAudio() {
        let player = document.getElementById('workspace_audio_player');
        if (!player.paused) {
            let newTime = player.currentTime - 5;
            player.currentTime = newTime < 0 ? 0 : newTime;
        }
    }
    fastRewindAudio() {
        let player = document.getElementById('workspace_audio_player');
        if (!player.paused) {
            let newTime = player.currentTime - 15;
            player.currentTime = newTime < 0 ? 0 : newTime;
        }
    }
    forwardAudio() {
        let player = document.getElementById('workspace_audio_player');
        if (!player.paused) {
            let newTime = player.currentTime + 5;
            player.currentTime = newTime < 0 ? 0 : newTime;
        }
    }
    fastForwardAudio() {
        let player = document.getElementById('workspace_audio_player');
        if (!player.paused) {
            let newTime = player.currentTime + 15;
            player.currentTime = newTime < 0 ? 0 : newTime;
        }
    }
}

export default withAudioControls;
