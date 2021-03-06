const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema(
    {
        paid: { type: Boolean, default: false },
        storageSize: { type: Number, default: 5 },
        description: String,
        website: String,
        // init the following from google
        authId: String,
        // from google but able to edit
        name: String,
        img: String,
        email: String,
        nickname: String,
        followers: { type: [String], default: [] },
        latestProject: String,
        invites: {
            incoming: { type: [], default: [] },
            outgoing: { type: [], default: [] }
        },
        isPrivate: { type: Boolean, default: false }
        // facebook
        // twitter
    },
    { timestamps: { createdAt: 'created_at' } }
);

mongoose.model('users', userSchema);
