import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import ArtistList from './components/ArtistList';

class Users extends Component {
    componentDidMount() {
        this.props.fetchUsers();
        this.props.fetchFollowers();
    }

    render() {
        return (
            <div className="container main_content users">
                <div className="header">
                    <h3>Artists</h3>
                </div>
                <ArtistList />
            </div>
        );
    }
}

function mapStateToProps({ users, followers }) {
    return { users, followers };
}

export default connect(mapStateToProps, {
    fetchUsers: actions.usersActions.fetchUsers,
    fetchFollowers: actions.followersActions.fetchFollowers
})(Users);
