const mongoose = require('mongoose');

const Project = mongoose.model('projects');

module.exports = app => {
    app.get('/api/workspace/:workspaceId', async (req, res) => {
        const project = await Project.findById(req.params.workspaceId);

        res.send(project);
    });

    app.post('/api/workspace/:workspaceId', async (req, res) => {
        let project = await Project.findById(req.params.workspaceId);
        project.name = req.body.name;
        project.save();
        res.status(200).send(project);
    });

    app.post('/api/new/workspace/:userId', async (req, res) => {
        let project = new Project({
            name: req.body.name,
            user: req.params.userId
        });
        project.save();
        res.status(200).send(project);
    });
};
