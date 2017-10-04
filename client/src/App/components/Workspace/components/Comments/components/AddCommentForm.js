import React from 'react';
// Tools
import { connect } from 'react-redux';
import * as actions from '../../../../../actions';
import { reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
// Components
import { Field } from 'redux-form';
import { CommentTextarea, CommentAudioInput, validate } from './Form/Fields';

const AddCommentForm = ({
    profile,
    updateAudioSource,
    addComment,
    form,
    handleSubmit,
    showAudioControls,
    match
}) => {
    let handleFileUpload = event => {
        const file = event.target.files[0];
        let src = URL.createObjectURL(file);
        updateAudioSource(src);
        showAudioControls();
    };
    const { workspaceId } = match.params;
    return (
        <form
            id="add_comment_form"
            onSubmit={handleSubmit(
                addComment.bind(this, profile.profile._id, workspaceId)
            )}
        >
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

function mapStateToProps({ form, profile }) {
    return { form: form.commentForm, profile };
}

export default reduxForm({ form: 'commentForm', validate })(
    connect(mapStateToProps, {
        addComment: actions.commentsActions.addComment,
        updateAudioSource: actions.commentsActions.updateAudioSource
    })(withRouter(AddCommentForm))
);
