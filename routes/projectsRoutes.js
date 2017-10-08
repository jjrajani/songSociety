const mongoose = require('mongoose');

const Project = mongoose.model('projects');
const User = mongoose.model('users');

module.exports = app => {
    // GET user projects
    app.get('/api/:userId/projects', async (req, res) => {
        const projects = await Project.find().sort('-created_at');
        let userProjects;
        let collabProjects;
        if (req.params.userId.includes('google')) {
            userProjects = await Project.find({
                user: req.params.userId
            });
            collabProjects = projects.filter(p => {
                return p.collaborators.indexOf(req.params.userId) !== -1;
            });
        } else {
            const artist = await User.findById(req.params.userId);
            const { authId } = artist;

            userProjects = await Project.find({
                user: authId
            });
            collabProjects = projects.filter(p => {
                return p.collaborators.indexOf(authId) !== -1;
            });
        }

        res
            .status(200)
            .send({ myProjects: userProjects, collabs: collabProjects });
    });
};
