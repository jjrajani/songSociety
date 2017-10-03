import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
import MiniVisualizer from './MiniVisualizer';

class AddComment extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleFileUpload = this.handleFileUpload.bind(this);
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
        let audio = this.refs.preview_audio;
        audio.src = URL.createObjectURL(file);
        let buttons = ['play_button', 'pause_button', 'rewind_button'];
        buttons.forEach(b => {
            let button = document.getElementById(b);
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
                    <div id="play_button">
                        <Glyphicon
                            glyph="play"
                            title="Preview Track"
                            onClick={this.previewAudio}
                        />
                    </div>
                    <div id="pause_button">
                        <Glyphicon
                            glyph="pause"
                            title="Pause Preview"
                            onClick={this.pausePreviewAudio}
                        />
                    </div>
                    <div id="rewind_button">
                        <Glyphicon
                            glyph="backward"
                            title="Rewind Preview"
                            onClick={this.restartPreviewAudio}
                        />
                    </div>
                    <MiniVisualizer />
                </div>
                <div className="preview_audio_wrapper">
                    <audio id="preview_audio" ref="preview_audio" />
                </div>
            </div>
        );
    }
}

export default connect(null, {
    addComment: actions.commentsActions.addComment,
    getProfile: actions.authActions.getProfile,
    getIdToken: actions.authActions.getIdToken
})(withRouter(AddComment));
