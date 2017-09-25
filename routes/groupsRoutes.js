const mongoose = require('mongoose');

const Group = mongoose.model('groups');

module.exports = app => {
    app.get('/api/:userId/groups', (req, res) => {
        res.send('getting user groups for:', req.params.userId);
    });
};
