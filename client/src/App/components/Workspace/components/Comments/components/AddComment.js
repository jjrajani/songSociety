import React from 'react';
// Tools
import { connect } from 'react-redux';
import * as actions from '../../../../../actions';
import { withRouter } from 'react-router-dom';
// Components
import Visualizer from '../../Visualizer/Visualizer';
import { AudioPlayer } from '../../';
import AddCommentForm from './AddCommentForm';
import AudioControlButtons from '../../../AudioControls/AudioControlButtons';
import UploadTrackButton from './UploadTrackButton';

// HOC
import addCommentAudioButtons from '../../../AudioControls/addCommentAudioButtons';

// With audioButtons carries glyph buttons
// and extends from audioControl functions
// and extends Component
class AddComment extends addCommentAudioButtons {
    render() {
        return (
            <div className="add_comment_wrapper col-12">
                <div className="add_comment_content">
                    <AddCommentForm
                        showAudioControls={this.showAudioControls}
                    />
                    <div className="submit_form_button">
                        <button
                            type="submit"
                            form="add_comment_form"
                            className="btn btn-danger add_comment"
                        >
                            Add Comment{' '}
                        </button>
                        <UploadTrackButton />
                    </div>
                    <div className="preview_audio_controls_wrapper">
                        <AudioControlButtons
                            buttons={this.controlGlyphs}
                            audioSrcId={'preview_audio'}
                        />
                        <Visualizer
                            audioPlayer={'preview_audio'}
                            canvasId={'mini_canvas'}
                            canvasWrapperId={'mini_visualizer'}
                        />
                    </div>
                </div>
                <AudioPlayer
                    currentAudio={this.props.currentAudio}
                    audioWrapperClassName="preview_audio_wrapper"
                    audioPlayerId="preview_audio"
                />
            </div>
        );
    }
}

function mapStateToProps({ comments, profile }) {
    return { currentAudio: comments.currentAudio, profile };
}

export default connect(mapStateToProps, {
    updateNewComment: actions.commentsActions.updateNewComment,
    updateAudioSource: actions.commentsActions.updateAudioSource
})(withRouter(AddComment));
