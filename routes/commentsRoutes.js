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
        // map over comments and take userIds
        const userIds = comments.map(c => c.userId);
        // fetch all users and take thier imgs and authIds
        const userImages = await User.find(
            {
                authId: { $in: userIds }
            },
            'img authId'
        );
        // map images to comments
        const newComments = comments.map(c => {
            let newComment = {
                userId: c.userId,
                content: c.content,
                audio: c.audio,
                workspaceId: c.workspaceId
            };
            userImages.forEach(img => {
                if (c.userId === img.authId) {
                    newComment.img = img.img;
                }
            });
            return newComment;
        });

        res.send(newComments);
    });
};
