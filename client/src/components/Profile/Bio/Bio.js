import React from 'react';
import GroupList from './components/GroupList';
import { connect } from 'react-redux';

const Bio = ({ profile }) => {
    const { avatar, name, nickname } = profile;
    return (
        <div className="col-xs-12 col-sm-3 bio">
            <div className="top-left">
                <div className="row avatar_wrapper">
                    <img className="avatar" src={avatar} alt="profile pic" />
                </div>
                <div className="row user_info">
                    <h1>
                        {name}
                    </h1>
                    <h3>
                        {nickname}
                    </h3>
                    <p>
                        Bacon ipsum dolor amet drumstick veniam tail, minim ut
                        consectetur sunt quis cupim dolore. Sunt eu tri-tip
                        cupidatat aute boudin.
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
