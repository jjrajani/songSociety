import React from 'react';
// Tools
import { connect } from 'react-redux';
// Components
import GroupList from './components/GroupList';

const Bio = ({ profile }) => {
    const {
        img,
        description,
        name,
        email,
        website,
        nickname
    } = profile.profile;
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
            <GroupList />
        </div>
    );
};

function mapStateToProps({ profile }) {
    return { profile };
}

export default connect(mapStateToProps)(Bio);
