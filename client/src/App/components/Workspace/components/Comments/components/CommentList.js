import React from 'react';
// Tools
import { connect } from 'react-redux';
// Components
import CommentItem from './CommentItem';
import AudioPlayer from '../../AudioPlayer/AudioPlayer';

const CommentList = ({ list, currentAudio }) => {
    return (
        <div className="comments_list_wrapper">
            <AudioPlayer
                currentAudio={currentAudio}
                audioWrapperClassName="comment_player"
                audioPlayerId="comment_audio_player"
            />
            <ul className="comments list">
                {list.map((l, i) => {
                    return <CommentItem comment={l} key={i} />;
                })}
            </ul>
        </div>
    );
};

function mapStateToProps({ comments }) {
    return { list: comments.list, currentAudio: comments.currentAudio };
}

export default connect(mapStateToProps)(CommentList);
