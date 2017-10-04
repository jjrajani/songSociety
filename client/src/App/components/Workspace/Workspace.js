import React from 'react';
// Tools
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';
// Components
import { WorkspaceNav, AudioPlayer, Details, Visualizer } from './components';
import AudioControlButtons from './AudioControls/AudioControlButtons';
// HOC
import workspaceAudioButtons from './AudioControls/workspaceAudioButtons';

// With audioButtons carries glyph buttons
// and extends from audioControl functions
// and extends Component
class Workspaces extends workspaceAudioButtons {
    componentDidMount() {
        const { workspaceId } = this.props.match.params;
        if (workspaceId && workspaceId !== 'new') {
            this.props.fetchWorkspace(workspaceId);
        }
    }
    componentWillMount() {
        this.props.getProfile();
    }

    render() {
        return (
            <div className="container main_content workspace">
                <WorkspaceNav />
                <div className="audio_wrapper">
                    <AudioControlButtons
                        buttons={this.controlGlyphs}
                        audioSrcId={'workspace_audio_player'}
                    />
                    <AudioPlayer
                        currentAudio={this.props.workspace.currentAudio}
                        audioWrapperClassName="player"
                        audioPlayerId="workspace_audio_player"
                    />
                    <Visualizer
                        audioPlayer="workspace_audio_player"
                        canvasId="analyzer"
                        canvasWrapperId="mp3_player"
                    />
                </div>
                <Details />
            </div>
        );
    }
}

function mapStateToProps({ profile, workspace }) {
    return { profile, workspace };
}

export default connect(mapStateToProps, {
    getProfile: actions.authActions.getProfile,
    fetchWorkspace: actions.workspaceActions.fetchWorkspace
})(withRouter(Workspaces));
