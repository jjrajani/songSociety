import React from 'react';
// Components
import { Glyphicon } from 'react-bootstrap';

const UploadTrackButton = () =>
    <div className="upload_track_button">
        <label htmlFor="selectedFile">
            <Glyphicon glyph="cd" title="Upload Track" />
        </label>
        <div id="loading_wrapper">
            <div id="status_bar" />
            <span id="progress_count" />
        </div>
    </div>;

export default UploadTrackButton;
// <div id="play_button">
//     <Glyphicon glyph="play" title="Preview Track" />
// </div>
