const mongoose = require('mongoose');

const Project = mongoose.model('projects');

module.exports = app => {
    // The RIGHT way
    // app.get('/api/:userId/projects', async (req, res) => {
    //     const projects = await Project.find({
    //         user: req.params.userId
    //     });
    //     res.send(projects);
    // });

    // The DEMO way
    app.get('/api/projects', async (req, res) => {
        const projects = await Project.find();
        console.log('getting projects');
        res.send(projects);
    });
};
