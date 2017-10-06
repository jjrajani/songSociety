require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_KEY);
const mongoose = require('mongoose');

const User = mongoose.model('users');

module.exports = app => {
    // POST Credits
    app.post('/api/stripe/:userId', async (req, res) => {
        const charge = await stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: '$5 per Month for 5GB',
            source: req.body.id
        });
        let user = await User.find({ authId: req.params.userId });
        user = user[0];
        user.paid = true;
        user.storageSize += 5;
        user.save();

        res.status(200).send(user);
    });
};
