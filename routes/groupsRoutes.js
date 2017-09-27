const mongoose = require('mongoose');

const Group = mongoose.model('groups');

module.exports = app => {
    const DEMO_USER_ID = 'google-oauth2|112112280522876375272';

    app.get('/api/:userId/groups', async (req, res) => {
        const groups = await Group.find({
            // owner: req.params.userId
            owner: DEMO_USER_ID
        });

        res.send(groups);
    });
};
