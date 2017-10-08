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

class PrivatiseProfile extends Component {
    render() {
        const userId = this.props.profile.profile._id;
        return (
            <StripeCheckout
                amount={500}
                name="The Labz"
                description={'Privatise Profile'}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
                token={token => this.props.privatiseProfile(userId, token)}
            >
                <button className="btn">Privatise Profile</button>
            </StripeCheckout>
        );
    }
}

function mapStateToProps({ profile }) {
    return { profile };
}

export default connect(mapStateToProps, {
    privatiseProfile: actions.stripeActions.privatiseProfile
})(PrivatiseProfile);
