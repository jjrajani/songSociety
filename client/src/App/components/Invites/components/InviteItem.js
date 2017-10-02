import React from 'react';
// Tools
import { connect } from 'react-redux';
// import * as actions from '../../../actions';

const InviteItem = ({ invite, incoming }) => {
    console.log('invite item', invite);
    console.log('incoming', incoming);
    return incoming === true
        ? <div className="col-xs-12">
              <img src={invite.user.img} alt={`${invite.user}'s avatar'`} />
              <p>
                  {invite.user.nickname} has invited you to collaborate on{' '}
                  {invite.workspace.name}
              </p>
          </div>
        : <div className="col-xs-12">
              <img src={invite.user.img} />
              <p>
                  Your invitation to {invite.user.nickname} to colaborate with
                  you on {invite.workspace.name} is still pending.
              </p>
          </div>;
};

export default connect(null)(InviteItem);
