import React from 'react';
// Tools
import { connect } from 'react-redux';
// Components
import OutgoingItem from './OutgoingItem';

const OutgoingList = ({ invites }) => {
    return (
        <div className="outgoing col-xs-12">
            <div className="header">
                <h3>Outgoing</h3>
            </div>
            <ul className="list">
                {invites.map((invite, i) => {
                    return <OutgoingItem key={i} invite={invite} />;
                })}
            </ul>
        </div>
    );
};

function mapStateToProps({ invites }) {
    return { invites: invites.outgoing };
}

export default connect(mapStateToProps)(OutgoingList);
