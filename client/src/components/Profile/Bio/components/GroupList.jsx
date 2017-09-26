import React, { Component } from 'react';
import GroupItem from './GroupItem';
import { connect } from 'react-redux';
import * as actions from '../../../../actions';

class GroupList extends Component {
    componentDidMount() {
        this.props.fetchGroups();
    }

    render() {
        return (
            <div className="groups_wrapper">
                <h3>Groups</h3>
                <ul className="groups">
                    {this.props.groups.map(group => {
                        return <GroupItem key={group.name} group={group} />;
                    })}
                </ul>
            </div>
        );
    }
}

function mapStateToProps({ groups }) {
    return { groups };
}

export default connect(mapStateToProps, {
    fetchGroups: actions.groupsActions.fetchGroups
})(GroupList);
