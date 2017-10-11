import React from 'react';
// Tools
import { connect } from 'react-redux';
// Components
import CommentItem from './CommentItem/CommentItem';

const CommentList = ({ comments }) => {
    return (
        <div className="comments_list_wrapper">
            <ul className="comments list">
                {comments.list.map((l, i) => {
                    return <CommentItem comment={l} key={i} index={i} />;
                })}
            </ul>
        </div>
    );
};

function mapStateToProps({ comments }) {
    return { comments };
}

export default connect(mapStateToProps)(CommentList);