import React from 'react';
// Tools
import { connect } from 'react-redux';
// Components
import { AudioPlayer, Visualizer } from '../';
import AudioControlButtons from '../../AudioControls/AudioControlButtons';
import TrackBar from '../../AudioControls/TrackBar';
// HOC
import workspaceAudioButtons from '../../AudioControls/workspaceAudioButtons';

// With audioButtons carries glyph buttons
// and extends from audioControl functions
// and extends Component
class MainVisualizer extends workspaceAudioButtons {
    render() {
        const { currentAudio } = this.props.workspace.project;
        return (
            <div className="audio_wrapper">
                <AudioControlButtons
                    buttons={this.controlGlyphs}
                    audioSrcId={'workspace_audio_player'}
                    isPlaying={this.state.isPlaying}
                />
                <AudioPlayer
                    currentAudio={currentAudio}
                    audioWrapperClassName="player"
                    audioPlayerId="workspace_audio_player"
                />
                <Visualizer
                    audioPlayer="workspace_audio_player"
                    canvasId="analyzer"
                    canvasWrapperId="mp3_player"
                />
                <TrackBar
                    audioPlayerId="workspace_audio_player"
                    trackBarWrapperId="workspace_track_bar"
                />
            </div>
        );
    }
}

function mapStateToProps({ workspace }) {
    return { workspace };
}

export default connect(mapStateToProps)(MainVisualizer);
