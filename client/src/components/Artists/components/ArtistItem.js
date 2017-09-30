import React from 'react';
// Tools
import { connect } from 'react-redux';
import * as actions from '../../../actions';
// Components
import { Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ArtistItem = ({ auth, user, profile, addFriend }) => {
    const isAuthenticated = auth.isAuthenticated();
    return (
        <Link
            to={`/artist/${user._id}`}
            className="list_item col-xs-12 col-sm-6 col-md-4"
        >
            <li>
                <div className="info">
                    <img src={user.img} alt={`${user.nickname}'s avatar'`} />
                    <h5>
                        {user.nickname}
                    </h5>
                </div>
                {isAuthenticated &&
                    <div className="buttons">
                        <Glyphicon
                            glyph="plus"
                            onClick={e => {
                                e.stopPropagation();
                                addFriend(profile.userId, user.authId);
                            }}
                        />
                    </div>}
            </li>
        </Link>
    );
};

function mapStateToProps({ auth, profile }) {
    return { auth, profile };
}

export default connect(mapStateToProps, {
    addFriend: actions.friendsActions.addFriend
})(ArtistItem);
