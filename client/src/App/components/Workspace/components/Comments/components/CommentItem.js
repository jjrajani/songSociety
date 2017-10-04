import React, { Component } from 'react';
// Components
import { Glyphicon } from 'react-bootstrap';

class CommentItem extends Component {
    playAudio(comment) {
        const player = document.getElementById('comment_audio_player');
        player.crossOrigin = 'anonymous';
        player.src = comment.audio;
        player.pause();
        player.currentTime = 0;
        player.play();
    }
    render() {
        const { comment } = this.props;
        return (
            <div className="list_item">
                <div className="left">
                    <img src={comment.userImg} alt="userImg" />
                    <p>
                        {comment.content}
                    </p>
                </div>
                <div className="right">
                    {comment.audio &&
                        comment.audio.length > 0 &&
                        <Glyphicon
                            glyph="play"
                            onClick={this.playAudio.bind(this, comment)}
                        />}
                </div>
            </div>
        );
    }
}

export default CommentItem;
