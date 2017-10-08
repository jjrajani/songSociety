import React from 'react';
// Tools
import { connect } from 'react-redux';
import * as actions from '../../../actions';
// Components
import { Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ArtistItem = ({ auth, user, profile, addFollower }) => {
    const isAuthenticated = auth.isAuthenticated();
    let isFollowed = false;
    if (profile.profile.followers) {
        isFollowed = profile.profile.followers.indexOf(user.authId) !== -1;
    }
    return (
        <div className="list_item artist col-xs-12 col-sm-6 col-md-4">
            <Link to={`/artist/${user._id}`} className="link">
                <li>
                    <div className="info">
                        <img
                            src={user.img}
                            alt={`${user.nickname}'s avatar'`}
                        />
                        <h5>
                            {user.nickname}
                        </h5>
                    </div>
                </li>
            </Link>
            {isAuthenticated &&
                !isFollowed &&
                <div className="buttons">
                    <Glyphicon
                        glyph="plus"
                        title="Follow"
                        onClick={e => addFollower(profile.userId, user.authId)}
                    />
                </div>}
            {isAuthenticated &&
                isFollowed &&
                <div className="buttons">
                    <Glyphicon glyph="minus" title="Unfollow" />
                </div>}
        </div>
    );
};

function mapStateToProps({ auth, profile }) {
    return { auth, profile };
}

export default connect(mapStateToProps, {
    addFollower: actions.followersActions.addFollower
})(ArtistItem);
