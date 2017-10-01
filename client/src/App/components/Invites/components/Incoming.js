import React from 'react';
// Tools
import { connect } from 'react-redux';
// import * as actions from '../../../actions';
// components
import InviteItem from './InviteItem';

const Outgoing = ({ invites }) => {
    return (
        <div className="incoming col-xs-12">
            <div className="header">
                <h3>Incoming</h3>
            </div>
            <ul className="list">
                {invites.map((invite, i) => {
                    return (
                        <InviteItem key={i} invite={invite} incoming={true} />
                    );
                })}
            </ul>
        </div>
    );
};

function mapStateToProps({ invites }) {
    return { invites: invites.incoming };
}

export default connect(mapStateToProps)(Outgoing);
