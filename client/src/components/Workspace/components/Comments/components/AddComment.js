import React, { Component } from 'react';
// Tools
import { connect } from 'react-redux';
import * as actions from '../../../../../actions';
import { withRouter } from 'react-router-dom';
// Components

class AddComment extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }

  // componentDidMount() {
  //     const { workspaceId } = this.props.match.params;
  //     if (workspaceId !== 'new') {
  //         
  //     }
  // }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleClick(event) {
    const { workspaceId } = this.props.match.params;
    let userId = this.props.getProfile().then((user) => {
      console.log(user);
      this.props.addComment(user.sub, this.state.value, null, workspaceId);
    });
  }

  render() {

    return (
      <div className="comments_wrapper">
        <input type="text" value={this.state.value}
          onChange={this.handleChange} />
        <div onClick={this.handleClick}>Add Comment</div>
      </div>
    );
  }
}



export default connect(null,
  {
    addComment: actions.commentsActions.addComment,
    getProfile: actions.authActions.getProfile
  })(withRouter(AddComment));
