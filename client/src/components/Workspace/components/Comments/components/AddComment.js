import React, { Component } from 'react';
// Tools
import { connect } from 'react-redux';
import * as actions from '../../../../../actions';
import { withRouter } from 'react-router-dom';
import aws from '../../../../../utils/aws';
// Components
import { Glyphicon } from 'react-bootstrap';
import FileInput from 'react-file-input';

class AddComment extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleFileUpload = this.handleFileUpload.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleClick(event) {
        const { workspaceId } = this.props.match.params;
        this.props.getProfile().then(user => {
            this.props.addComment(
                user.sub,
                this.state.value,
                null,
                workspaceId
            );
        });
    }

    handleFileUpload(event) {
        // console.log('Selected file:', event.target.files[0]);
        aws.upload('bob', event.target.files[0], this.props.getIdToken());
    }

    render() {
        return (
            <div className="comments_wrapper">
                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <div onClick={this.handleClick}>Add Comment</div>
                <FileInput
                    name="myImage"
                    accept=".png,.gif"
                    onChange={this.handleFileUpload}
                />
                <input
                    type="file"
                    id="selectedFile"
                    onChange={this.handleFileUpload}
                    className="hidden"
                />
                <label htmlFor="selectedFile">
                    <Glyphicon glyph="cloud-upload" />
                </label>
            </div>
        );
    }
}

export default connect(null, {
    addComment: actions.commentsActions.addComment,
    getProfile: actions.authActions.getProfile,
    getIdToken: actions.authActions.getIdToken
})(withRouter(AddComment));
