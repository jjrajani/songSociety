import React from 'react';
import UserItem from './UserItem';
import { connect } from 'react-redux';

const UserList = ({ users }) => {
    return (
        <ul className="list row">
            {users.map((user, i) => {
                return <UserItem key={i} user={user} />;
            })}
        </ul>
    );
};

function mapStateToProps({ users }) {
    return { users };
}

export default connect(mapStateToProps, {})(UserList);
