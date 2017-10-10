const mongoose = require('mongoose');
// Models
const Comment = mongoose.model('comments');
const Project = mongoose.model('projects');
const User = mongoose.model('users');
// Services
const commentServices = require('../services/commentsServices');

module.exports = app => {
    // GET all comments for a workspace
    app.get('/api/:workspaceId/comments', async (req, res) => {
        // fetch comments for workspace
        const comments = await Comment.find({
            workspaceId: req.params.workspaceId
        }).sort('-created_at');
        const project = await Project.findById(req.params.workspaceId);
        const { currentAudio } = project;
        const sortedComments = commentServices.sortByPromoted(comments);

        res.send(sortedComments);
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
        const comments = await Comment.find({
            workspaceId: req.params.workspaceId
        }).sort('-created_at');
        const sortedComments = commentServices.sortByPromoted(comments);

        res.status(200).send(sortedComments);
    });
    // POST Promote Comment
    app.post(
        '/api/comments/promote/:workspaceId/:commentId/audio',
        async (req, res) => {
            const project = await Project.findById(req.params.workspaceId);
            let comments = await Comment.find({
                workspaceId: req.params.workspaceId
            }).sort('-created_at');
            comments = commentServices.sortByPromoted(
                commentServices.togglePromoted(comments, req.params.commentId)
            );
            project.currentAudio = req.body.audio;
            project.save();

            res.status(200).send({ workspace: project, comments: comments });
        }
    );
};
