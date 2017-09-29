const mongoose = require('mongoose');

const Friend = mongoose.model('friends');
const User = mongoose.model('users');

module.exports = app => {
    app.get('/api/:userId/friends', async (req, res) => {
        const user = await User.findOne({ authId: req.params.userId });
        const friends = await User.find(
            { authId: { $in: user.friends } },
            (err, docs) => {
                if (!err) {
                    res.status(200).send(docs);
                } else {
                    res.status(400).send(err);
                }
            }
        );
    });

    app.post('/api/:userId/add_friend/:friendUserId', async (req, res) => {
        let user = await User.findOne({ authId: req.params.userId });
        if (user.friends.indexOf(req.params.friendUserId) === -1) {
            user.friends.push(req.params.friendUserId);
            user.save((err, doc) => {
                if (!err) {
                    res.status(200).send(doc);
                } else {
                    res.status(500).send(err);
                }
            });
        } else {
            res.send('this person is already your friend');
        }
    });

    app.get('/api/friend/:friendId', async (req, res) => {
        const friend = await User.findById(
            { _id: req.params.friendId },
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
