const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema(
    {
        paid: Boolean,
        description: String,
        website: String,
        // init the following from google
        authId: String,
        // from google but able to edit
        name: String,
        img: String,
        email: String,
        nickname: String,
        friends: [String]

        // facebook
        // twitter
    },
    { timestamps: { createdAt: 'created_at' } }
);

mongoose.model('users', userSchema);
