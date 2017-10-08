require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_KEY);
const mongoose = require('mongoose');

const User = mongoose.model('users');
// const Project = mongoose.model('projects');

module.exports = app => {
    // POST Credits
    app.post('/api/stripe/getMoreStorage/:userId', async (req, res) => {
        const charge = await stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: '$5 per Month for 5GB',
            source: req.body.id
        });
        let user = await User.findById(req.params.userId);
        user.paid = true;
        user.storageSize += 5;
        user.save();

        res.status(200).send(user);
    });

    app.post('/api/stripe/privatiseProfile/:userId', async (req, res) => {
        const charge = await stripe.charges.create({
            amount: 100,
            currency: 'usd',
            description: '$1 per Month a private profile at TheLabz.com',
            source: req.body.id
        });
        let user = await User.findById(req.params.userId);
        user.isPrivate = true;
        user.save();
        res.status(200).send(user);
    });
};
