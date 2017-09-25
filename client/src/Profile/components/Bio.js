import React from 'react';

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
                <p>lorem ipsum is the latin version to fill this crap </p>
            </div>
        </div>
        <div className="groups_wraper">
            <h3>Groups</h3>
            <ul className="groups">
                {profile.groups &&
                    Object.keys(profile.groups).map(k => {
                        const group = profile.groups[k];
                        return (
                            <li key={group.name} className="group">
                                <img alt={group.name} src={group.img} />
                                <p className="group_name">
                                    {group.name}
                                </p>
                            </li>
                        );
                    })}
            </ul>
        </div>
    </div>;

export default Bio;
