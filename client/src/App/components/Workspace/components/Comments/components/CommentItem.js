import React, { Component } from 'react';
// Tools
import { connect } from 'react-redux';
import * as actions from '../../../../../actions';
// Components
import { Glyphicon } from 'react-bootstrap';

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
                <div className="left">
                    <img src={comment.img} alt="userImg" />
                    <p>
                        {comment.content}
                    </p>
                </div>
                <div className="right">
                    {comment.audio && comment.audio.length > 0 &&
                        <Glyphicon
                            glyph="play"
                            onClick={this.playAudio.bind(this)}
                        />}
                </div>
            </div>
        );
    }
}

export default connect(null, {
    playAudio: actions.workspaceActions.playAudio
})(CommentItem);
