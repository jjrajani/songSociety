import React from 'react';
// Tools
import { connect } from 'react-redux';
// Components
import { Glyphicon } from 'react-bootstrap';
import InviteButton from './InviteButton';

function hasInvitation(inviteeId, invitedArray) {
    let invited = false;
    invitedArray.forEach(invite => {
        if (invite.inviteeId === inviteeId) invited = true;
    });
    return invited;
}

const CollaboratorItem = ({ profile, user, workspace, collaborators }) => {
    const { userId } = profile;
    const notCollaborating = collaborators.indexOf(user._id) === -1;
    const isInvited = hasInvitation(user._id, profile.profile.invites.outgoing);
    const canInvite = notCollaborating && !isInvited;
    const hasPendingInvite = notCollaborating && isInvited;
    return (
        userId !== user.authId &&
        <li className="col-xs-6 col-sm-4 col-lg-3 list_item">
            {canInvite &&
                <InviteButton
                    profileId={profile.profile._id}
                    workspaceId={workspace.project._id}
                    inviteeId={user._id}
                />}
            {hasPendingInvite &&
                <div className="buttons">
                    <Glyphicon glyph="check" />
                </div>}

            <div className="info">
                <div className="img_wrapper">
                    <img src={user.img} alt={`${user.nickname}'s avatar'`} />
                </div>
                <h5>
                    {user.nickname}
                </h5>
            </div>
        </li>
    );
};

function mapStateToProps({ profile, workspace, collaborators }) {
    return { profile, workspace, collaborators: collaborators.list };
}

export default connect(mapStateToProps)(CollaboratorItem);
