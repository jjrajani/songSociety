import React from 'react';

const GroupItem = ({ group }) =>
    <li className="group">
        <img alt={group.name} src={group.img} />
        <p className="group_name">
            {group.name}
        </p>
    </li>;

export default GroupItem;
