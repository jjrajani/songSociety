const mongoose = require('mongoose');

const User = mongoose.model('users');

module.exports = app => {
    // POST create or update user
    app.post('/api/user', async (req, res) => {
        const userExists = User.find({ authId: req.body.sub });
        if (userExists.length) {
            res.send(userExists[0]);
        } else {
            let user = {
                paid: false,
                authId: req.body.sub,
                website: 'Add your website.',
                description: 'Add a bio.',
                name: req.body.name,
                nickname: req.body.nickname,
                img: req.body.picture,
                email: 'Add your email',
                friends: ['i have no friends yet'],
                latestProject: ''
            };
            user = await User.update(
                user,
                { authId: req.body.sub },
                { upsert: true }
            ).exec((err, docs) => {
                if (!err) {
                    res.send(docs);
                } else {
                    res.send(err);
                }
            });
        }
    });
    // GET list of users
    app.get('/api/users', async (req, res) => {
        const users = await User.find(
            {
                // relations.contains(?): DEMO_USER_ID
            }
        );

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
