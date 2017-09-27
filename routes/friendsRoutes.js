const mongoose = require('mongoose');

const Friend = mongoose.model('friends');

module.exports = app => {
    const DEMO_USER_ID = 'google-oauth2|112112280522876375272';
    app.get('/api/:userId/friends', async (req, res) => {
        const friends = await Friend.find(
            {
                // relations.contains(?): DEMO_USER_ID
            }
        );

        res.send(friends);
    });
};
