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

class StripePay extends Component {
    render() {
        const { userId } = this.props.profile;
        const { paid, storageSize } = this.props.profile.profile;
        return (
            <StripeCheckout
                amount={500}
                name="Emaily"
                description={
                    storageSize > 0
                        ? `Get 5 more GB for $5 a month`
                        : '$5 a month for 5GB of storage'
                }
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
                token={token => this.props.handleToken(userId, token)}
            >
                <button className="btn">
                    {paid ? `Get More Storage` : 'Upgrade You Account'}
                </button>
            </StripeCheckout>
        );
    }
}

function mapStateToProps({ profile }) {
    return { profile };
}

export default connect(mapStateToProps, {
    handleToken: actions.stripeActions.handleToken
})(StripePay);
