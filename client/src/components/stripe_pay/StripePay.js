import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import StripeCheckout from 'react-stripe-checkout';

/*
  Test Mode Fake Credit Card Number
  4242 4242 4242 4242
*/

class StripePay extends Component {
  render() {
    return (
      <StripeCheckout
        amount={500}
        name="Emaily"
        description="$5 for 5 Email Credits"
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        token={token => this.props.handleToken(token)}
      >
        <button className="btn">Add Credits</button>
      </StripeCheckout>
    );
  }
}

export default connect(null, { handleToken: actions.authActions.handleToken })(
  StripePay
);
