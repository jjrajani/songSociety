const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema(
    {
        paid: { type: Boolean, default: false },
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
        outGoingInvites: {
            type: [
                {
                    collaboratorId: String,
                    workspaceId: String
                }
            ],
            default: []
        }, // put colab to accept _id here
        incomingInvites: {
            type: [
                {
                    userId: String,
                    workspaceId: String
                }
            ],
            default: []
        } // put inviter _id here
        // facebook
        // twitter
    },
    { timestamps: { createdAt: 'created_at' } }
);

mongoose.model('users', userSchema);
