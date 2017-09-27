const mongoose = require('mongoose');

const Group = mongoose.model('groups');

module.exports = app => {
    // the RIGHT way
    // app.get('/api/:userId/groups', (req, res) => {
    //     res.send('getting user groups for:', req.params.userId);
    // });
    // the DEMO way
    app.get('/api/groups', async (req, res) => {
        const groups = await Group.find();

        res.send(groups);
    });
};
