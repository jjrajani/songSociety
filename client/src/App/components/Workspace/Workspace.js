import React, { Component } from 'react';
// Tools
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';
// Components
import { WorkspaceNav, AudioPlayer, Details, Visualizer } from './components';
import { Glyphicon } from 'react-bootstrap';
// HOC
import withAudioControls from './withAudioControls/withAudioControls';

// WIth Audio Controls carries glyph buttons
// and audio player control functions
class Workspaces extends withAudioControls {
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
                    <div className="audio_nav">
                        {this.controlGlyphs.map((control, i) => {
                            return (
                                <div
                                    key={i}
                                    className={control.glyph_wrapper_class}
                                >
                                    <Glyphicon
                                        glyph={control.glyph}
                                        onClick={control.onClick}
                                        title={control.title}
                                    />
                                </div>
                            );
                        })}
                    </div>
                    <AudioPlayer />
                    <Visualizer
                        audioPlayer={'workspace_audio_player'}
                        canvasId={'analyzer'}
                        canvasWrapperId={'mp3_player'}
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
