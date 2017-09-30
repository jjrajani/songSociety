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
    addCollaborator,
    removeCollaborator
}) => {
    const { userId } = profile;
    return (
        userId !== user.authId &&
        <li>
            <div className="info">
                <img src={user.img} alt={`${user.nickname}'s avatar'`} />
                <h5>
                    {user.nickname}
                </h5>
            </div>
            <div className="buttons">
                {collaborators.indexOf(user.authId) === -1 &&
                    <Glyphicon
                        glyph="plus"
                        onClick={e => {
                            e.stopPropagation();
                            addCollaborator(workspace.project._id, user.authId);
                        }}
                    />}
                {active === true &&
                    <Glyphicon
                        glyph="remove-circle"
                        onClick={e => {
                            e.stopPropagation();
                            removeCollaborator(
                                workspace.project._id,
                                user.authId
                            );
                        }}
                    />}
            </div>
        </li>
    );
};

function mapStateToProps({ profile, workspace, collaborators }) {
    return { profile, workspace, collaborators: collaborators.list };
}

export default connect(mapStateToProps, {
    addCollaborator: actions.collaboratorsActions.addCollaborator,
    removeCollaborator: actions.collaboratorsActions.removeCollaborator
})(ArtistItem);
