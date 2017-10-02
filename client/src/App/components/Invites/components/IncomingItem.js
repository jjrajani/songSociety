import React from 'react';
// Tools
import { connect } from 'react-redux';
import * as actions from '../../../actions';
// Components
import { Glyphicon } from 'react-bootstrap';

const IncomingInvite = ({ invite, userId, acceptInvite, declineInvite }) => {
    return (
        <li className="col-xs-12 col-sm-6 col-md-4 list_item">
            <div className="buttons">
                <Glyphicon
                    glyph="remove"
                    title="Decline Invite"
                    onClick={() => {
                        declineInvite(invite, userId);
                    }}
                />
                <Glyphicon
                    glyph="check"
                    title="Accept Invite"
                    onClick={() => {
                        acceptInvite(invite, userId);
                    }}
                />
            </div>
            <img
                src={invite.inviterImg}
                alt={`${invite.inviterName}'s avatar'`}
            />

            <p>
                {invite.inviterName} has invited you to collaborate on {' '}
                {invite.workspace.name}
            </p>
        </li>
    );
};

function mapStateToProps({ profile }) {
    return { userId: profile.profile._id };
}

export default connect(mapStateToProps, {
    acceptInvite: actions.inviteActions.acceptInvite,
    declineInvite: actions.inviteActions.declineInvite
})(IncomingInvite);
