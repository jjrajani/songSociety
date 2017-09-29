import React from 'react';
// Tools
import { connect } from 'react-redux';
import * as actions from '../../../actions';
// Components
import { Glyphicon } from 'react-bootstrap';

const UserItem = ({ user, profile, addFriend }) => {
    console.log('user', user);
    console.log('profile', profile);
    return (
        <li className="list_item col-xs-12 col-sm-6 col-md-4 ">
            <div className="info">
                <img src={user.img} alt={`${user.nickname}'s avatar'`} />
                <h5>
                    {user.nickname}
                </h5>
            </div>
            <div className="buttons">
                <Glyphicon
                    glyph="plus"
                    onClick={() => {
                        addFriend(profile.userId, user.authId);
                    }}
                />
            </div>
        </li>
    );
};

function mapStateToProps({ profile }) {
    return { profile };
}

export default connect(mapStateToProps, {
    addFriend: actions.friendsActions.addFriend
})(UserItem);
