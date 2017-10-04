import React from 'react';
import { Glyphicon } from 'react-bootstrap';

const OutgoingInvite = ({ invite }) =>
    <li className="col-xs-12 col-sm-6 col-md-4 list_item">
        <div className="buttons">
            <Glyphicon glyph="remove" title="Cancel Invite" />
        </div>
        <img src={invite.inviteeImg} alt={`${invite.inviteeName}'s avatar'`} />

        <p>
            Your invitation to {invite.inviteeName} to colaborate with you on {' '}
            {invite.workspace.name} is still pending.
        </p>
    </li>;

export default OutgoingInvite;
