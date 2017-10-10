import React from 'react';

const CommentTextarea = fields => {
    return (
        <div>
            <textarea
                {...fields.input}
                type="textarea"
                name="content"
                id="content"
                className="comment_content"
            />
            <div
                className={
                    fields.meta.touched && fields.meta.error
                        ? 'invalid_warning'
                        : 'invalid_warning_hidden'
                }
            >
                {fields.meta.touched && fields.meta.error}
            </div>
        </div>
    );
};

const CommentAudioInput = fields => {
    return (
        <div>
            <input
                type="file"
                id="selected_file"
                className="display_none"
                onChange={fields.input.onChange}
                accept="audio/*"
            />
        </div>
    );
};

function validate(values) {
    const errors = {};

    if (!values.content && !values.selected_file) {
        errors['content'] = 'You must either leave a comment or upload audio.';
    }
    return errors;
}

export { CommentTextarea, CommentAudioInput, validate };
