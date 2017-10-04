import React, { Component } from 'react';
// Tools
import { connect } from 'react-redux';
import * as actions from '../../../../../actions';
import { withRouter } from 'react-router-dom';
import aws from '../../../../../../utils/aws';
// import randomString from 'randomstring';
import ls from 'local-storage';
// Components
import UploadTrackButton from './UploadTrackButton';
import { Glyphicon } from 'react-bootstrap';
import Visualizer from '../../Visualizer/Visualizer';
// Components
import { AudioPlayer } from '../../';
import AddCommentForm from './AddCommentForm';
// HOC
import addCommentAudioButtons from '../../../AudioControls/addCommentAudioButtons';

// With audioButtons carries glyph buttons
// and extends from audioControl functions
// and extends Component
class AddComment extends addCommentAudioButtons {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.addComment = this.addComment.bind(this);
        // this.handleFileUpload = this.handleFileUpload.bind(this);
    }

    componentDidMount() {
        ls.on('audio_preview', this.storeTempFile);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    addComment(event) {
        const { workspaceId } = this.props.match.params;
        if (this.props.profile.profile._id) {
            this.props.addComment(
                this.props.profile.profile._id,
                this.state.value,
                null,
                workspaceId
            );
        } else {
            this.props.getProfile().then(user => {
                this.props.fetchProfile(user.sub).then(profile => {
                    this.props.addComment(
                        this.props.profile.profile._id,
                        this.state.value,
                        null,
                        workspaceId
                    );
                });
            });
        }
    }

    // handleFileUpload(event) {
    //     const file = event.target.files[0];
    //     const fileType = file.type.split('/')[1];
    //     const title = `${randomString.generate(32)}.${fileType}`;
    //     console.log('title', title);
    //     let src = URL.createObjectURL(file);
    //     this.props.updateNewComment(event.targe.name, src);
    //
    //     this.controlGlyphs.forEach(c => {
    //         let button = document.getElementById(c.glyph_wrapper_id);
    //         button.style.display = 'inline';
    //         button.style.visibility = 'visible';
    //     });
    // }

    uploadFile(title, file) {
        aws.upload(title, event.target.files[0], this.props.getIdToken());
    }

    render() {
        return (
            <div className="add_comment_wrapper col-12">
                <div className="add_comment_content">
                    <AddCommentForm />

                    <UploadTrackButton />
                    {this.controlGlyphs.map((control, i) => {
                        return (
                            <div key={i} id={control.glyph_wrapper_id}>
                                <Glyphicon
                                    glyph={control.glyph}
                                    title={control.title}
                                    onClick={() =>
                                        control.onClick('preview_audio')}
                                />
                            </div>
                        );
                    })}
                    <Visualizer
                        audioPlayer={'preview_audio'}
                        canvasId={'mini_canvas'}
                        canvasWrapperId={'mini_visualizer'}
                    />
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
// <MiniVisualizer />
function mapStateToProps({ comments, profile }) {
    return { currentAudio: comments.currentAudio, profile };
}

export default connect(mapStateToProps, {
    addComment: actions.commentsActions.addComment,
    getProfile: actions.authActions.getProfile,
    fetchProfile: actions.profileActions.fetchProfile,
    // getIdToken: actions.authActions.getIdToken,
    updateNewComment: actions.commentsActions.updateNewComment,
    updateAudioSource: actions.commentsActions.updateAudioSource
})(withRouter(AddComment));
