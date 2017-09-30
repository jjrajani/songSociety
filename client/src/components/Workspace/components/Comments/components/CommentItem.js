import React, { Component } from 'react';
// Tools
import { connect } from 'react-redux';
import * as actions from '../../../../../actions';
// Components

class CommentItem extends Component {
    playAudio(e) {
        e.stopPropagation();
        this.props.playAudio('its a fake audio id').then(res => {
            const player = document.getElementById('workspace_audio_player');
            player.pause();
            player.currentTime = 0;
            player.play();
        });
    }
    render() {
        const { comment } = this.props;
        return (
            <div className="list_item">
                <img src={comment.img} alt="userImg" />
                <p>
                    {comment.content}
                </p>
                {comment.audio.length > 0 &&
                    <p onClick={this.playAudio.bind(this)}>Play</p>}
            </div>
        );
    }
}

export default connect(null, {
    playAudio: actions.workspaceActions.playAudio
})(CommentItem);
