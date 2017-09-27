import React from 'react';
import GroupItem from './GroupItem';
import { connect } from 'react-redux';

const GroupList = ({ groups }) =>
    <div className="groups_wrapper">
        <h3>Groups</h3>
        <ul className="groups">
            {groups.map(group => {
                return <GroupItem key={group.name} group={group} />;
            })}
        </ul>
    </div>;

function mapStateToProps({ groups }) {
    return { groups };
}

export default connect(mapStateToProps)(GroupList);
