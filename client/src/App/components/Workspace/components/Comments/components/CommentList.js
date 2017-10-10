import React from 'react';
// Tools
import { connect } from 'react-redux';
// Components
import CommentItem from './CommentItem';

const CommentList = ({ comments, currentAudio }) => {
    return (
        <div className="comments_list_wrapper">
            <ul className="comments list">
                {comments.list.map((l, i) => {
                    return (
                        <CommentItem
                            comment={l}
                            key={i}
                            i={i}
                            currentAudio={currentAudio}
                        />
                    );
                })}
            </ul>
        </div>
    );
};

function mapStateToProps({ comments, workspace }) {
    return {
        comments: comments,
        currentAudio: workspace.project.currentAudio
    };
}

export default connect(mapStateToProps)(CommentList);
