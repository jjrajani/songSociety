import React from 'react';
// Tools
import { connect } from 'react-redux';
import * as actions from '../../../../../actions';
// Components
import AudioControlButtons from '../../../AudioControls/AudioControlButtons';
import Visualizer from '../../Visualizer/Visualizer';
import AudioPlayer from '../../AudioPlayer/AudioPlayer';

// HOC
import commentItemAudioButtons from '../../../AudioControls/commentItemAudioButtons';

class CommentItem extends commentItemAudioButtons {
    render() {
        const { comment, i } = this.props;
        return (
            <div className="list_item col-xs-12 col-sm-8">
                <div className="left">
                    <img src={comment.userImg} alt="userImg" />
                    <p>
                        {comment.content}
                    </p>
                </div>
                <div className="right">
                    <AudioControlButtons
                        buttons={this.controlGlyphs}
                        audioSrcId={`comment_audio_player_${i}`}
                        src={comment.audio}
                    />
                    <AudioPlayer
                        audioWrapperClassName={`comment_player_${i}`}
                        audioPlayerId={`comment_audio_player_${i}`}
                    />
                    <Visualizer
                        audioPlayer={`comment_audio_player_${i}`}
                        canvasId={`comment_item_canvas_${i}`}
                        canvasWrapperId={`comment_item_canvas_wrapper_${i}`}
                    />
                </div>
            </div>
        );
    }
}

export default CommentItem;
