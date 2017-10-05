const mongoose = require('mongoose');

const User = mongoose.model('users');

module.exports = app => {
    // POST create or update user
    app.post('/api/user', async (req, res) => {
        const userExists = await User.find({ authId: req.body.sub });
        if (userExists.length) {
            res.send(userExists[0]);
        } else {
            let user = new User({
                paid: false,
                authId: req.body.sub,
                website: 'Add your website.',
                description: 'Add a bio.',
                name: req.body.name,
                nickname: req.body.nickname,
                img: req.body.picture,
                email: 'Add your email',
                followers: ['i have no followers yet'],
                latestProject: ''
            });
            await user.save((err, doc) => {
                if (!err) {
                    res.send(doc);
                } else {
                    res.send(err);
                }
            });
        }
    });
    // GET All users
    app.get('/api/users', async (req, res) => {
        const users = await User.find().sort('nickname');

        res.send(users);
    });
    // GET a single user
    app.get('/api/user/:id', async (req, res) => {
        const user = await User.find({
            authId: req.params.id
        });
        res.send(user[0]);
    });
};
