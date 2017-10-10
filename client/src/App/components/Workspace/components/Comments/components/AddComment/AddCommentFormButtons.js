import React from 'react';
// Components
import { Glyphicon } from 'react-bootstrap';
// HOC
import addCommentAudioButtons from '../../../../AudioControls/addCommentAudioButtons';

const AddCommentFormButtons = () =>
    <div className="submit_form_button">
        <button
            type="submit"
            form="add_comment_form"
            className="btn btn-danger add_comment"
        >
            Add Comment{' '}
        </button>
        <div className="upload_track_button">
            <label htmlFor="selected_file">
                <Glyphicon glyph="cd" title="Upload Track" />
            </label>
        </div>
    </div>;

export default AddCommentFormButtons;
