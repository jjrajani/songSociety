import withAudioControls from './withAudioControls';

class addCommentAudioButtons extends withAudioControls {
    constructor(props) {
        super(props);
        this.controlGlyphs = [
            {
                glyph: 'play',
                title: 'Preview Track',
                glyph_wrapper_id: 'play_button',
                glyph_wrapper_class: 'play_button',
                onClick: audioPlayerId => this.playAudio(audioPlayerId),
                applyIsPlayingStyle: isPlaying =>
                    this.applyIsPlayingStyles(isPlaying, this.controlGlyphs[0])
            },
            {
                glyph: 'pause',
                title: 'Pause Preview',
                glyph_wrapper_id: 'pause_button',
                glyph_wrapper_class: 'pause_button',
                onClick: audioPlayerId => this.pauseAudio(audioPlayerId),
                applyIsPlayingStyle: isPlaying =>
                    this.applyIsPlayingStyles(isPlaying, this.controlGlyphs[1])
            }
        ];
    }

    showAudioControls = () => {
        this.controlGlyphs.forEach(g => {
            let button = document.getElementById(g.glyph_wrapper_id);
            button.style.display = 'inline';
            button.style.visibility = 'visible';
        });
    };
}

export default addCommentAudioButtons;
