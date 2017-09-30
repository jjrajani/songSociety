const mongoose = require('mongoose');

const Group = mongoose.model('groups');

module.exports = app => {
    app.get('/api/:userId/groups', async (req, res) => {
        const groups = await Group.find({
            owner: req.params.userId
        });

        res.send(groups);
    });
};
