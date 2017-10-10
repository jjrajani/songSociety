const mongoose = require('mongoose');

const Project = mongoose.model('projects');
const User = mongoose.model('users');
// Services
const projectsServices = require('../services/projectsServices');

module.exports = app => {
    // GET user projects
    app.get('/api/:userId/projects', async (req, res) => {
        let projects;
        if (req.params.userId.includes('google')) {
            projects = await projectsServices.authIdProjects(req.params.userId);
        } else {
            projects = await projectsServices.userIdProjects(req.params.userId);
        }
        userProjects = projects.userProjects;
        collabProjects = projects.collabProjects;

        res
            .status(200)
            .send({ myProjects: userProjects, collabs: collabProjects });
    });
};
