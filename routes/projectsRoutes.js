const mongoose = require('mongoose');

const Project = mongoose.model('projects');
const User = mongoose.model('users');

module.exports = app => {
    // GET user projects
    app.get('/api/:userId/projects', async (req, res) => {
        let userProjects = await Project.find({
            user: req.params.userId
        });
        const projects = await Project.find().sort('-created_at');
        let collabProjects;

        if (userProjects.length === 0) {
            const authUser = await User.findById(req.params.userId);
            userProjects = await Project.find({
                user: authUser.authId
            }).sort('-created_at');
            collabProjects = projects.filter(p => {
                return p.collaborators.indexOf(authUser._id);
            });
        } else {
            userProjects.sort('-created_at');
            collabProjects = projects.filter(p => {
                return p.collaborators.indexOf(req.params.userId) !== -1;
            });
        }

        res.send({ myProjects: userProjects, collabs: collabProjects });
    });
};
