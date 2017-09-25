const mongoose = require('mongoose');

const Project = mongoose.model('projects');

module.exports = app => {
    app.get('/api/:userId/projects', (req, res) => {
        res.send('getting user projects for:', req.params.userId);
    });
};
