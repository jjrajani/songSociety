const mongoose = require('mongoose');

const Project = mongoose.model('projects');

module.exports = app => {
    app.get('/api/:userId/projects', async (req, res) => {
        const projects = await Project.find({
            user: req.params.userId
        });
        console.log('projects');
        res.send(projects);
    });

    // app.post('/api/projects', (req, res) => {
    //     User.update(
    //         {
    //             authId: req.body.sub
    //         },
    //         { authId: req.body.sub },
    //         { upsert: true }
    //     ).exec();
    //     res.send('creating or updating user');
    // });
};
