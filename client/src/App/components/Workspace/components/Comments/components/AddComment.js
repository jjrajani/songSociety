import React, { Component } from 'react';
// Tools
import { connect } from 'react-redux';
import * as actions from '../../../../../actions';
import { withRouter } from 'react-router-dom';
import aws from '../../../../../../utils/aws';
import randomString from 'randomstring';
import ls from 'local-storage';
// Components
import UploadTrackButton from './UploadTrackButton';
import { Glyphicon } from 'react-bootstrap';
import Visualizer from '../../Visualizer/Visualizer';

class AddComment extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleFileUpload = this.handleFileUpload.bind(this);

        this.controlGlyphs = [
            {
                glyph: 'play',
                title: 'Preview Track',
                glyph_wrapper_id: 'play_button',
                onClick: () => this.previewAudio()
            },
            {
                glyph: 'pause',
                title: 'Pause Preview',
                glyph_wrapper_id: 'pause_button',
                onClick: () => this.pausePreviewAudio()
            },
            {
                glyph: 'backward',
                title: 'Rewind Preview',
                glyph_wrapper_id: 'rewind_button',
                onClick: () => this.restartPreviewAudio()
            }
        ];
    }

    componentDidMount() {
        ls.on('audio_preview', this.storeTempFile);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleClick(event) {
        const { workspaceId } = this.props.match.params;
        this.props.getProfile().then(user => {
            this.props.addComment(
                user.sub,
                this.state.value,
                null,
                workspaceId
            );
        });
    }

    handleFileUpload(event) {
        const file = event.target.files[0];
        const fileType = file.type.split('/')[1];
        const title = `${randomString.generate(32)}.${fileType}`;
        console.log('title', title);
        let audio = this.refs.preview_audio;
        audio.src = URL.createObjectURL(file);

        this.controlGlyphs.forEach(c => {
            let button = document.getElementById(c.glyph_wrapper_id);
            button.style.display = 'inline';
            button.style.visibility = 'visible';
        });
    }

    uploadFile(title, file) {
        aws.upload(title, event.target.files[0], this.props.getIdToken());
    }

    previewAudio = () => {
        let audio = this.refs.preview_audio;
        audio.play();
    };

    pausePreviewAudio = () => {
        let audio = this.refs.preview_audio;
        audio.pause();
    };

    restartPreviewAudio = () => {
        let audio = this.refs.preview_audio;
        audio.currentTime = 0;
    };
    render() {
        return (
            <div className="add_comment_wrapper col-12">
                <div className="add_comment_content">
                    <textarea
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                    <div className="add_comment_button_wrapper">
                        <p
                            className="btn btn-danger add_comment"
                            onClick={this.handleClick}
                        >
                            Add Comment
                        </p>
                    </div>
                    <UploadTrackButton />
                    <input
                        type="file"
                        id="selectedFile"
                        onChange={this.handleFileUpload}
                        className="display_none"
                        accept="audio/*"
                    />

                    {this.controlGlyphs.map((control, i) => {
                        return (
                            <div key={i} id={control.glyph_wrapper_id}>
                                <Glyphicon
                                    glyph={control.glyph}
                                    title={control.title}
                                    onClick={control.onClick}
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
                // Make Audio Playe reuseable
                <div className="preview_audio_wrapper">
                    <audio id="preview_audio" ref="preview_audio" />
                </div>
            </div>
        );
    }
}
// <MiniVisualizer />

export default connect(null, {
    addComment: actions.commentsActions.addComment,
    getProfile: actions.authActions.getProfile,
    getIdToken: actions.authActions.getIdToken
})(withRouter(AddComment));
