import React from 'react';
// Tools
import { connect } from 'react-redux';
import * as actions from '../../../../../../../actions';
import { reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
// Components
import { Field } from 'redux-form';
import { CommentTextarea, CommentAudioInput, validate } from './Fields';

import addCommentAudioButtons from '../../../../../AudioControls/addCommentAudioButtons';

class AddCommentForm extends addCommentAudioButtons {
    constructor(props) {
        super(props);
        this.trackBarWrapperId = 'add_comment_track_bar_wrapper';
    }
    handleFileUpload = e => {
        const file = e.target.files[0];
        let src = URL.createObjectURL(file);
        this.props.updateAudioSource(src);
        this.showAudioControls(); // extends from addCommentAudioButtons
    };
    myHandleSubmit = values => {
        const { workspaceId } = this.props.match.params;
        const profileId = this.props.profile.profile._id;
        this.props.addComment(profileId, workspaceId, values);
        this.props.reset(); // extends from redux-form
    };
    render() {
        const { handleSubmit } = this.props;
        return (
            <form
                id="add_comment_form"
                onSubmit={handleSubmit(this.myHandleSubmit)}
            >
                <Field
                    type="textarea"
                    name="content"
                    component={CommentTextarea}
                />
                <Field
                    type="file"
                    name="selected_file"
                    onChange={e => this.handleFileUpload(e)}
                    component={CommentAudioInput}
                />
            </form>
        );
    }
}

function mapStateToProps({ profile }) {
    return { profile };
}

export default reduxForm({ form: 'commentForm', validate })(
    connect(mapStateToProps, {
        addComment: actions.commentsActions.addComment,
        updateAudioSource: actions.commentsActions.updateAudioSource
    })(withRouter(AddCommentForm))
);
