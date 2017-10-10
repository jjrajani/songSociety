const mongoose = require('mongoose');

const Project = mongoose.model('projects');
const User = mongoose.model('users');

module.exports = {
    authIdProjects: async authId => {
        const projects = await Project.find().sort('-created_at');
        const userProjects = await Project.find({
            user: authId
        });
        const collabProjects = projects.filter(p => {
            return p.collaborators.indexOf(authId) !== -1;
        });
        return {
            userProjects,
            collabProjects
        };
    },

    userIdProjects: async userId => {
        const projects = await Project.find().sort('-created_at');
        const artist = await User.findById(userId);
        const { authId } = artist;

        const userProjects = await Project.find({
            user: authId
        });
        const collabProjects = projects.filter(p => {
            return p.collaborators.indexOf(authId) !== -1;
        });
        return {
            userProjects,
            collabProjects
        };
    }
};
