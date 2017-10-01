import React from 'react';
// Tools
import { connect } from 'react-redux';
import * as actions from '../../../../actions';
// Components
import { Glyphicon } from 'react-bootstrap';

const ArtistItem = ({
    active,
    profile,
    user,
    workspace,
    collaborators,
    inviteCollaborator,
    removeCollaborator
}) => {
    const { userId } = profile;
    console.log(profile.profile._id);
    return (
        userId !== user.authId &&
        <li className="col-xs-6 col-sm-4 col-lg-3 list_item">
            {collaborators.indexOf(user.authId) === -1 &&
                <div className="buttons">
                    <Glyphicon
                        glyph="plus"
                        onClick={e => {
                            e.stopPropagation();
                            inviteCollaborator(
                                profile.profile._id,
                                user._id,
                                workspace.project._id
                            );
                        }}
                    />
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

export default connect(mapStateToProps, {
    inviteCollaborator: actions.collaboratorsActions.inviteCollaborator,
    removeCollaborator: actions.collaboratorsActions.removeCollaborator
})(ArtistItem);
