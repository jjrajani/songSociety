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
                glyph: 'backward',
                title: 'Restart',
                glyph_wrapper_class: 'restart_button',
                onClick: workspace_audio_player =>
                    this.restartAudio(workspace_audio_player),
                applyIsPlayingStyle: () => {
                    return;
                }
            }
        ];
    }
}

export default workspaceAudioButtons;
