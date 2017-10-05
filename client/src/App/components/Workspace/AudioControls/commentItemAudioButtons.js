import withAudioControls from './withAudioControls';

class commentItemAudioButtons extends withAudioControls {
    constructor(props) {
        super(props);

        this.controlGlyphs = [
            {
                glyph: 'play',
                title: 'Preview Track',
                glyph_wrapper_id: 'play_button',
                glyph_wrapper_class: 'play_button',
                onClick: (audioPlayerId, src) => {
                    this.playWithSource(audioPlayerId, src);
                },
                applyIsPlayingStyle: isPlaying => {
                    this.applyIsPlayingStyles(isPlaying, this.controlGlyphs[0]);
                }
            },
            {
                glyph: 'pause',
                title: 'Pause Preview',
                glyph_wrapper_id: 'pause_button',
                glyph_wrapper_class: 'pause_button',
                onClick: audioPlayerId => this.pauseAudio(audioPlayerId),
                applyIsPlayingStyle: isPlaying => {
                    this.applyIsPlayingStyles(isPlaying, this.controlGlyphs[1]);
                }
            },
            {
                glyph: 'backward',
                title: 'Rewind Preview',
                glyph_wrapper_id: 'rewind_button',
                glyph_wrapper_class: 'rewind_button',
                onClick: audioPlayerId => this.restartAudio(audioPlayerId),
                applyIsPlayingStyle: () => {
                    return;
                }
            }
        ];
    }
}

export default commentItemAudioButtons;
