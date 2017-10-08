import React from 'react';
// Tools
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../../actions';
// Components
import PrivatiseProfile from '../../StripePay/PrivatiseProfile';

const Bio = ({ profile, history }) => {
    const {
        img,
        description,
        name,
        email,
        website,
        nickname,
        isPrivate
    } = profile.profile;
    const isArtistRoute = history.location.pathname.split('/')[1] === 'artist';
    return (
        <div className="col-xs-12 col-sm-3 bio">
            <div className="top-left">
                <div className="row avatar_wrapper">
                    <img className="avatar" src={img} alt="profile pic" />
                </div>
                <div className="row user_info">
                    <h1>
                        {name}
                    </h1>
                    <h3>
                        {nickname}
                    </h3>
                    <h5>
                        {email}
                    </h5>
                    <h5>
                        {website}
                    </h5>
                    <p>
                        {description}
                    </p>
                </div>
            </div>
            {!isArtistRoute &&
                isPrivate === false &&
                <div className="stripe_pay">
                    <PrivatiseProfile />
                </div>}
            {!isArtistRoute &&
                isPrivate === true &&
                <div className="stripe_pay">Your profile is private</div>}
        </div>
    );
};

function mapStateToProps({ profile }) {
    return { profile };
}

export default connect(mapStateToProps)(withRouter(Bio));
