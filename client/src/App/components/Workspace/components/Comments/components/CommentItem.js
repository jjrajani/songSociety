import React from 'react';
//Tools
import { connect } from 'react-redux';
import * as actions from '../../../../../actions';
// Components
import AudioControlButtons from '../../../AudioControls/AudioControlButtons';
import AudioPlayer from '../../AudioPlayer/AudioPlayer';
import { Glyphicon } from 'react-bootstrap';
import TrackBar from '../../../AudioControls/TrackBar';
// HOC
import commentItemAudioButtons from '../../../AudioControls/commentItemAudioButtons';

class CommentItem extends commentItemAudioButtons {
    render() {
        const { comment, i, currentAudio, workspace } = this.props;
        return (
            <div className="list_item col-xs-12 col-md-8">
                <div className="text_wrapper">
                    <img src={comment.userImg} alt="userImg" />
                    <p>
                        {comment.content}
                    </p>
                    {comment.audio.length > 0 &&
                        <div className="utils">
                            <Glyphicon
                                onClick={() =>
                                    this.props.promoteAudio(
                                        workspace.project._id,
                                        comment.audio
                                    )}
                                className={
                                    comment.audio === currentAudio &&
                                    currentAudio !== ''
                                        ? 'promoted'
                                        : ''
                                }
                                title="Promote Track"
                                glyph="pushpin"
                            />
                            <a href={comment.audio}>
                                <Glyphicon
                                    title="Download Track"
                                    glyph="download-alt"
                                />
                            </a>
                        </div>}
                </div>
                {comment.audio.length > 0 &&
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
                        <TrackBar
                            audioPlayerId={`comment_audio_player_${i}`}
                            trackBarWrapperId={`comment_item_track_bar_${i}`}
                        />
                    </div>}
            </div>
        );
    }
}
function mapStateToProps({ workspace }) {
    return { workspace };
}
export default connect(mapStateToProps, {
    promoteAudio: actions.workspaceActions.promoteAudio
})(CommentItem);
