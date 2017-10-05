import withAudioControls from './withAudioControls';

class commentItemAudioButtons extends withAudioControls {
    constructor(props) {
        super(props);

        this.controlGlyphs = [
            {
                glyph: 'play',
                title: 'Preview Track',
                glyph_wrapper_id: 'comment_item_play_button',
                glyph_wrapper_class: 'comment_item_play_button',
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
                glyph_wrapper_id: 'comment_item_pause_button',
                glyph_wrapper_class: 'comment_item_pause_button',
                onClick: audioPlayerId => this.pauseAudio(audioPlayerId),
                applyIsPlayingStyle: isPlaying => {
                    this.applyIsPlayingStyles(isPlaying, this.controlGlyphs[1]);
                }
            }
        ];
    }
}

export default commentItemAudioButtons;
