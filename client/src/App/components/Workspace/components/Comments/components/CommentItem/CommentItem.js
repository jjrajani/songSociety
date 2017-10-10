import React from 'react';
// Components
import UtilsButtons from './UtilsButtons';
import CommentItemAudioPlayer from './AudioPlayer';

const CommentItem = ({ comment, index }) => {
    const hasAudio = comment.audio.length > 0;
    return (
        <div className="list_item col-xs-12 col-md-8">
            <div className="text_wrapper">
                <img src={comment.userImg} alt="userImg" />
                <p>
                    {comment.content}
                </p>
                {hasAudio && <UtilsButtons comment={comment} />}
            </div>
            {hasAudio &&
                <CommentItemAudioPlayer comment={comment} index={index} />}
        </div>
    );
};

export default CommentItem;
