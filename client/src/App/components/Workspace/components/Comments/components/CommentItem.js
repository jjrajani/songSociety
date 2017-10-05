import React, { Component } from 'react';
// Components
import { Glyphicon } from 'react-bootstrap';
import AudioControlButtons from '../../../AudioControls/AudioControlButtons';
// HOC
import commentItemAudioButtons from '../../../AudioControls/commentItemAudioButtons';

class CommentItem extends commentItemAudioButtons {
    render() {
        const { comment } = this.props;
        return (
            <div className="list_item col-xs-12 col-sm-8">
                <div className="left">
                    <img src={comment.userImg} alt="userImg" />
                    <p>
                        {comment.content}
                    </p>
                </div>
                <div className="right">
                    <AudioControlButtons
                        buttons={this.controlGlyphs}
                        audioSrcId={'comment_audio_player'}
                        src={comment.audio}
                    />
                </div>
            </div>
        );
    }
}

export default CommentItem;
