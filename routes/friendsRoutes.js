const mongoose = require('mongoose');

const Friend = mongoose.model('friends');

module.exports = app => {
    // the RIGHT way
    // app.get('/api/:userId/friends', (req, res) => {
    //     res.send('getting user friends for:', req.params.userId);
    // });
    // the DEMO way
    app.get('/api/friends', async (req, res) => {
        const friends = await Friend.find();

        res.send(friends);
    });
};
