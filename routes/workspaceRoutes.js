const mongoose = require('mongoose');

const Project = mongoose.model('projects');

module.exports = app => {
    app.get('/api/workspace/:workspaceId', async (req, res) => {
        const project = await Project.findById(req.params.workspaceId);

        res.send(project);
    });
};
