const mongoose = require('mongoose');

const Project = mongoose.model('projects');

module.exports = app => {
    // GET A workspace
    app.get('/api/workspace/:workspaceId', async (req, res) => {
        const project = await Project.findById(req.params.workspaceId);

        res.send(project);
    });
    // POST Update a workspace
    app.post('/api/workspace/:workspaceId', async (req, res) => {
        let project = await Project.findById(req.params.workspaceId);
        project.name = req.body.name;
        project.save();
        res.status(200).send(project);
    });
    // POST A new workpsace
    app.post('/api/new/workspace/:userId', async (req, res) => {
        let project = new Project({
            name: req.body.name,
            user: req.params.userId
        });
        project.save();
        res.status(200).send(project);
    });
};
