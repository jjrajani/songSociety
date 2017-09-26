import React from 'react';
import Groups from './components/Groups';

const Bio = ({ profile }) =>
    <div className="col-xs-12 col-sm-3 bio">
        <div className="top-left">
            <div className="row avatar_wrapper">
                <img className="avatar" src={profile.picture} alt="profile" />
            </div>
            <div className="row user_info">
                <h1>
                    {profile.name}
                </h1>
                <h3>
                    {profile.nickname}
                </h3>
                <p>
                    Bacon ipsum dolor amet drumstick veniam tail, minim ut
                    consectetur sunt quis cupim dolore. Sunt eu tri-tip
                    cupidatat aute boudin.
                </p>
            </div>
        </div>
        <Groups groups={profile.groups} />
    </div>;

export default Bio;
