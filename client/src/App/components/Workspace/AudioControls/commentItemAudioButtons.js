import withAudioControls from './withAudioControls';

class commentItemAudioButtons extends withAudioControls {
    constructor(props) {
        super(props);

        this.controlGlyphs = [
            {
                glyph: 'play',
                title: 'Preview Track',
                glyph_wrapper_id: 'play_button',
                onClick: (audioPlayerId, src) => {
                    this.playWithSource(audioPlayerId, src);
                }
            },
            {
                glyph: 'pause',
                title: 'Pause Preview',
                glyph_wrapper_id: 'pause_button',
                onClick: audioPlayerId => this.pauseAudio(audioPlayerId)
            },
            {
                glyph: 'backward',
                title: 'Rewind Preview',
                glyph_wrapper_id: 'rewind_button',
                onClick: audioPlayerId => this.restartAudio(audioPlayerId)
            }
        ];
    }
}

export default commentItemAudioButtons;
