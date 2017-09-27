const mongoose = require('mongoose');

const Project = mongoose.model('projects');

module.exports = app => {
    // The RIGHT way
    const DEMO_USER_ID = 'google-oauth2|112112280522876375272';

    app.get('/api/:userId/projects', async (req, res) => {
        const projects = await Project.find({
            // user: req.params.userId
            user: DEMO_USER_ID
        });
        res.send(projects);
    });
};
