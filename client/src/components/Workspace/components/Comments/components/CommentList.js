import React from 'react';
// Tools
import { connect } from 'react-redux';
// Components
import CommentItem from './CommentItem';

const CommentList = ({ list }) => {
    return (
        <div className="comments_list_wrapper">
            <ul className="comments list">
                {list.map((l, i) => {
                    return <CommentItem comment={l} key={i} />;
                })}
            </ul>
        </div>
    );
};

function mapStateToProps({ comments }) {
    return { list: comments.list };
}

export default connect(mapStateToProps)(CommentList);
