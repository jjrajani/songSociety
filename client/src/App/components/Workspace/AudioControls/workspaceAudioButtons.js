import withAudioControls from './withAudioControls';

class workspaceAudioButtons extends withAudioControls {
    constructor(props) {
        super(props);

        this.controlGlyphs = [
            {
                glyph: 'play',
                title: 'Play',
                glyph_wrapper_class: 'play_button',
                onClick: workspace_audio_player =>
                    this.playAudio(workspace_audio_player),
                applyIsPlayingStyle: isPlaying =>
                    this.applyIsPlayingStyles(isPlaying, this.controlGlyphs[0])
            },
            {
                glyph: 'pause',
                title: 'Pause',
                glyph_wrapper_class: 'pause_button',
                onClick: workspace_audio_player =>
                    this.pauseAudio(workspace_audio_player),
                applyIsPlayingStyle: isPlaying =>
                    this.applyIsPlayingStyles(isPlaying, this.controlGlyphs[1])
            },
            {
                glyph: 'fast-backward',
                title: 'Rewind',
                glyph_wrapper_class: 'fast-rewind_button',
                onClick: workspace_audio_player =>
                    this.fastRewindAudio(workspace_audio_player),
                applyIsPlayingStyle: () => {
                    return;
                }
            },
            {
                glyph: 'step-backward',
                title: 'Step Back',
                glyph_wrapper_class: 'rewind_button',
                onClick: workspace_audio_player =>
                    this.rewindAudio(workspace_audio_player),
                applyIsPlayingStyle: () => {
                    return;
                }
            },
            {
                glyph: 'backward',
                title: 'Restart',
                glyph_wrapper_class: 'restart_button',
                onClick: workspace_audio_player =>
                    this.restartAudio(workspace_audio_player),
                applyIsPlayingStyle: () => {
                    return;
                }
            },
            {
                glyph: 'step-forward',
                title: 'Step Forward',
                glyph_wrapper_class: 'forward_button',
                onClick: workspace_audio_player =>
                    this.forwardAudio(workspace_audio_player),
                applyIsPlayingStyle: () => {
                    return;
                }
            },
            {
                glyph: 'fast-forward_button',
                title: 'Fast Forward',
                glyph_wrapper_class: 'fast-forward_button',
                onClick: workspace_audio_player =>
                    this.fastForwardAudio(workspace_audio_player),
                applyIsPlayingStyle: () => {
                    return;
                }
            }
        ];
    }
}

export default workspaceAudioButtons;
