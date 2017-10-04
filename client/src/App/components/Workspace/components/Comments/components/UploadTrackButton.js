import React from 'react';
// Components
import { Glyphicon } from 'react-bootstrap';

const UploadTrackButton = () =>
    <div className="upload_track_button">
        <label htmlFor="selected_file">
            <Glyphicon glyph="cd" title="Upload Track" />
        </label>
    </div>;

export default UploadTrackButton;
