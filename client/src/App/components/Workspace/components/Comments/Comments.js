import React, { Component } from 'react';
// Tools
import { connect } from 'react-redux';
import * as actions from '../../../../actions';
import { withRouter } from 'react-router-dom';
// Components
import CommentList from './components/CommentList';
import AddComment from './components/AddComment';

class Comments extends Component {
    componentDidMount() {
        const { workspaceId } = this.props.match.params;
        if (workspaceId !== 'new') {
            this.props.fetchComments(workspaceId);
        }
    }
    render() {
        return (
            <div className="comments_wrapper">
                <div className="header">
                    <h3>Comments</h3>
                    <AddComment />
                </div>
                <CommentList />
            </div>
        );
    }
}

export default connect(null, {
    fetchComments: actions.commentsActions.fetchComments
})(withRouter(Comments));
