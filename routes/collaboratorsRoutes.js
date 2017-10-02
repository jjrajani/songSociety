const mongoose = require('mongoose');

const Project = mongoose.model('projects');
const User = mongoose.model('users');

module.exports = app => {
    app.get('/api/collaborators/:workspaceId', async (req, res) => {
        const { workspaceId } = req.params;
        const collaborators = await Project.findById(
            workspaceId,
            'collaborators'
        );
        res.status(200).send(collaborators);
    });

    // app.post(
    //     '/api/:userId/:workspaceId/collaborators/invite/:collaboratorId',
    //     async (req, res) => {
    //         const { userId, workspaceId, collaboratorId } = req.params;
    //         console.log('inviting route');
    //         // console.log('userId', userId);
    //         // console.log('workspaceId', workspaceId);
    //         // console.log('collaboratorId', collaboratorId);
    //         const user = await User.findById(userId, (err, res) => {
    //             if (!err) {
    //                 return res;
    //             } else {
    //                 return err;
    //             }
    //         });
    //         const collaborator = await User.findById(
    //             collaboratorId,
    //             (err, res) => {
    //                 if (!err) {
    //                     return res;
    //                 } else {
    //                     return err;
    //                 }
    //             }
    //         );
    //         user.outGoingInvites.push({
    //             collaboratorId,
    //             workspaceId
    //         });
    //         user.save();
    //         collaborator.incomingInvites.push({
    //             userId,
    //             workspaceId
    //         });
    //         collaborator.save();
    //         console.log('user', user);
    //         console.log('collaborator', collaborator);
    //         res.status(200).send('invited');
    //     }
    // );

    app.post('/api/collaborators/:workspaceId/:userId', async (req, res) => {
        const { workspaceId, userId } = req.params;
        const project = await Project.findById(workspaceId, 'collaborators');
        if (Object.values(project.collaborators).indexOf(userId) === -1) {
            project.collaborators.push(userId);
            project.save();
        }
        res.status(200).send(project);
    });

    app.delete('/api/collaborators/:workspaceId/:userId', async (req, res) => {
        const { workspaceId, userId } = req.params;
        let project = await Project.findById(workspaceId, 'collaborators');

        let filteredCollaborators = project.collaborators.filter(c => {
            return c !== userId;
        });
        project.collaborators = filteredCollaborators;
        project.save();

        res.status(200).send(filteredCollaborators);
    });
};
