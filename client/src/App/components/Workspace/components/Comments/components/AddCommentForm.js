import React from 'react';
// Tools
import { connect } from 'react-redux';
import * as actions from '../../../../../actions';
import { reduxForm } from 'redux-form';
// Components
import { Field } from 'redux-form';
import { CommentTextarea, CommentAudioInput, validate } from './Form/Fields';

const AddCommentForm = ({
    updateAudioSource,
    addComment,
    form,
    handleSubmit,
    showAudioControls
}) => {
    let handleFileUpload = event => {
        const file = event.target.files[0];
        let src = URL.createObjectURL(file);
        updateAudioSource(src);
        showAudioControls();
    };
    return (
        <form id="add_comment_form" onSubmit={handleSubmit(addComment)}>
            <Field type="textarea" name="content" component={CommentTextarea} />
            <Field
                type="file"
                name="selected_file"
                onChange={e => handleFileUpload(e)}
                component={CommentAudioInput}
            />
        </form>
    );
};

function mapStateToProps({ form }) {
    return { form: form.commentForm };
}

export default reduxForm({ form: 'commentForm', validate })(
    connect(mapStateToProps, {
        addComment: actions.commentsActions.addComment,
        updateAudioSource: actions.commentsActions.updateAudioSource
    })(AddCommentForm)
);
