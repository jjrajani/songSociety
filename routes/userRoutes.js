const mongoose = require('mongoose');

const User = mongoose.model('users');

module.exports = app => {
    app.post('/api/user', (req, res) => {
        User.update(
            {
                authId: req.body.sub
            },
            { authId: req.body.sub },
            { upsert: true }
        ).exec();
        res.send('creating or updating user');
    });
};
