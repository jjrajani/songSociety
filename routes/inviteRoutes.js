const mongoose = require('mongoose');

const User = mongoose.model('users');
const Project = mongoose.model('projects');

module.exports = app => {
    // GET Invites
    app.get('/api/user/:userId/invites', async (req, res) => {
        const invites = await User.findById(req.params.userId, 'invites');

        res.send(invites);
    });

    // POST Invite collaborator
    app.post(
        '/api/invite/:inviterId/:workspaceId/:inviteeId',
        async (req, res) => {
            const { inviterId, inviteeId, workspaceId } = req.params;

            let inviter = await User.findById(
                inviterId,
                'nickname img _id invites'
            );
            let invited = await User.findById(
                inviteeId,
                'nickname img _id invites'
            );
            let workspace = await Project.findById(workspaceId, 'name _id');

            inviter.invites.outgoing.push({
                inviteeId: invited._id,
                inviteeName: invited.nickname,
                inviteeImg: invited.img,
                workspace
            });

            invited.invites.incoming.push({
                inviterId: inviter._id,
                inviterName: inviter.nickname,
                inviterImg: inviter.img,
                workspace
            });
            inviter.save();
            invited.save();

            res.send(inviter.invites);
        }
    );

    // POST Accept Invite
    app.post('/api/invites/accept/:userId', async (req, res) => {
        const acceptingUser = await User.findById(req.params.userId);
        const invitingUser = await User.findById(req.body.inviterId);
        const invite = req.body;
        const project = await Project.findById(invite.workspace._id);

        // remove invite from incoming on acceptingUser
        let newAcceptingUserIncomingInvites = acceptingUser.invites.incoming.filter(
            i => {
                return i.workspace._id != invite.workspace._id;
            }
        );
        acceptingUser.invites.incoming = newAcceptingUserIncomingInvites;
        acceptingUser.save();

        // remove invite from outgoing on invitingUser
        let newInvitingUserOutgoingInvites = invitingUser.invites.outgoing.filter(
            i => {
                return i.workspace._id != invite.workspace._id;
            }
        );
        invitingUser.invites.outgoing = newInvitingUserOutgoingInvites;
        invitingUser.save();

        // add accpetingUser to collaborators array on workspace
        project.collaborators.push(acceptingUser._id);
        project.save();
        res.send(invite.workspace._id);
    });

    // POST Decline Invite
    app.post('/api/invites/decline/:userId', async (req, res) => {
        const invite = req.body;
        const declingingUser = await User.findById(req.params.userId);
        const invitingUser = await User.findById(invite.inviterId);

        const project = await Project.findById(invite.workspace._id);
        // remove invite from incoming on acceptingUser
        let newAcceptingUserIncomingInvites = declingingUser.invites.incoming.filter(
            i => {
                return i.workspace._id != invite.workspace._id;
            }
        );
        declingingUser.invites.incoming = newAcceptingUserIncomingInvites;
        declingingUser.save();

        // remove invite from outgoing on invitingUser
        let newInvitingUserOutgoingInvites = invitingUser.invites.outgoing.filter(
            i => {
                return i.workspace._id != invite.workspace._id;
            }
        );
        invitingUser.invites.outgoing = newInvitingUserOutgoingInvites;
        invitingUser.save();

        res.send(invite.workspace._id);
    });
};
