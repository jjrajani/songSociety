import React, { Component } from 'react';
// Tools
import { connect } from 'react-redux';
import * as actions from '../../actions';
// Components
import StripeCheckout from 'react-stripe-checkout';

/*
  Test Mode Fake Credit Card Number
  4242 4242 4242 4242
*/

class PrivatiseWorkspace extends Component {
    render() {
        const workspaceId = this.props.workspaceId;
        console.log('workspaceId', workspaceId);
        return (
            <StripeCheckout
                amount={100}
                name="The Labz"
                description={'$1 per month to Privatise this Workspace'}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
                token={token =>
                    this.props.privatiseWorkspace(workspaceId, token)}
            >
                <button title="Privatise Workspace">
                    <i className="fa fa-unlock" style={{ color: 'red' }} />
                </button>
            </StripeCheckout>
        );
    }
}

function mapStateToProps({ workspace }) {
    return { workspaceId: workspace.project._id };
}

export default connect(mapStateToProps, {
    privatiseWorkspace: actions.stripeActions.privatiseWorkspace
})(PrivatiseWorkspace);
