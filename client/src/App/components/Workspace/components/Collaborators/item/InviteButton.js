import React from 'react';
// Tools
import { connect } from 'react-redux';
import * as actions from '../../../../../actions';
// Components
import { Glyphicon } from 'react-bootstrap';

const InviteButon = ({
    profileId,
    workspaceId,
    inviteeId,
    inviteCollaborator
}) =>
    <div className="buttons">
        <Glyphicon
            glyph="plus"
            onClick={e => {
                e.stopPropagation();
                inviteCollaborator(
                    profileId, // logged in user id
                    workspaceId,
                    inviteeId // collaborator to invite id
                );
            }}
        />
    </div>;

export default connect(null, {
    inviteCollaborator: actions.inviteActions.inviteCollaborator
})(InviteButon);
