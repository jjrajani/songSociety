import React from 'react';
// Tools
import { connect } from 'react-redux';
// components
import IncomingItem from './IncomingItem';

const IncomingList = ({ invites }) => {
    return (
        <div className="incoming col-xs-12">
            <div className="header">
                <h3>Incoming</h3>
            </div>
            <ul className="list">
                {invites.map((invite, i) => {
                    return <IncomingItem key={i} invite={invite} />;
                })}
            </ul>
        </div>
    );
};

function mapStateToProps({ invites }) {
    return { invites: invites.incoming };
}

export default connect(mapStateToProps)(IncomingList);
