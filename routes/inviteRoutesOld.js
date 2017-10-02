const mongoose = require('mongoose');

const User = mongoose.model('users');
const Project = mongoose.model('projects');

module.exports = app => {
    app.get('/api/user/:userId/invites', async (req, res) => {
        const user = await User.findById(req.params.userId);
        let incoming = user.incomingInvites;

        let incomingUserIds = incoming.map(i => i.userId);
        let incomingWorkspaceIds = incoming.map(i => i.workspaceId);
        let incomingUsers = await User.find(
            { _id: { $in: incomingUserIds } },
            'nickname img _id',
            (err, docs) => {
                if (!err) {
                    return docs;
                } else {
                    throw new Error(err);
                }
            }
        );
        let incomingWorkspaces = await Project.find(
            {
                _id: { $in: incomingWorkspaceIds }
            },
            '_id name user',
            (err, docs) => {
                if (!err) {
                    return docs;
                } else {
                    throw new Error(err);
                }
            }
        );
        let incomingInvites = [];
        for (let i = 0; i < incomingUsers.length; i++) {
            incomingInvites.push({
                user: incomingUsers[i],
                workspace: incomingWorkspaces[i]
            });
        }

        // OUTGOING
        let outgoing = user.outGoingInvites;

        let outGoingUserIds = outgoing.map(i => i.collaboratorId);
        let outGoingWorkspaceIds = outgoing.map(i => i.workspaceId);
        let outGoingUsers = await User.find(
            { _id: { $in: outGoingUserIds } },
            'nickname img _id',
            (err, docs) => {
                if (!err) {
                    return docs;
                } else {
                    throw new Error(err);
                }
            }
        );
        let outGoingWorkspaces = await Project.find(
            {
                _id: { $in: outGoingWorkspaceIds }
            },
            '_id name user',
            (err, docs) => {
                if (!err) {
                    return docs;
                } else {
                    throw new Error(err);
                }
            }
        );
        let outGoingInvites = [];
        for (let i = 0; i < outGoingUsers.length; i++) {
            outGoingInvites.push({
                user: outGoingUsers[i],
                workspace: outGoingWorkspaces[i]
            });
        }

        let data = { incoming: incomingInvites, outgoing: outGoingInvites };
        res.status(200).send(data);
    });
};
