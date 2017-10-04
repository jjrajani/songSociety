const mongoose = require('mongoose');

const Comment = mongoose.model('comments');
const User = mongoose.model('users');

module.exports = app => {
    // GET all comments for a workspace
    app.get('/api/:workspaceId/comments', async (req, res) => {
        // fetch comments for workspace
        const comments = await Comment.find({
            workspaceId: req.params.workspaceId
        });

        res.send(comments);
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
};
