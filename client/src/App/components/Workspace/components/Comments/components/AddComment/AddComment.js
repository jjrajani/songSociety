import React, { Component } from 'react';
// Tools
import { connect } from 'react-redux';
// Components
import { AudioPlayer } from '../../../';
import AddCommentForm from './Form/AddCommentForm';
import AddCommentFormButtons from './AddCommentFormButtons';
import AudioControls from './AudioControls';

const AddComment = ({ currentAudio }) =>
    <div className="add_comment_wrapper col-12">
        <div className="add_comment_content">
            <AddCommentForm />
            <AddCommentFormButtons />
            <AudioControls />
        </div>
        <AudioPlayer
            currentAudio={currentAudio}
            audioWrapperClassName="preview_audio_wrapper"
            audioPlayerId="preview_audio"
        />
    </div>;

function mapStateToProps({ comments }) {
    return { currentAudio: comments.currentAudio };
}

export default connect(mapStateToProps)(AddComment);
