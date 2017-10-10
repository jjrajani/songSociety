import React from 'react';
// Components
import Visualizer from '../../../Visualizer/Visualizer';
import AudioControlButtons from '../../../../AudioControls/AudioControlButtons';
import TrackBar from '../../../../AudioControls/TrackBar';
// HOC
import addCommentAudioButtons from '../../../../AudioControls/addCommentAudioButtons';

// With audioButtons carries glyph buttons
// and extends from audioControl functions
// and extends Component
class AudioControls extends addCommentAudioButtons {
    constructor(props) {
        super(props);
        this.trackBarWrapperId = 'add_comment_track_bar_wrapper';
    }
    render() {
        return (
            <div className="preview_audio_controls_wrapper">
                <AudioControlButtons
                    buttons={this.controlGlyphs}
                    audioSrcId={'preview_audio'}
                    isPlaying={this.state.isPlaying}
                />
                <Visualizer
                    audioPlayer={'preview_audio'}
                    canvasId={'mini_canvas'}
                    canvasWrapperId={'mini_visualizer'}
                />
                <TrackBar
                    audioPlayerId="preview_audio"
                    trackBarWrapperId="add_comment_track_bar"
                />
            </div>
        );
    }
}

export default AudioControls;
