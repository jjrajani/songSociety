import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import UserList from './components/UserList';

class Users extends Component {
    componentDidMount() {
        this.props.fetchUsers();
        this.props.fetchFriends();
    }

    render() {
        console.log('users', this.props.users);
        return (
            <div className="container main_content users">
                <div className="header">
                    <h3>Artists</h3>
                </div>
                <UserList />
            </div>
        );
    }
}

function mapStateToProps({ users, friends }) {
    return { users, friends };
}

export default connect(mapStateToProps, {
    fetchUsers: actions.usersActions.fetchUsers,
    fetchFriends: actions.friendsActions.fetchFriends
})(Users);
