import React from 'react';
import GroupItem from './GroupItem';

const GroupList = ({ groups }) =>
    <div className="groups_wrapper">
        <h3>Groups</h3>
        <ul className="groups">
            {groups &&
                Object.keys(groups).map(k => {
                    const group = groups[k];
                    return <GroupItem key={group.name} group={group} />;
                })}
        </ul>
    </div>;

export default GroupList;
