import React from 'react';
// Tools
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// Components
import { Glyphicon } from 'react-bootstrap';
import PrivatiseWorkspace from '../../../../StripePay/PrivatiseWorkspace';

const UtilButtons = ({ history, auth, workspace, isPrivate, isChanged }) => {
    const isLoggedIn = auth.isAuthenticated();
    const workspaceId = workspace.project._id;
    return (
        <div className="util_buttons_wrapper">
            {isLoggedIn &&
                workspaceId &&
                isPrivate === false &&
                <PrivatiseWorkspace />}
            {isLoggedIn &&
                workspaceId &&
                isPrivate === true &&
                <i className="fa fa-lock" style={{ color: 'red' }} />}
            {isLoggedIn &&
                <button
                    type="submit"
                    form="title_input_form"
                    className={isChanged ? 'highlight' : ''}
                >
                    {isChanged === true && <span>Save changes</span>}
                    <Glyphicon title="Save Track" glyph="cloud-upload" />
                </button>}
            {isLoggedIn &&
                <a href={workspace.project.currentAudio}>
                    <Glyphicon title="Download Track" glyph="download-alt" />
                </a>}
        </div>
    );
};

function mapStateToProps({ auth, workspace }) {
    return {
        auth,
        isChanged: workspace.isTouched,
        workspace,
        isPrivate: workspace.project.isPrivate
    };
}

export default connect(mapStateToProps)(withRouter(UtilButtons));
