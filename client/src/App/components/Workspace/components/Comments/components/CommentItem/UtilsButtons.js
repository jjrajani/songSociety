import React from 'react';
//Tools
import { connect } from 'react-redux';
import * as actions from '../../../../../../actions';
// Components
import { Glyphicon } from 'react-bootstrap';

const UtilsButtons = ({ workspace, comment, promoteAudio }) => {
    const { audio, isPromoted } = comment;
    const projectId = workspace.project._id;
    return (
        <div className="utils">
            <Glyphicon
                onClick={() => promoteAudio(projectId, comment._id, audio)}
                className={isPromoted ? 'promoted' : ''}
                title="Promote Track"
                glyph="pushpin"
            />
            <a href={audio}>
                <Glyphicon title="Download Track" glyph="download-alt" />
            </a>
        </div>
    );
};

function mapStateToProps({ workspace }) {
    return { workspace };
}
export default connect(mapStateToProps, {
    promoteAudio: actions.workspaceActions.promoteAudio
})(UtilsButtons);
