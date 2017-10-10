import React from 'react';
// Tools
import { connect } from 'react-redux';
import * as actions from '../../../../../actions';
// Components
import CollaboratorItem from '../item/CollaboratorItem';

const ActiveCollaborators = ({ collaborators, users, filterCollaborators }) => {
    const activeCollaborators = filterCollaborators(
        users,
        null,
        'active',
        collaborators
    );
    return (
        <ul className="list col-xs-12">
            {activeCollaborators.map((user, i) => {
                return <CollaboratorItem key={i} user={user} />;
            })}
        </ul>
    );
};

function mapStateToProps({ collaborators, users }) {
    return { collaborators: collaborators.list, users };
}

export default connect(mapStateToProps, {
    filterCollaborators: actions.collaboratorsActions.filterCollaborators
})(ActiveCollaborators);
