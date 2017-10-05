const mongoose = require('mongoose');

const Project = mongoose.model('projects');
const User = mongoose.model('users');

module.exports = app => {
    // GET user projects
    app.get('/api/:userId/projects', async (req, res) => {
        const userProjects = await Project.find({
            user: req.params.userId
        }).sort('-createdAt');
        const projects = await Project.find().sort('-createdAt');
        const collabProjects = projects.filter(p => {
            return p.collaborators.indexOf(req.params.userId) !== -1;
        });

        res.send({ myProjects: userProjects, collabs: collabProjects });
    });
};
