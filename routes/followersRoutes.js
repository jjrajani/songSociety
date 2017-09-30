const mongoose = require('mongoose');

const Follower = mongoose.model('followers');
const User = mongoose.model('users');

module.exports = app => {
    app.get('/api/:userId/followers', async (req, res) => {
        const user = await User.findOne({ authId: req.params.userId });
        const followers = await User.find(
            { authId: { $in: user.followers } },
            (err, docs) => {
                if (!err) {
                    res.status(200).send(docs);
                } else {
                    res.status(400).send(err);
                }
            }
        );
    });

    app.post('/api/:userId/add_follower/:followerUserId', async (req, res) => {
        let user = await User.findOne({ authId: req.params.userId });
        if (user.followers.indexOf(req.params.followerUserId) === -1) {
            user.followers.push(req.params.followerUserId);
            user.save((err, doc) => {
                if (!err) {
                    res.status(200).send(doc);
                } else {
                    res.status(500).send(err);
                }
            });
        } else {
            res.send('this person is already your follower');
        }
    });

    app.get('/api/follower/:followerId', async (req, res) => {
        const follower = await User.findById(
            { _id: req.params.followerId },
            (err, doc) => {
                if (!err) {
                    res.status(200).send(doc);
                } else {
                    res.status(500).send(err);
                }
            }
        );
    });
};
