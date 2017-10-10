import React from 'react';
// Components
import AudioControlButtons from '../../../../AudioControls/AudioControlButtons';
import AudioPlayer from '../../../AudioPlayer/AudioPlayer';
import TrackBar from '../../../../AudioControls/TrackBar';
// HOC
import commentItemAudioButtons from '../../../../AudioControls/commentItemAudioButtons';

class CommentItemAudioPlayer extends commentItemAudioButtons {
    render() {
        const { comment, index } = this.props;
        const { audio } = comment;
        return (
            <div className="audio_wrapper">
                <AudioPlayer
                    audioWrapperClassName={`comment_player_${index}`}
                    audioPlayerId={`comment_audio_player_${index}`}
                />
                <AudioControlButtons
                    buttons={this.controlGlyphs}
                    audioSrcId={`comment_audio_player_${index}`}
                    src={audio}
                    isPlaying={this.state.isPlaying}
                />
                <TrackBar
                    audioPlayerId={`comment_audio_player_${index}`}
                    trackBarWrapperId={`comment_item_track_bar_${index}`}
                />
            </div>
        );
    }
}

export default CommentItemAudioPlayer;
