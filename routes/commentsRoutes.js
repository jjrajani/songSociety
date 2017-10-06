const mongoose = require('mongoose');

const Comment = mongoose.model('comments');
const Project = mongoose.model('projects');
const User = mongoose.model('users');

module.exports = app => {
    // GET all comments for a workspace
    app.get('/api/:workspaceId/comments', async (req, res) => {
        // fetch comments for workspace
        const comments = await Comment.find({
            workspaceId: req.params.workspaceId
        }).sort('-created_at');
        const project = await Project.findById(req.params.workspaceId);
        const { currentAudio } = project;
        let orderedComments = comments.reduce((a, b) => {
            if (b.audio === currentAudio) {
                a.unshift(b);
            } else {
                a.push(b);
            }
            return a;
        }, []);
        res.send(orderedComments);
    });
    // POST new comment to workspace
    app.post('/api/:workspaceId/comments', async (req, res) => {
        const user = await User.findById(req.body.userId, 'img');
        let comment = new Comment({
            userId: req.body.userId,
            content: req.body.content,
            audio: req.body.audio,
            workspaceId: req.params.workspaceId,
            userImg: user.img
        });
        await comment.save();

        res.status(200).send(comment);
    });
    // POST Promote Comment
    app.post('/api/comments/promote/:workspaceId/audio', async (req, res) => {
        const project = await Project.findById(req.params.workspaceId);
        project.currentAudio = req.body.audio;
        project.save();

        res.status(200).send(project);
    });
};
