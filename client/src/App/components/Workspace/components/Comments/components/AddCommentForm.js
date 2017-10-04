import React from 'react';
// Tools
import { connect } from 'react-redux';
import * as actions from '../../../../../actions';
import { reduxForm } from 'redux-form';
import randomString from 'randomstring';
// Components
import { Field } from 'redux-form';

const CommentTextarea = fields => {
    return (
        <textarea
            {...fields}
            id="content"
            name="content"
            className="comment_content"
            value={fields.input.value}
            onChange={fields.input.onChange}
        />
    );
};

const CommentAudioInput = fields => {
    return (
        <input
            {...fields}
            id="selected_file"
            name="selected_file"
            className="display_none"
            onChange={fields.input.onChange}
            accept="audio/*"
        />
    );
};

const AddCommentForm = ({
    comment,
    updateNewComment,
    updateAudioSource,
    addComment,
    form
}) => {
    let handleFileUpload = event => {
        const file = event.target.files[0];
        // const fileType = file.type.split('/')[1];
        // const title = `${randomString.generate(32)}.${fileType}`;
        let src = URL.createObjectURL(file);
        updateAudioSource(src);
        let controlGlyphs = ['play_button', 'pause_button', 'rewind_button'];
        controlGlyphs.forEach(c => {
            let button = document.getElementById(c);
            button.style.display = 'inline';
            button.style.visibility = 'visible';
        });
    };
    return (
        <form id="add_comment_form">
            <Field
                type="textarea"
                name="content"
                id="content"
                value={comment.content}
                onChange={e => updateNewComment(e.target.name, e.target.value)}
                component={CommentTextarea}
            />
            <Field
                type="file"
                name="selected_file"
                id="selected_file"
                onChange={e => handleFileUpload(e)}
                component={CommentAudioInput}
            />
            <p
                className="btn btn-danger add_comment"
                onClick={() => addComment(form)}
            >
                Add Comment{' '}
            </p>
        </form>
    );
};

function mapStateToProps({ comments, form }) {
    return { comment: comments.newComment, form: form.commentForm };
}

function validate(values) {
    console.log('validate', values);
    const errors = {};

    return errors;
}

export default reduxForm({ form: 'commentForm' })(
    connect(mapStateToProps, {
        updateNewComment: actions.commentsActions.updateNewComment,
        addComment: actions.commentsActions.addComment,
        updateAudioSource: actions.commentsActions.updateAudioSource
    })(AddCommentForm)
);
