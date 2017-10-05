import React from 'react';
// Components
import AudioControlButtons from '../../../AudioControls/AudioControlButtons';
import AudioPlayer from '../../AudioPlayer/AudioPlayer';

// HOC
import commentItemAudioButtons from '../../../AudioControls/commentItemAudioButtons';

class CommentItem extends commentItemAudioButtons {
    render() {
        const { comment, i } = this.props;
        return (
            <div className="list_item col-xs-12 col-md-8">
                <div className="text_wrapper">
                    <img src={comment.userImg} alt="userImg" />
                    <p>
                        {comment.content}
                    </p>
                </div>
                <div className="audio_wrapper">
                    <AudioPlayer
                        audioWrapperClassName={`comment_player_${i}`}
                        audioPlayerId={`comment_audio_player_${i}`}
                    />
                    <AudioControlButtons
                        buttons={this.controlGlyphs}
                        audioSrcId={`comment_audio_player_${i}`}
                        src={comment.audio}
                        isPlaying={this.state.isPlaying}
                    />
                </div>
            </div>
        );
    }
}

export default CommentItem;
